// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 1,
    },
    reducers: {
        setPage: (state, actions) => {
            state.value = actions.payload;
        },
    },
});

export const { setPage } = pageSlice.actions;
export const currentPage = (state) => state.counter.value;

export default pageSlice.reducer;
