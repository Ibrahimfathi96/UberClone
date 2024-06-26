import axios from 'axios';
import {API_CONFIG} from '../utils/constants';

axios.defaults.timeout = 10000;

export const API_DEVELOPMENT = `${API_CONFIG.dubug}`;
export const API_STAGING = `${API_CONFIG.dubugLive}`;
export const API_PRODUCTION = `${API_CONFIG.release}`;
