import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialStateType } from "../reduxTypes"

const initialState: initialStateType = {
  cardholder_name: "",
  card_number: "",
  cvc: "",
  mm: "",
  yy: "",
}

const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.cardholder_name = action.payload
    },
    updateCardNumber: (state, action: PayloadAction<string>) => {
      state.card_number = action.payload
    },
    updateCvc: (state, action: PayloadAction<string>) => {
      state.cvc = action.payload
    },
    udpateMM: (state, action: PayloadAction<string>) => {
      state.mm = action.payload
    },
    updateYY: (state, action: PayloadAction<string>) => {
      state.yy = action.payload
    },
    clear: (state) => {
      state.cardholder_name = ""
      state.card_number = ""
      state.cvc = ""
      state.mm = ""
      state.yy = ""
    },
  },
})

export default formSlice.reducer

export const {
  clear,
  updateName,
  updateCardNumber,
  updateCvc,
  udpateMM,
  updateYY,
} = formSlice.actions
