"use client"

import { InputProps } from "./InputProps"
import { LegacyRef, forwardRef } from "react"

const Input = (
  { id, label, error, errorMessage, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined,
) => {
  return (
    <label htmlFor={id} className="relative flex flex-col gap-[7px]">
      <span
        className={`bodyS uppercase ${error && errorMessage ? "text-light-red" : "text-smokey-grey"}`}
      >
        {label}
      </span>

      <input
        ref={ref}
        className={`${error && errorMessage ? "border border-light-red" : "border"} border-1 body h-[72px] w-full max-w-[160px] cursor-pointer rounded-lg pl-3 text-off-black placeholder-[#8a8a8a] outline-none hover:border-purple focus:border-purple md:pl-6`}
        type="text"
        id={id}
        placeholder="DD"
        inputMode="numeric"
        onInput={(e) => {
          const input = e.target as HTMLInputElement
          input.value = input.value.replace(/[^0-9]/g, "")
        }}
        {...props}
      />
      {error && errorMessage && (
        <span className="absolute -bottom-[42px] text-sm italic text-light-red md:-bottom-8">
          {errorMessage}
        </span>
      )}
    </label>
  )
}

export default forwardRef(Input)
