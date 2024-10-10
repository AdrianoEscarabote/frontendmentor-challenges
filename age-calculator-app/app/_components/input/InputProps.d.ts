import { ComponentPropsWithoutRef } from "react"

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string
  id: string
  customProp?: string
  error: boolean
  errorMessage: string | undefined
}
