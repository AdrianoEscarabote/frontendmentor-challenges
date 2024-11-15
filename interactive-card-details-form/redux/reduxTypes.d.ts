export interface initialStateType {
  cardholder_name: string
  card_number: string
  cvc: string
  mm: string
  yy: string
}

export interface rootState {
  formSlice: {
    cardholder_name: string
    card_number: string
    cvc: string
    mm: string
    yy: string
  }
}
