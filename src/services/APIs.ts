import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import {API_CONFIG} from '../utils/constants';
import {store} from '../store';
import {showToast} from '../utils/helpers';
import {removeUserData} from '../store/slices/generalSlice';

const ENV = 'development';
const BASE_URL = API_CONFIG[ENV].apiUrl ? API_CONFIG[ENV].apiUrl : '';

export const APIS = {
  // =================== auth =================== //
  userLogin: '',
  register: '',
  logout: '',
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async error => {
    const state = store.getState();
    const accessToken = state.general.token;
    const tokenExpiration = state.general.tokenExpiration;
    const expirationDate = tokenExpiration ? new Date(tokenExpiration) : null;
    const currentDate = new Date();

    if (expirationDate && currentDate >= expirationDate) {
      store.dispatch(removeUserData());
      return Promise.reject(new Error('Token expired'));
    }

    const errRes = error.response?.data;
    let errMessage = errRes?.title || 'An unexpected error occurred';

    if (errRes?.status === 401) {
      const apiPath = errRes?.path;
      if (apiPath?.includes('authenticate') || apiPath?.includes('account')) {
        errMessage = 'Unauthorized - Bad credentials';
      } else {
        errMessage = 'Session expired. Please log in again.';
        store.dispatch(removeUserData());
      }
    } else if (errRes?.status === 403) {
      errMessage = 'User is blocked';
    }

    showToast(errMessage);

    if (accessToken && error) {
      return Promise.reject(new Error(errMessage));
    } else {
      return Promise.reject(error);
    }
  },
);

interface AxiosRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: keyof typeof APIS;
  data?: any;
  params?: any;
  header?: {[key: string]: string};
  pathParams?: string;
  isFormData?: boolean;
  showErrorToast?: boolean;
}

const Axios = async ({
  method,
  path,
  data,
  params,
  header = {},
  pathParams = '',
  isFormData = false,
  showErrorToast = true,
}: AxiosRequest): Promise<AxiosResponse<any>> => {
  const accessToken = store.getState().general?.token;
  const authHeader = accessToken
    ? {
        Authorization: `Bearer ${accessToken}`,
      }
    : {};

  try {
    const response = await axiosInstance({
      method: method,
      url: `${APIS[path]}${pathParams}`,
      data,
      params,
      headers: {
        'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
        Accept: 'application/json',
        'Api-Agent': 'ios',
        'Accept-Language': store.getState().general.appLanguage,
        ...authHeader,
        ...header,
      },
    } as AxiosRequestConfig);
    return response;
  } catch (error: any) {
    if (showErrorToast) {
      showToast(error.message || 'Error occurred during API call');
    }

    return Promise.reject(error);
  }
};

export default Axios;
