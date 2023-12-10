import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name : 'todos',
    initialState : {
        items : []
    },
    reducers : {

    },
})

export default todoSlice.reducer;