// inputSlice.js
import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {d:3},
  reducers: {
    setInputValue: (state, action) => {
      const { formdata, page } = action.payload;
      // console.log(action.payload)
      // state.value = action.payload;       
      state.value = {
        ...state.value,
        ...action.payload,
      };                                //updating state
    },
  },
});

export const { setInputValue } = formSlice.actions;
export const selectInputValue = state => state.input.inputValue;
export default formSlice.reducer;
