/* eslint-disable react/no-unescaped-entities */

import { useSelector } from "react-redux"
import { rootReducer } from "../../../redux/reduxTypes"

const YourResults = () => {
  const { monthlyPayment, totalRepayable } = useSelector(
    (rootState: rootReducer) => rootState.calculatorSlice,
  )

  return (
    <article className="bg-slate900 py-4 text-white lg:rounded-bl-[4.75rem] lg:py-0">
      <div className="px-4 py-8 lg:p-10">
        <h2 className="heading">Your results</h2>

        <p className="bodyS mt-4 tracking-[0.0063rem] text-slate100">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>

        <div className="relative mt-10 rounded-xl border-t-4 border-lime bg-slate800 px-8 py-[1.625rem]">
          <p className="mb-6 flex flex-col font-extralight text-slate100">
            Your monthly repayments
            <span className="payment mb-3 mt-4 text-6xl font-bold tracking-[-0.1375rem] text-lime">
              {new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format(Number(monthlyPayment))}
            </span>
          </p>

          <div className="relative h-[0.0625rem] w-full bg-slate700"></div>

          <p className="mt-8 flex flex-col font-extralight text-slate100">
            Total you'll repay over the term
            <span className="mt-1 text-2xl font-bold">
              {new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
              }).format(Number(totalRepayable))}
            </span>
          </p>
        </div>
      </div>
    </article>
  )
}

export default YourResults
