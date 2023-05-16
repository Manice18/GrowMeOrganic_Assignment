import { createSlice } from "@reduxjs/toolkit";

const initialValue = false

export const accessSlice = createSlice({
    name: 'access',
    initialState: {value: initialValue},
    reducers: {
        access: (state,action)=>{
            state.value = action.payload;
        },
    },
});

export const {access} = accessSlice.actions;

export default accessSlice.reducer;