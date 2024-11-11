"use client"

import { Provider } from "react-redux"
import store from "../redux/store"
import MortgageCalculator from "./_components/mortgageCalculator"

export default function Home() {
  return (
    <Provider store={store}>
      <MortgageCalculator />
    </Provider>
  )
}
