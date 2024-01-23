// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './PageSlice';
import formReducer from './formSlice'

const store = configureStore({
  reducer: {
    counter: pageReducer,
    form: formReducer,
  },
});

export default store;
