import { combineReducers } from "@reduxjs/toolkit"
import calculatorSlice from "./calculator/reducer"

const rootReducer = combineReducers({
  calculatorSlice,
})

export default rootReducer
