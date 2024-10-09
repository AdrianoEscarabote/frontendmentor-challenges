export interface rootReducer {
  calculatorSlice: {
    day: number
    month: number
    year: number
    age: {
      days: number
      months: number
      years: number
    }
  }
}

export interface initialStateType {
  day: number
  month: number
  year: number
  age: {
    days: number
    months: number
    years: number
  }
}
