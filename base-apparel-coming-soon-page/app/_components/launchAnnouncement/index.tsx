import Image from "next/image"
import Form from "../form"

const LaunchAnnouncement = () => {
  return (
    <article>
      <div className="mb-10 mt-[3.1875rem] flex h-full w-full max-w-[27.8125rem] flex-col justify-center gap-5 lg:mb-0">
        <Image
          width={158}
          height={50}
          src="/images/logo.svg"
          alt="Base Apparel Logo"
          className="absolute top-16 hidden lg:block"
        />

        <h1 className="flex flex-col text-center text-[3rem] font-semibold uppercase leading-[4.3125rem] tracking-[1.0625rem] text-neutral-dark-grayish-red lg:text-start lg:text-[4rem]">
          <span className="font-light text-primary-desaturated-red">
            We&apos;re
          </span>
          coming soon
        </h1>
        <p className="mt-[0.125rem] text-center text-sm font-normal leading-[1.6875rem] text-primary-desaturated-red lg:text-start lg:text-[1rem]">
          Hello fellow shoppers! We&apos;re currently building our new fashion
          store. Add your email below to stay up-to-date with announcements and
          our launch deals.
        </p>
        <Form />
      </div>
    </article>
  )
}

export default LaunchAnnouncement
