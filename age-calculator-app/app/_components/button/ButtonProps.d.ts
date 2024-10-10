import { ComponentPropsWithoutRef } from "react"

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  onClick: () => void
  disabled?: boolean
}
