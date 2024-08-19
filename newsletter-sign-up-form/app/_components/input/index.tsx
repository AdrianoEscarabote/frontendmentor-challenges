import React, { LegacyRef } from "react"
import { InputProps } from "./inputProps"

const Input = (
  { className, error, labelText, errorMessage, id, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined,
) => {
  return (
    <label htmlFor={id} className="relative flex cursor-pointer flex-col gap-2">
      <span
        className={`bodySmall ${error ? "text-tomato" : "text-dark-slate-gre tracking-[-0.6px]"}`}
      >
        {labelText}
      </span>
      <input
        ref={ref}
        className={`body focus:border-dark cursor-pointer rounded-lg border p-4 pl-6 tracking-[-0.1px] focus:border-dark-slate-grey focus:outline-none ${error ? "border-tomato" : "border-[#bdbec2]"}`}
        id={id}
        {...props}
      />
      {error && errorMessage && (
        <span className="absolute right-0 top-0 text-xs text-tomato">
          {errorMessage}
        </span>
      )}
    </label>
  )
}

export default React.forwardRef(Input)
