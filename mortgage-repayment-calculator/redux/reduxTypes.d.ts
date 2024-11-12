export interface initialStateType {
  amount: number
  term: number
  rate: number
  paymentType: string
  monthlyPayment: number
  totalRepayable: number
}

export interface rootReducer {
  calculatorSlice: initialStateType
}
