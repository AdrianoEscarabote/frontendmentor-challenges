import { ComponentPropsWithoutRef } from 'react'

export type ButtonProps = ComponentPropsWithoutRef<'button'>

const PrimaryButton = ({ ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="text-preset-5 focus-visible:ring-offset-background h-14 cursor-pointer rounded-[12px] bg-blue-500 px-4 py-2 text-white transition-all duration-150 hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 focus-visible:outline-none"
    >
      Search
    </button>
  )
}

export default PrimaryButton
