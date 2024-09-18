import Image from "next/image"

const CalculateButton = () => {
  return (
    <button className="flex h-[54px] w-full max-w-[314px] items-center justify-center gap-[32px] rounded-full bg-lime pl-0">
      <Image
        alt=""
        src={"/images/icon-calculator.svg"}
        width={24}
        height={40}
      />
      <span className="body">Calculate Repayments</span>
    </button>
  )
}

export default CalculateButton
