import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "./product/reducer";

const rootReducer = combineReducers({
  productSlice,
});

export default rootReducer;
