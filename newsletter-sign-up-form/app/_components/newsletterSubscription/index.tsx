"use client"

import Image from "next/image"
import SignupForm from "../signupForm"
import { useState } from "react"
import SuccessAlert from "../successAlert"

const NewsletterSubscription = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false)
  const [userEmail, setUserEmail] = useState<string>("")

  return (
    <>
      {showSuccessAlert ? (
        <SuccessAlert
          email={userEmail}
          goBackFn={() => setShowSuccessAlert(!showSuccessAlert)}
        />
      ) : (
        <article className="fade min-h-screen w-full rounded-none bg-white p-0 sm:min-h-0 sm:max-w-[422px] sm:rounded-[36px] sm:p-6 lg:max-w-[928px]">
          <div className="flex flex-col-reverse items-center justify-between sm:items-start lg:flex-row">
            <section className="flex w-full max-w-[416px] flex-col gap-2 p-6 sm:p-0 lg:mt-14 lg:pl-10">
              <h1 className="heading text-dark-slate-grey">Stay updated!</h1>
              <p className="body mt-1 text-dark-slate-grey">
                Join 60,000+ product managers receiving monthly updates on:
              </p>

              <ul className="flex flex-col gap-[10px] md:mt-4">
                <li className="flex items-center gap-[15px]">
                  <Image
                    src={"/images/icon-list.svg"}
                    style={{ width: "auto", height: "auto" }}
                    alt=""
                    width={50}
                    height={50}
                  />
                  <p className="body text-dark-slate-grey">
                    Product discovery and building what matters
                  </p>
                </li>
                <li className="flex items-center gap-[15px]">
                  <Image
                    src={"/images/icon-list.svg"}
                    style={{ width: "auto", height: "auto" }}
                    alt=""
                    width={50}
                    height={50}
                  />
                  <p className="body text-dark-slate-grey">
                    Measuring to ensure updates are a success
                  </p>
                </li>
                <li className="flex items-center gap-[15px]">
                  <Image
                    src={"/images/icon-list.svg"}
                    style={{ width: "auto", height: "auto" }}
                    alt=""
                    width={50}
                    height={50}
                  />
                  <p className="body text-dark-slate-grey">And much more!</p>
                </li>
              </ul>

              <SignupForm
                submitFn={() => {
                  setShowSuccessAlert(!showSuccessAlert)
                }}
                setUserEmail={setUserEmail}
              />
            </section>
            <picture>
              <source
                media="(max-width: 1024px)"
                srcSet="/images/illustration-sign-up-mobile.svg"
              />
              <Image
                src={"/images/illustration-sign-up-desktop.svg"}
                alt=""
                width={400}
                height={400}
                style={{ width: "auto", height: "auto" }}
                className="rounded-none sm:rounded-3xl lg:rounded-none"
              />
            </picture>
          </div>
        </article>
      )}
    </>
  )
}

export default NewsletterSubscription
