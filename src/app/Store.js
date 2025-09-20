import { configureStore } from '@reduxjs/toolkit'
import getInfoReducer from '../features/apiCall/getInfo'

export default configureStore({
  reducer: {
    getInfo: getInfoReducer
  }
})