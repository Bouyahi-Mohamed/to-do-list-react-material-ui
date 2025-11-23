import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// Async thunk to fetch weather info
export const fetchInfo = createAsyncThunk(
  'getInfo/fetchInfo',
  async ({ searchTerm, lang }) => {
    // default city is Tunis if searchTerm is empty
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm ? searchTerm : "tunis"}&appid=c680c19447bdb188d17ae242bb0a7c5b&lang=${lang}`;
    // await axios get request
    const response = await axios.get(url);
    console.log(response);

    // return response data this mean the data will be in action.payload
    return response.data;
  }
);
 // Create slice for weather info
export const getInfo = createSlice({
  // slice for weather info
  name: 'getInfo',
  // initial state
  initialState: {
    data: null,
    searchTerm: '',
    lang: 'ar',
    // loading state
    loading: false,
    error: null
  },
  // reducers for search term and lang
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setLang: (state, action) => {
      state.lang = action.payload
    }
  },
  // extra reducers for async thunk
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfo.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchInfo.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchInfo.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      });
  }
});

// Action creators are generated for each case reducer function
export const { setSearchTerm, setLang} = getInfo.actions
export default getInfo.reducer