import Image from "next/image"
import LaunchAnnouncement from "./_components/launchAnnouncement"

export default function Home() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-[90rem] flex-col-reverse items-center justify-start lg:flex-row lg:justify-between">
      <div className="bg-image"></div>
      <Image
        width={158}
        height={50}
        src="/images/logo.svg"
        alt="Base Apparel Logo"
        className="absolute left-6 top-8 block lg:hidden"
      />

      <main className="px-5 lg:px-[10.3125rem]">
        <LaunchAnnouncement />
      </main>

      <Image
        src={"/images/hero-desktop.jpg"}
        width={609}
        height={500}
        alt=""
        className="hidden lg:block"
      />
      <Image
        src={"/images/hero-mobile.jpg"}
        width={356}
        height={300}
        alt=""
        className="mt-24 block h-[15.625rem] w-full max-w-[26.25rem] object-cover lg:hidden"
      />
    </div>
  )
}
