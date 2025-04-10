"use client"

import { Provider } from "react-redux"

import store from "@/redux/store"

import ExtensionsList from "./_components/extensions-list"
import FilterTabs from "./_components/filter-tabs"
import Header from "./_components/header"

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-[1440px] py-10 lg:px-[135px]">
      <Header />
      <Provider store={store}>
        <main className="mt-16">
          <div className="flex items-center justify-between">
            <h1 className="text-preset-1 text-text-color-1">Extensions List</h1>
            <FilterTabs />
          </div>
          <ExtensionsList />
        </main>
      </Provider>
    </div>
  )
}
