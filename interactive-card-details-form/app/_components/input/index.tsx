"use client"

import { forwardRef, LegacyRef } from "react"
import { InputProps } from "./inputProps"
import { twMerge } from "tailwind-merge"

const Input = (
  {
    error,
    label,
    errorMessage,
    id,
    className,
    displayLabel,
    ...props
  }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined,
) => {
  const classNameTwMerge = twMerge(
    `h-[48px] cursor-pointer rounded-lg border border-solid border-light-grayish-violet pl-4 hover:border-very-dark-violet hover:outline-none tracking-[1.0px] placeholder:text-[#c2c2c2] ${error ? "border-red" : ""} ${className}`,
  )

  return (
    <label className="relative flex flex-col" htmlFor={id}>
      {displayLabel && (
        <span className="mb-[5px] text-[13px] uppercase tracking-[1.4px] text-very-dark-violet">
          {label}
        </span>
      )}
      <input
        ref={ref}
        type="text"
        name={id}
        id={id}
        className={classNameTwMerge}
        {...props}
      />

      {error && errorMessage && (
        <span className="relative bottom-[1rem] text-[13px] font-medium text-red">
          {errorMessage}
        </span>
      )}
    </label>
  )
}

export default forwardRef(Input)
