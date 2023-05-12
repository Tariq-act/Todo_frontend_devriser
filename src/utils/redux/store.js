import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './task';
import authReducer from './auth';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    authUser: authReducer,
  },
  devTools: true,
});
console.log('csdvs');

export default store;
