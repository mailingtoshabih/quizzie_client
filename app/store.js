// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './PageSlice';
import formReducer from './formSlice';
import quizReducer from './quizSlice';

const store = configureStore({
  reducer: {
    counter: pageReducer,
    form: formReducer,
    finalanswer : quizReducer,
  },
});

export default store;
