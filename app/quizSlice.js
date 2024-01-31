// quizSlice.js

import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    reduxAnswers: null,
  },
  reducers: {
    setReduxAnswers: (state, action) => {
      state.reduxAnswers = action.payload;
    },
  },
});

export const { setReduxAnswers } = quizSlice.actions;
export default quizSlice.reducer;
