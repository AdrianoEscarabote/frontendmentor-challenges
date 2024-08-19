import Image from "next/image"
import PrimaryButton from "../primaryButton"
import { SuccessAlertProps } from "./successAlertProps"

const SuccessAlert = ({ goBackFn, email }: SuccessAlertProps) => {
  return (
    <main className="w-full max-w-[420px] rounded-3xl bg-red-700 bg-white">
      <div className="flex w-full max-w-[420px] flex-col items-start gap-4 p-10">
        <Image
          alt=""
          src={"/images/icon-success.svg"}
          width={60}
          height={60}
          style={{ width: "auto", height: "auto" }}
        />
        <h1 className="md:heading text-4xl font-bold leading-[52px] text-dark-slate-grey">
          Thanks for subscribing!
        </h1>
        <p className="my-4 text-dark-slate-grey" data-testid="description">
          A confirmation email has been sent to{" "}
          <span className="font-semibold">{email}</span>. Please open it and
          click the button inside to confirm your subscription.
        </p>
        <PrimaryButton onClick={goBackFn} text="Dismiss message" />
      </div>
    </main>
  )
}

export default SuccessAlert
