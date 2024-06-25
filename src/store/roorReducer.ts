import {combineReducers} from '@reduxjs/toolkit';
import generalSlice from './slices/generalSlice';

const rootReducer = combineReducers({
  general: generalSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
