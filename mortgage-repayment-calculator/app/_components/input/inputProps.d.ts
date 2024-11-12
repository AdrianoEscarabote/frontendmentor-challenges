import { ComponentPropsWithoutRef } from "react"

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  inputType: "term" | "rate"
  id: string
  error: boolean
  errorMessage: string | undefined
}
