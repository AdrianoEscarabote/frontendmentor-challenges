"use client"

import { Provider } from "react-redux"
import Calculator from "./_components/calculator"
import store from "@/redux/store"

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-center p-5">
        <h1 className="sr-only">Welcome to age calculator app</h1>
        <Calculator />
      </main>
    </Provider>
  )
}
