import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IGeneralState} from '../../utils/types';

const initialState: IGeneralState = {
  loading: false,
  token: null,
  user: null,
  appLanguage: 'en',
  userIsCreated: false,
  firstTimeAppInstall: true,
  loginAsAGuest: false,
  expiresIn: null,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setAppLanguage: (state, action: PayloadAction<string>) => {
      state.appLanguage = action.payload;
    },
    removeUserData: state => {
      state.token = null;
      state.expiresIn = null;
      state.user = null;
    },
  },
});

export const {setLoading, setToken, setUser, setAppLanguage, removeUserData} =
  generalSlice.actions;
export default generalSlice.reducer;
