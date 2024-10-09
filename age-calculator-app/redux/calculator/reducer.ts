import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { initialStateType } from "../reduxTypes"

const initialState: initialStateType = {
  day: 0,
  month: 0,
  year: 0,
  age: {
    days: 0,
    months: 0,
    years: 0,
  },
}

const calculatorSlice = createSlice({
  name: "calculatorSlice",
  initialState,
  reducers: {
    setDay: (state, action: PayloadAction<{ value: number }>) => {
      const { value } = action.payload
      state.day = value
    },
    setMonth: (state, action: PayloadAction<{ value: number }>) => {
      const { value } = action.payload
      state.month = value
    },
    setYear: (state, action: PayloadAction<{ value: number }>) => {
      const { value } = action.payload
      state.year = value
    },
    calculateBirth: (state) => {
      const currentDate = new Date()
      const birthDate = new Date(state.year, state.month - 1, state.day)

      let years = currentDate.getFullYear() - birthDate.getFullYear()
      let months = currentDate.getMonth() - birthDate.getMonth()
      let days = currentDate.getDate() - birthDate.getDate()

      if (months < 0) {
        years--
        months += 12
      }

      if (days < 0) {
        months--
        const previousMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0,
        )
        days += previousMonth.getDate()
      }

      state.age = { years, months, days }

      console.log(`Ano: ${state.year}`)
      console.log(`Mês: ${state.month}`)
      console.log(`Dia: ${state.day}`)
      console.log(`Idade: ${years} anos, ${months} meses, e ${days} dias`)
    },
  },
})

export default calculatorSlice.reducer

export const { setDay, setMonth, setYear, calculateBirth } =
  calculatorSlice.actions
