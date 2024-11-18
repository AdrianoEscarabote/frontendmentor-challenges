import { twMerge } from "tailwind-merge"
import { ButtonProps } from "./buttonProps"

const Button = ({ label, className, ...props }: ButtonProps) => {
  const classNameTwMerge = twMerge(
    `grid h-[3.375rem] w-full place-content-center rounded-lg bg-very-dark-violet text-white tracking-[0.0625rem] hover:text-very-dark-violet hover:bg-transparent hover:border hover:border-very-dark-violet ${className}`,
  )
  return (
    <button className={classNameTwMerge} {...props}>
      {label}
    </button>
  )
}

export default Button
