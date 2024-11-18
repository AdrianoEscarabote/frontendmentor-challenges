import Image from "next/image"
import style from "./style.module.css"
import { useSelector } from "react-redux"
import { rootState } from "@/redux/reduxTypes"

const CardDisplay = () => {
  const { cardholder_name, card_number, cvc, mm, yy } = useSelector(
    (rootReducer: rootState) => rootReducer.formSlice,
  )

  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center gap-6 text-light-grayish-violet lg:h-screen lg:items-start">
      <div
        className={`${style.background} ater:bg-main-mobile lg:after:bg-main-desktop`}
      ></div>
      <article className="relative flex w-full max-w-[23.625rem] flex-col justify-between gap-10 rounded-xl bg-card-front bg-cover bg-no-repeat px-5 pb-5 pt-7 shadow-2xl lg:-top-[1.125rem] lg:h-[15.3125rem] lg:w-[27.9375rem] lg:max-w-none lg:gap-0 lg:px-8">
        <div className="relative h-12 w-[5.125rem]">
          <Image src={"images/card-logo.svg"} alt="" fill />
        </div>
        <div className="flex flex-col">
          <p className="mb-5 text-[1.25rem] tracking-[0.2062rem] lg:text-[1.75rem]">
            {card_number ? card_number : "0000 0000 0000 0000"}
          </p>
          <div className="flex justify-between">
            <p className="truncated-text mb-1 text-[0.9375rem] uppercase tracking-[0.0813rem] text-white">
              {" "}
              {cardholder_name !== "" ? cardholder_name : "Jane Appleseed"}
            </p>
            <p className="text-[0.875rem] tracking-[0.1375rem]">
              {mm ? mm : "00"}/{yy ? yy : "00"}
            </p>
          </div>
        </div>
      </article>
      <article className="relative -top-1 flex h-[11.5rem] w-full max-w-[21rem] items-center justify-end rounded-xl bg-transparent bg-card-back bg-contain bg-no-repeat pb-1 pr-14 shadow-2xl lg:left-[5.75rem] lg:h-[15.3125rem] lg:w-[27.9375rem] lg:max-w-none lg:py-0">
        <p className="text-[0.875rem] tracking-[0.1375rem]">
          {cvc ? cvc : "000"}{" "}
        </p>
      </article>
    </section>
  )
}

export default CardDisplay
