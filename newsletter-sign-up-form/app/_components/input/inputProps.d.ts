import { ComponentPropsWithoutRef } from "react"

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  labelText: string
  error: boolean
  errorMessage: string
}
