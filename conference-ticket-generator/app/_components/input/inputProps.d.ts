import { ComponentPropsWithoutRef } from "react";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  id: string;
  errorMessage: string;
  error: boolean;
}
