"use client"

import { useForm } from "react-hook-form"
import { FormType } from "./formTypes"
import Image from "next/image"

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<FormType>()

  const onSubmit = handleSubmit((data) => {
    clearErrors("email")
    reset()
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit} className="relative -bottom-5">
      <fieldset>
        <legend className="sr-only">Enter your information</legend>
        <div
          className={`${errors.email?.message ? "outline outline-primary-soft-red" : "input_border"} flex items-center justify-between rounded-full`}
        >
          <label htmlFor="email" className="relative w-full max-w-[18.75rem]">
            <input
              type="text"
              placeholder="Email Address"
              id="email"
              className="h-14 w-full rounded-full border-none bg-transparent pl-8 outline-none placeholder:text-primary-desaturated-red placeholder:opacity-50"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please provide a valid email",
                },
              })}
            />
            {errors.email?.message && (
              <span className="absolute -bottom-8 left-8 text-sm text-primary-desaturated-red">
                {errors.email?.message}
              </span>
            )}
            {errors.email?.message && (
              <Image
                src={"/images/icon-error.svg"}
                width={24}
                height={24}
                alt="icon error email"
                className="absolute -right-6 bottom-4"
              />
            )}
          </label>
          <button
            className="submit_button flex h-14 w-[6.1875rem] items-center justify-center rounded-full bg-gradient-dark"
            type="submit"
            aria-label="submit button"
          >
            <Image
              src="/images/icon-arrow.svg"
              alt="submit"
              width={12}
              height={40}
            />
          </button>
        </div>
      </fieldset>
    </form>
  )
}

export default Form
