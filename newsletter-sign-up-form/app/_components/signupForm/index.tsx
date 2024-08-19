"use client"

import { useForm } from "react-hook-form"
import Input from "../input"
import PrimaryButton from "../primaryButton"
import { Inputs, SignupFormProps } from "./signupFormTypes"

const SignupForm = ({ submitFn, setUserEmail }: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<Inputs>()

  const onSubmit = handleSubmit(async (data) => {
    submitFn()
    setUserEmail(getValues("email"))
    setValue("email", "")
  })

  return (
    <form noValidate={true} onSubmit={onSubmit} className="md:mt-8">
      <legend className="sr-only">Enter your email </legend>
      <fieldset className="flex flex-col gap-6">
        <Input
          labelText="Email address"
          placeholder="email@company.com"
          type="email"
          id="email"
          {...register("email", {
            required: "Can’t be empty",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Valid email required",
            },
          })}
          error={errors.email?.message ? true : false}
          errorMessage={errors.email?.message!}
        />
        <PrimaryButton type="submit" text="Subscribe to monthly newsletter" />
      </fieldset>
    </form>
  )
}

export default SignupForm
