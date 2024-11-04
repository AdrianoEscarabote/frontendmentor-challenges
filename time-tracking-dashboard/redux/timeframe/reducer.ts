import { createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "../reduxTypes";

const initialState: initialStateType = {
  timeframe: "daily",
};

const timeframeSlice = createSlice({
  name: "timeframe",
  initialState,
  reducers: {
    setTimeframe: (state, action) => {
      state.timeframe = action.payload;
    },
  },
});

export const { setTimeframe } = timeframeSlice.actions;
export default timeframeSlice.reducer;
