import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialStateType } from "../reduxTypes"

const initialState: initialStateType = {
  amount: 0,
  term: 0,
  rate: 0,
  paymentType: "",
  monthlyPayment: 0,
  totalRepayable: 0,
}

const calculatorSlice = createSlice({
  name: "calculatorSlice",
  initialState,
  reducers: {
    clearAll: (state) => {
      state.amount = 0
      state.term = 0
      state.rate = 0
      state.paymentType = ""
      state.monthlyPayment = 0
      state.totalRepayable = 0

      document
        .querySelectorAll(".container_input_radio")
        .forEach((element) => element.classList.remove("checked"))
    },
    setAmount: (state, action: PayloadAction<{ value: number }>) => {
      const { value } = action.payload
      state.amount = value
    },
    setTerm: (state, action: PayloadAction<{ value: number }>) => {
      const { value } = action.payload
      state.term = value
    },
    setRate: (state, action: PayloadAction<{ value: number }>) => {
      const { value } = action.payload
      state.rate = value
    },
    setPaymentType: (state, action: PayloadAction<{ value: string }>) => {
      const { value } = action.payload
      state.paymentType = value
    },
    calculateMortgage(state) {
      const { amount, term, rate, paymentType } = state
      const monthlyRate = rate / 100 / 12
      const numberOfPayments = term * 12

      if (amount <= 0 || term <= 0 || rate <= 0) {
        state.monthlyPayment = 0
        state.totalRepayable = 0
        return
      }

      if (paymentType === "repayment") {
        const monthlyPayment =
          (amount * monthlyRate) /
          (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
        const totalRepayable = monthlyPayment * numberOfPayments

        state.monthlyPayment = Number(monthlyPayment.toFixed(6))
        state.totalRepayable = Number(totalRepayable.toFixed(6))
      } else if (paymentType === "interest_only") {
        const monthlyPayment = amount * monthlyRate
        const totalRepayable = monthlyPayment * numberOfPayments

        state.monthlyPayment = Number(monthlyPayment.toFixed(6))
        state.totalRepayable = Number(totalRepayable.toFixed(6))
      }
    },
  },
})

export default calculatorSlice.reducer

export const {
  setPaymentType,
  calculateMortgage,
  setAmount,
  setTerm,
  setRate,
  clearAll,
} = calculatorSlice.actions
