import { combineReducers } from '@reduxjs/toolkit';
import FormSlice from './slices/Form/FormSlice';
import HomeSlice from './slices/Home/HomeSlice';

const rootReducer = combineReducers({
  FormCards: FormSlice,
  Home: HomeSlice,
});

export default rootReducer;
