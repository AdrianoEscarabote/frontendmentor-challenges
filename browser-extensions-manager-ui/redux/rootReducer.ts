import { combineReducers } from "@reduxjs/toolkit"

import extensionsSlice from "./extensions/reducer"

const rootReducer = combineReducers({
  extensionsSlice,
})

export default rootReducer
