"use client"

import { useForm } from "react-hook-form"
import Input from "../input"
import { FormTypes } from "./formTypes"
import Button from "../button"
import style from "./style.module.css"
import { useDispatch } from "react-redux"
import {
  udpateMM,
  updateCardNumber,
  updateCvc,
  updateName,
  updateYY,
} from "@/redux/form/reducer"
import { useEffect, useState } from "react"
import ConfirmationCard from "../confirmationCard"

const Form = () => {
  const [success, setSuccess] = useState(false)
  const dispatch = useDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
    reset,
  } = useForm<FormTypes>()

  const cardholderName = watch("cardholder_name")
  const cardNumber = watch("card_number")
  const cvc = watch("cvc")
  const mm = watch("mm")
  const yy = watch("yy")

  useEffect(() => {
    dispatch(updateName(cardholderName ?? ""))
    dispatch(updateCardNumber(cardNumber ?? ""))
    dispatch(updateCvc(cvc ?? ""))
    dispatch(udpateMM(mm ?? ""))
    dispatch(updateYY(yy ?? ""))
  }, [cardholderName, cardNumber, cvc, dispatch, mm, yy])

  const formatCardNumber = (value: string) => {
    return value.replace(/\s+/g, "").replace(/(\d{4})(?=\d)/g, "$1 ")
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value)
    setValue("card_number", formattedValue)
  }

  const onSubmit = handleSubmit(() => {
    setSuccess(true)
  })

  const resetFunction = () => {
    setSuccess(!success)
    reset()
  }

  return (
    <>
      {!success && (
        <form
          noValidate
          onSubmit={onSubmit}
          className="mx-auto my-10 w-full max-w-[23.75rem] flex-col lg:my-0 lg:mr-[3.875rem]"
        >
          <fieldset className="relative flex flex-col">
            <legend className="sr-only">Enter your information</legend>
            <Input
              label="cardholder name"
              id="cardholder_name"
              placeholder="e.g. Jane Appleseed"
              displayLabel={true}
              error={errors.cardholder_name ? true : false}
              errorMessage={errors.cardholder_name?.message}
              {...register("cardholder_name", {
                required: "Can't be blank",
              })}
              className="mb-6"
            />

            <Input
              label="card number"
              id="card_number"
              displayLabel={true}
              placeholder="e.g. 1234 5678 9123 0000"
              error={errors.card_number ? true : false}
              errorMessage={errors.card_number?.message}
              {...register("card_number", {
                required: "Can't be blank",
                onChange: handleCardNumberChange,
                validate: (value) => {
                  const sanitizedValue = value.replace(/\s+/g, "")
                  const isValidLength = sanitizedValue.length === 16
                  const isValidNumber = /^\d+$/.test(sanitizedValue)

                  if (!isValidNumber)
                    return "Card number must contain only numbers"

                  if (!isValidLength)
                    return "Card number must be 16 digits long"

                  return true
                },
              })}
              maxLength={19}
              className="mb-6"
            />

            <div className="mb-6 grid grid-cols-2 gap-0">
              <div className="relative bottom-0 flex flex-col gap-0">
                <p className="mb-[0.3125rem] text-[0.8125rem] uppercase tracking-[0.0875rem] text-very-dark-violet">
                  exp. date (MM/YY)
                </p>
                <div className="flex gap-3">
                  <Input
                    error={errors.mm ? true : false}
                    errorMessage={errors.mm?.message}
                    id="mm"
                    label=""
                    maxLength={2}
                    placeholder="MM"
                    {...register("mm", {
                      required: "Can't be blank",
                      validate: (value) =>
                        (parseInt(value) >= 1 && parseInt(value) <= 12) ||
                        "Invalid month",
                    })}
                    className={`max-w-[4.875rem] ${style.custom_input}`}
                  />
                  <Input
                    error={errors.yy ? true : false}
                    errorMessage={errors.yy?.message}
                    id="yy"
                    label=""
                    maxLength={2}
                    placeholder="YY"
                    {...register("yy", {
                      required: "Can't be blank",
                      validate: (value) =>
                        parseInt(value) >= new Date().getFullYear() % 100 ||
                        "Invalid year",
                    })}
                    className={`max-w-[4.875rem] ${style.custom_input}`}
                  />
                </div>
              </div>
              <Input
                error={errors.cvc ? true : false}
                displayLabel={true}
                errorMessage={errors.cvc?.message}
                label="cvc"
                id="cvc"
                placeholder="e.g. 123"
                {...register("cvc", {
                  required: "Can't be blank",
                })}
                className={style.custom_input}
                maxLength={4}
              />
            </div>

            <Button type="submit" label="Confirm" className="mt-[0.75rem]" />
          </fieldset>
        </form>
      )}

      {success && <ConfirmationCard backFn={resetFunction} />}
    </>
  )
}

export default Form
