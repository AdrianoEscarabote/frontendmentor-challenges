import { combineReducers } from "@reduxjs/toolkit";
import productsSlice from "@/redux/product/reducer";

const rootReducer = combineReducers({
  productsSlice,
});

export default rootReducer;
