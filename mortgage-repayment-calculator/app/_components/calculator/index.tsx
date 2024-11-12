"use client"

import { useForm } from "react-hook-form"
import CalculateButton from "../calculateButton"
import InputRadio from "../inputRadio"
import Input from "../input"
import { FormTypes } from "./calculatorTypes"
import { useDispatch } from "react-redux"
import {
  calculateMortgage,
  clearAll,
  setAmount,
  setPaymentType,
  setRate,
  setTerm,
} from "../../../redux/calculator/reducer"
import { NumericFormat } from "react-number-format"

const Calculator = () => {
  const dispatch = useDispatch()
  const {
    register,
    setError,
    watch,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormTypes>()

  const onSubmit = handleSubmit((data) => {
    if (!data.amount || isNaN(data.amount) || data.amount < 1) {
      setError("amount", { message: "This field is required!" })
      return
    }

    const amount = Number(data.amount)
    const term = Number(data.term)
    const rate = Number(data.rate)
    const type = data.type
    dispatch(setAmount({ value: amount }))
    dispatch(setTerm({ value: term }))
    dispatch(setRate({ value: rate }))
    dispatch(setPaymentType({ value: type }))

    if (amount <= 0 || term <= 0 || rate <= 0) {
      setError("root", { message: "Must be a valid number" })
      return
    }

    dispatch(calculateMortgage())
  })

  const handleClearAll = () => {
    reset()
    setValue("amount", 0)
    dispatch(clearAll())
  }

  return (
    <section className="px-5 py-8 lg:p-10">
      <div className="flex items-center justify-between">
        <h1 className="heading text-slate900">Mortgage Calculator</h1>
        <button
          className="h-[1.375rem] border-b border-b-slate700 text-slate700 hover:border-b-slate900 hover:text-slate900"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>

      <form onSubmit={onSubmit} className="mt-10">
        <fieldset>
          <legend className="sr-only">Fill in your information</legend>

          <div className={`flex flex-col gap-2`}>
            <p className="font-medium text-slate700">Mortgage Amount</p>

            <label
              htmlFor="amount"
              className={`relative z-50 flex cursor-pointer flex-col rounded-md border border-solid ${errors.amount ? "mb-2 border-red" : "border-slate700 hover:border-slate900"}`}
            >
              <span
                className={`absolute -z-0 flex h-full w-[2.6875rem] items-center justify-center rounded-s-[7p5] text-lg font-bold text-slate700 ${errors.amount ? "bg-red text-white" : "bg-slate100"}`}
              >
                £
              </span>
              <NumericFormat
                id="amount"
                className={`h-[3rem] w-full cursor-pointer pl-[3.75rem] text-lg font-bold text-slate900 hover:outline-none`}
                thousandSeparator=","
                decimalScale={2}
                allowNegative={false}
                value={watch("amount")}
                onValueChange={(values) => {
                  setValue("amount", values.floatValue ?? 0, {
                    shouldValidate: true,
                  })
                }}
              />
              {errors.amount && (
                <span className="text-md absolute -bottom-[2rem] font-medium text-red">
                  {errors.amount.message}
                </span>
              )}
            </label>
          </div>
          <div className="mt-[1.625rem] grid grid-cols-2 gap-[1.25rem]">
            <div className="flex flex-col gap-2">
              <p className="font-medium text-slate700">Mortgage Term</p>
              <Input
                id="term"
                inputType="term"
                errorMessage={errors.term?.message}
                error={errors.term ? true : false}
                {...register("term", {
                  required: "This field is required!",
                })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-slate700">Interest Rate</p>

              <Input
                id="rate"
                inputType="rate"
                errorMessage={errors.rate?.message}
                error={errors.rate ? true : false}
                {...register("rate", {
                  required: "This field is required!",
                })}
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <p className="font-medium text-slate700">Mortgage Type</p>
            <div className="flex flex-col gap-2">
              <InputRadio
                label="Repayment"
                value="repayment"
                id="repayment"
                {...register("type", {
                  required: "This field is required!",
                })}
              />
              <InputRadio
                label="Interest Only"
                id="interest_only"
                value="interest_only" // Adiciona o valor
                {...register("type", {
                  required: "This field is required!",
                })}
              />

              {errors.type && (
                <span className="relative -bottom-[0.625rem] text-base font-medium text-red">
                  {errors.type?.message}
                </span>
              )}
            </div>
          </div>
          <div className="mt-10">
            <CalculateButton
              type="submit"
              aria-label="calculate mortgage"
              data-testid="submit-button"
            />
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Calculator
