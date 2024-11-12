import Image from "next/image"
import { CalculateButtonProps } from "./CalculateButtonProps"

const CalculateButton = ({ ...props }: CalculateButtonProps) => {
  return (
    <button
      className="flex h-[3.375rem] w-full max-w-[19.625rem] items-center justify-center gap-[0.625rem] rounded-full bg-lime pl-0 text-lg font-bold text-slate900"
      {...props}
    >
      <Image
        alt=""
        src={"/images/icon-calculator.svg"}
        width={24}
        height={40}
      />
      <span className="">Calculate Repayments</span>
    </button>
  )
}

export default CalculateButton
