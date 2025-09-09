import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : '',
    result : '' 
};

export const operationsSlice = createSlicer({
    name: 'operations',
    initialState,
    reducers:{

    }

})

export const { } = operationsSlice.actions;

export default operationsSlice.reducer;