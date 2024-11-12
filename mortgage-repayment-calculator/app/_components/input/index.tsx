"use client"

import { forwardRef, LegacyRef } from "react"
import { InputProps } from "./inputProps"

const Input = (
  { inputType, error, errorMessage, id, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined,
) => {
  return (
    <label
      htmlFor={id}
      className={`relative flex cursor-pointer flex-col rounded-md border border-solid ${error ? "mb-3 border-red" : "border-slate700 hover:border-slate900"}`}
    >
      {inputType === "rate" && (
        <span
          className={`absolute right-0 flex h-full w-[3.125rem] items-center justify-center rounded-e-md text-lg font-bold text-slate700 ${error ? "bg-red text-white" : "bg-slate100"}`}
        >
          %
        </span>
      )}

      {inputType === "term" && (
        <span
          className={`absolute right-0 flex h-full w-[5.125rem] items-center justify-center rounded-e-md text-lg font-bold text-slate700 ${error ? "bg-red text-white" : "bg-slate100"}`}
        >
          years
        </span>
      )}

      <input
        ref={ref}
        type="text"
        name={id}
        id={id}
        className={`h-[3.125rem] cursor-pointer overflow-hidden rounded-lg pl-4 pr-10 text-lg font-bold text-slate900 hover:outline-none`}
        {...props}
      />

      {error && errorMessage && (
        <span className="absolute -bottom-[2rem] text-base font-medium text-red">
          {errorMessage}
        </span>
      )}
    </label>
  )
}

export default forwardRef(Input)
