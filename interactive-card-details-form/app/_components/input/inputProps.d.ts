import { ComponentPropsWithoutRef } from "react"

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string
  id: string
  error: boolean
  displayLabel?: boolean
  errorMessage: string | undefined
}
