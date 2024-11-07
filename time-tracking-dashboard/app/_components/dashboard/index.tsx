"use client"

import { useEffect, useState } from "react"
import Card from "../card"
import { DataType } from "./dashBoardTypes"
import { useDispatch, useSelector } from "react-redux"
import { setTimeframe } from "@/redux/timeframe/reducer"
import Image from "next/image"
import { rootReducer } from "@/redux/reduxTypes"

const Dashboard = () => {
  const dispatch = useDispatch()
  const { timeframe } = useSelector(
    (rootState: rootReducer) => rootState.timeframeSlice,
  )
  const [data, setData] = useState<DataType[]>([])

  const getData = async () => {
    const data = await fetch("/data.json").then((res) => res.json())
    setData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section className="flex min-h-screen w-full flex-col justify-center py-5 lg:p-0">
      <h1 className="sr-only">Time Tracking Dashboard</h1>
      <div className="flex w-full flex-col items-center gap-[1.875rem] lg:flex-row">
        <article className="w-full max-w-[23.5rem] rounded-2xl bg-neutral-dark-blue lg:h-[32.5rem] lg:w-64 lg:max-w-none">
          <div className="flex w-full max-w-[23.5rem] flex-row items-center justify-center gap-6 rounded-2xl bg-primary-blue px-[1.8125rem] py-2 lg:w-64 lg:max-w-none lg:flex-col lg:items-start lg:justify-normal lg:py-[2.1875rem]">
            <Image
              alt="profile image"
              src={"/images/image-jeremy.png"}
              width={84}
              height={84}
              className="rounded-full border-[0.1875rem] border-white"
            />
            <h2 className="heading flex flex-col pb-[2.125rem] pl-1 pt-1 leading-[2.875rem] text-white">
              <span className="headingS text-neutral-pale-blue">
                Report for
              </span>
              <span className="relative -top-3">Jeremy Robson</span>
            </h2>
          </div>

          <div className="flex flex-row justify-center gap-[0.875rem] px-[2rem] py-5 pt-6 lg:flex-col lg:items-start lg:pb-0">
            <button
              onClick={() => dispatch(setTimeframe("daily"))}
              className={`text-lg font-light ${
                timeframe === "daily"
                  ? "text-white"
                  : "text-neutral-desaturated-blue"
              }`}
            >
              Daily
            </button>
            <button
              onClick={() => dispatch(setTimeframe("weekly"))}
              className={`text-lg font-light ${
                timeframe === "weekly"
                  ? "text-white"
                  : "text-neutral-desaturated-blue"
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => dispatch(setTimeframe("monthly"))}
              className={`text-lg font-light ${
                timeframe === "monthly"
                  ? "text-white"
                  : "text-neutral-desaturated-blue"
              }`}
            >
              Monthly
            </button>
          </div>
        </article>

        <ul className="flex w-full flex-col items-center gap-[1.75rem] lg:flex-row lg:flex-wrap">
          {data &&
            data.map((item) => (
              <Card
                type={item.title as any}
                key={item.title}
                timeframes={item.timeframes}
                title={item.title}
              />
            ))}
        </ul>
      </div>
    </section>
  )
}

export default Dashboard
