import { createSlice } from '@reduxjs/toolkit'

export const getInfo = createSlice({
  name: 'getInfo',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  reducers: {
   sayHello: (state) => {
    alert("Hello from Redux!");
    }
   
   
  }
})

// Action creators are generated for each case reducer function
export const { sayHello } = getInfo.actions

export default getInfo.reducer