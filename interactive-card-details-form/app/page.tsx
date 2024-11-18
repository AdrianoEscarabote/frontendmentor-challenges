"use client"

import { Provider } from "react-redux"
import CardDisplay from "./_components/cardDisplay"
import Form from "./_components/form"
import store from "@/redux/store"

export default function Home() {
  return (
    <main className="">
      <div className="container_form mx-auto flex min-h-screen max-w-[90rem] flex-col items-center justify-center px-5 lg:flex-row lg:px-[10.3125rem]">
        <Provider store={store}>
          <CardDisplay />
          <Form />
        </Provider>
      </div>
    </main>
  )
}
