"use client"

import { useState } from "react"
import { useDispatch } from "react-redux"

import { setFilter } from "@/redux/extensions/reducer"

const FilterTabs = () => {
  const [activeTab, setActiveTab] = useState("all")
  const dispatch = useDispatch()

  return (
    <div className="filter-tabs">
      <ul className="text-preset-3 flex items-center gap-[13px]">
        <li className="active">
          <button
            onClick={() => {
              setActiveTab("all")
              dispatch(setFilter("all"))
            }}
            className={`bg-background-1 h-[46px] cursor-pointer rounded-full px-5 ${activeTab === "all" ? "bg-background-red text-text-color-3" : "text-text-color-1"}`}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setActiveTab("active")
              dispatch(setFilter("active"))
            }}
            className={`bg-background-1 text-text-color-1 h-[46px] cursor-pointer rounded-full px-5 ${activeTab === "active" ? "bg-background-red" : ""}`}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setActiveTab("inactive")
              dispatch(setFilter("inactive"))
            }}
            className={`bg-background-1 text-text-color-1 h-[46px] cursor-pointer rounded-full px-5 ${activeTab === "inactive" ? "bg-background-red" : ""}`}
          >
            Inactive
          </button>
        </li>
      </ul>
    </div>
  )
}

export default FilterTabs
