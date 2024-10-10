"use client"

import Image from "next/image"
import { ButtonProps } from "./ButtonProps"

const Button = ({ onClick, disabled, ...props }: ButtonProps) => {
  return (
    <button
      className="z-10 flex h-20 w-full max-w-20 items-center justify-center rounded-full bg-purple hover:bg-off-black md:h-24 md:max-w-24"
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <Image
        src={"/images/icon-arrow.svg"}
        width={50}
        height={50}
        alt="icon arrow"
      />
    </button>
  )
}

export default Button
