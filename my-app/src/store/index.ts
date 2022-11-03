import { combineReducers, configureStore } from '@reduxjs/toolkit';
import FormSlice from './slices/FormSlice';

const rootReducer = combineReducers({
  FormCards: FormSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
