import { configureStore } from "@reduxjs/toolkit";
import operationsReducer from "./features/operations/operationsSlice";
export const store = configureStore({
  reducer: {
    operations: operationsReducer,
  },
});