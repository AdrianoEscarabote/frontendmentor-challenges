import { useSelector } from "react-redux"
import { CardProps } from "./CardProps"
import { rootReducer } from "@/redux/reduxTypes"
import Image from "next/image"
import { time } from "console"

const iconPaths = {
  Work: "/images/icon-work.svg",
  Play: "/images/icon-play.svg",
  Study: "/images/icon-study.svg",
  Exercise: "/images/icon-exercise.svg",
  Social: "/images/icon-social.svg",
  "Self Care": "/images/icon-self-care.svg",
}

const backgroundColors = {
  Work: "bg-primary-light-red-primary",
  Play: "bg-primary-soft-blue",
  Study: "bg-primary-light-red-secondary",
  Exercise: "bg-primary-lime-green",
  Social: "bg-primary-violet",
  "Self Care": "bg-primary-soft-orange",
}

const Card = ({ title, timeframes, type }: CardProps) => {
  const { timeframe } = useSelector(
    (rootState: rootReducer) => rootState.timeframeSlice,
  )

  return (
    <article className="w-full max-w-[23.5rem] overflow-hidden rounded-2xl lg:w-64">
      <div className="h-full max-h-[15.3125rem]">
        <div
          className={`flex items-center justify-end ${backgroundColors[type] || "bg-neutral-dark-blue"} max-h-[3.75rem] min-h-[3.75rem] pb-2 pr-4`}
        >
          {iconPaths[type] && (
            <Image
              src={iconPaths[type]}
              alt={`${type} icon`}
              width={72}
              height={72}
            />
          )}
        </div>

        <div className="relative -top-[0.875rem] h-full cursor-pointer rounded-2xl bg-neutral-dark-blue px-[0.875rem] py-[1.5rem] hover:bg-neutral-desaturated-blue lg:px-[1.875rem]">
          <div className="flex w-full justify-between">
            <h3 className="text-lg text-white">{title}</h3>
            <button className="pr-[0.0625rem]">
              <Image
                src={"/images/icon-ellipsis.svg"}
                alt="icon ellipsis"
                width={22}
                height={22}
              />
            </button>
          </div>

          {timeframe === "daily" && (
            <div className="flex flex-row items-center justify-between pt-10 lg:flex-col lg:items-start">
              <p className="text-4xl font-extralight leading-8 tracking-[-0.075rem] text-white lg:text-[3.625rem]">
                {timeframes?.daily.current}
                {timeframes?.daily.current > 1 ? "hrs" : "hr"}
              </p>
              <p className="tracking-[-0.0313rem] text-neutral-pale-blue lg:pt-[1.375rem]">
                <span>Last Day - </span>
                {timeframes?.daily.previous}
                {timeframes?.daily.previous > 1 ? "hrs" : "hr"}
              </p>
            </div>
          )}

          {timeframe === "weekly" && (
            <div className="flex flex-row items-center justify-between pt-10 lg:flex-col lg:items-start">
              <p className="text-4xl font-extralight leading-8 tracking-[-0.075rem] text-white lg:text-[3.625rem]">
                {timeframes?.weekly.current}
                {timeframes?.weekly.current > 1 ? "hrs" : "hr"}
              </p>
              <p className="tracking-[-0.0313rem] text-neutral-pale-blue lg:pt-[1.375rem]">
                <span>Last Week - </span>
                {timeframes?.weekly.previous}
                {timeframes?.weekly.previous > 1 ? "hrs" : "hr"}
              </p>
            </div>
          )}

          {timeframe === "monthly" && (
            <div className="flex flex-row items-center justify-between pt-10 lg:flex-col lg:items-start">
              <p className="text-4xl font-extralight leading-8 tracking-[-0.075rem] text-white lg:text-[3.625rem]">
                {timeframes?.monthly.current}
                {timeframes?.monthly.current > 1 ? "hrs" : "hr"}
              </p>
              <p className="tracking-[-0.0313rem] text-neutral-pale-blue lg:pt-[1.375rem]">
                <span>Last Month - </span>
                {timeframes?.monthly.previous}
                {timeframes?.monthly.previous > 1 ? "hrs" : "hr"}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default Card
