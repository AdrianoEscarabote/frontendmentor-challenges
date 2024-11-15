import { combineReducers } from "@reduxjs/toolkit"
import formSlice from "./form/reducer"

const rootReducer = combineReducers({
  formSlice,
})

export default rootReducer
