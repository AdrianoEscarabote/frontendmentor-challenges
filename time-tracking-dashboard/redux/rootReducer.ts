import { combineReducers } from "@reduxjs/toolkit";
import timeframeSlice from "./timeframe/reducer";

const rootReducer = combineReducers({
  timeframeSlice,
});

export default rootReducer;
