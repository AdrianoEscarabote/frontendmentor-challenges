"use client"

import { Provider } from "react-redux"
import Dashboard from "./_components/dashboard"
import store from "@/redux/store"

export default function Home() {
  return (
    <Provider store={store}>
      <main className="mx-auto w-full max-w-[1440px] px-5 lg:px-[165px]">
        <Dashboard />
      </main>
    </Provider>
  )
}
