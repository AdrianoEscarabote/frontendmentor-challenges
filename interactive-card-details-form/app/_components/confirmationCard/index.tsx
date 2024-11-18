import Image from "next/image"
import Button from "../button"
import { useDispatch } from "react-redux"
import { clear } from "@/redux/form/reducer"
import { ConfirmationCardProps } from "./confirmationCardProps"

const ConfirmationCard = ({ backFn }: ConfirmationCardProps) => {
  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(clear())
    backFn()
  }

  return (
    <div className="my-10 flex w-full max-w-[380px] flex-col items-center justify-center gap-4 text-center lg:my-0">
      <div className="relative h-20 w-20">
        <Image src={"/images/icon-complete.svg"} fill alt="icon complete" />
      </div>
      <h2 className="text-3xl uppercase text-very-dark-violet">Thank you!</h2>

      <p className="text-dark-grayish-violet">
        We&apos;ve added your card details
      </p>
      <Button label="Continue" type="button" onClick={onClick} />
    </div>
  )
}

export default ConfirmationCard
