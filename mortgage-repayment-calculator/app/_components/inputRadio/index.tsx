"use client"

import { forwardRef, LegacyRef, useEffect } from "react"
import { InputRadioProps } from "./inputRadioProps"

const InputRadio = (
  { label, id, ...props }: InputRadioProps,
  ref: LegacyRef<HTMLInputElement> | undefined,
) => {
  useEffect(() => {
    if (!id) return

    const input = document.getElementById(id) as HTMLInputElement | null

    if (input) {
      input.addEventListener("change", () => {
        document
          .querySelectorAll(".container_input_radio")
          .forEach((element) => element.classList.remove("checked"))

        const container = input.closest(".container_input_radio")
        if (input.checked && container) {
          container.classList.add("checked")
        }
      })
    }
  }, [id])

  return (
    <div
      className={`container_input_radio relative bottom-[0.0625rem] flex h-[3.125rem] w-full cursor-pointer items-center gap-[14px] rounded-md border border-solid border-slate500`}
    >
      <label
        htmlFor={id}
        className="flex w-full cursor-pointer items-center gap-[0.875rem] rounded-md pl-[1.125rem]"
      >
        <input ref={ref} type="radio" name="type" id={id} {...props} />
        <div className="custom-radio grid place-content-center rounded-full border border-slate700">
          <span></span>
        </div>
        <span className="pl-[0.375rem] text-lg font-bold text-slate900">
          {label}
        </span>
      </label>
    </div>
  )
}

export default forwardRef(InputRadio)
