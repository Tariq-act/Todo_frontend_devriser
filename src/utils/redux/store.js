import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './task';
import authReducer from './auth';
import userReducer from './user';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    authUser: authReducer,
    users: userReducer,
  },
  devTools: true,
});

export default store;
