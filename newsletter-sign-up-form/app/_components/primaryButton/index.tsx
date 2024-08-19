import { PrimaryButtonProps } from "./primaryButtonProps"

const PrimaryButton = ({ text, ...props }: PrimaryButtonProps) => {
  return (
    <button
      className="hover:bg-gradient-button w-full rounded-lg bg-dark-slate-grey p-4"
      {...props}
    >
      <span className="body tracking-[0.2px] text-white">{text}</span>
    </button>
  )
}

export default PrimaryButton
