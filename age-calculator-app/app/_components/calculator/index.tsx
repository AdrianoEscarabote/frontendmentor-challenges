"use client"

import { useDispatch, useSelector } from "react-redux"
import Button from "../button"
import { rootReducer } from "@/redux/reduxTypes"
import {
  calculateBirth,
  setDay,
  setMonth,
  setYear,
} from "@/redux/calculator/reducer"
import { useForm } from "react-hook-form"
import { FormTypes } from "./CalculatorProps"
import Input from "../input"

const isValidDate = (day: number, month: number, year: number) => {
  const date = new Date(year, month - 1, day)
  return (
    date.getFullYear() === year &&
    date.getMonth() + 1 === month &&
    date.getDate() === day
  )
}

const Calculator = () => {
  const dispatch = useDispatch()
  const { days, months, years } = useSelector(
    (rootReducer: rootReducer) => rootReducer.calculatorSlice.age,
  )

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormTypes>()

  const onSubmit = handleSubmit((data) => {
    const day = Number(data.day)
    const month = Number(data.month)
    const year = Number(data.year)

    if (!isValidDate(day, month, year)) {
      setError("day", { message: "Must be a valid date" })
      return
    }

    clearErrors(["day", "month", "year"])

    dispatch(setDay({ value: day }))
    dispatch(setMonth({ value: month }))
    dispatch(setYear({ value: year }))
    dispatch(calculateBirth())
  })

  return (
    <article className="h-[651px] w-full max-w-[840px] rounded-3xl rounded-ee-[200px] bg-white p-6 text-black md:p-14">
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend className="sr-only">
            Fill in the fields with your date of birth
          </legend>
          <div className="mb-10 flex gap-5 md:mb-0 md:gap-[32px]">
            <Input
              id="day"
              label="day"
              {...register("day", {
                required: "This field is required",
                min: { value: 1, message: "Must be a valid day" },
                max: { value: 31, message: "Must be a valid day" },
              })}
              error={errors.day?.message ? true : false}
              errorMessage={errors.day?.message}
            />

            <Input
              id="month"
              label="month"
              {...register("month", {
                required: "This field is required",
                min: { value: 1, message: "Must be a valid month" },
                max: { value: 12, message: "Must be a valid month" },
              })}
              error={errors.month?.message ? true : false}
              errorMessage={errors.month?.message}
            />

            <Input
              id="year"
              label="year"
              {...register("year", {
                required: "This field is required",
                min: { value: 1900, message: "Must be a valid year" },
                max: {
                  value: new Date().getFullYear(),
                  message: "Must be a valid year",
                },
              })}
              error={errors.year?.message ? true : false}
              errorMessage={errors.year?.message}
            />
          </div>

          <div className="flex items-center justify-center md:justify-start">
            <div className="border-1 absolute h-[1px] w-full border md:relative"></div>
            <Button
              data-testid="submit_button"
              type="submit"
              disabled={false}
              onClick={() => {}}
            />
          </div>
        </fieldset>
      </form>
      <div className="heading flex flex-col items-start text-off-black">
        <p className="mt-[0px] flex gap-1">
          <span className="relative -left-2 text-purple">
            {years !== 0 ? years : "- -"}
          </span>
          years
        </p>
        <p className="mt-[0px] flex gap-1">
          <span className="relative -left-2 text-purple">
            {months !== 0 ? months : "- -"}
          </span>
          months
        </p>
        <p className="mt-[0px] flex gap-1">
          <span className="relative -left-2 text-purple">
            {days !== 0 ? days : "- -"}
          </span>
          days
        </p>
      </div>
    </article>
  )
}

export default Calculator
