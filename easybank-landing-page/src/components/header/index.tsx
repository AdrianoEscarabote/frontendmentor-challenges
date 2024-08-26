"use client"

import Image from "next/image"
import RequestButton from "../requestButton"
import Link from "next/link"
import style from "./style.module.css"
import { useEffect, useState } from "react"
import MobileMenu from "../mobileMenu"

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState(false)

  const stopScroll = () => {
    document.body.style.overflow = "hidden"
  }

  const allowScroll = () => {
    document.body.style.overflow = "auto"
  }

  useEffect(() => {
    // Controla o overflow baseado no estado do menu
    if (showMobileMenu && isMobile) {
      stopScroll()
    } else {
      allowScroll()
    }

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkScreenSize()

    window.addEventListener("resize", checkScreenSize)
    return () => {
      window.removeEventListener("resize", checkScreenSize)
      allowScroll() // Garantir que o scroll seja liberado quando o componente for desmontado
    }
  }, [showMobileMenu, isMobile])

  return (
    <header className="w-full">
      <section className="fixed top-0 z-50 flex h-[80px] w-full justify-center bg-white">
        <div className="mx-auto flex w-full max-w-[1440px] flex-row justify-between px-5 py-4 lg:flex-col xl:px-[165px]">
          <nav className="mt-[2px] flex items-center justify-between overflow-hidden">
            <Image
              src={"/images/logo.svg"}
              alt=""
              priority={true}
              width={0}
              height={0}
              style={{ width: "139px", height: "auto" }}
              className="mt-[4px]"
            />
            {showMobileMenu && isMobile ? (
              <MobileMenu closeFn={() => setShowMobileMenu(!showMobileMenu)} />
            ) : (
              <ul className="hidden gap-[30px] pl-5 text-[14px] md:ml-1 lg:flex">
                <li>
                  <Link href={"/"} className="text-grayishBlue">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-grayishBlue">
                    About
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-grayishBlue">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-grayishBlue">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="text-grayishBlue">
                    Careers
                  </Link>
                </li>
              </ul>
            )}
            {!isMobile && <RequestButton />}
          </nav>
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="lg:hidden"
            aria-label={
              showMobileMenu ? "close mobile menu" : "open mobile menu"
            }
          >
            <Image
              src={
                showMobileMenu
                  ? "/images/icon-close.svg"
                  : "/images/icon-hamburger.svg"
              }
              alt="mobile menu icon"
              width={40}
              height={40}
            />
          </button>
        </div>
      </section>
      <section className="bg-veryLightGray lg:mt-[82px]">
        <div
          className={`lg:mt-[82px] ${style.bg} relative mx-auto max-w-[1440px] overflow-visible`}
        >
          <div className="relative mx-auto flex max-w-[1440px] flex-col-reverse items-center lg:flex-row lg:justify-between xl:px-[165px]">
            <div className="relative -top-[40px] flex flex-col items-center gap-6 px-5 text-center lg:-top-0 lg:my-[170px] lg:items-start lg:text-start">
              <h1 className="headingXl flex flex-col text-darkBlue">
                Next generation <span>digital banking</span>
              </h1>
              <p className="bodyXl mb-[10px] flex max-w-[449px] flex-col text-grayishBlue">
                Take your financial life online. Your Easybank account{" "}
                <span>will be a one-stop-shop for spending, saving,</span>
                <span>budgeting, investing, and much more.</span>
              </p>
              <RequestButton />
            </div>

            <div>
              <Image
                src={"/images/image-mockups.png"}
                alt="hero image"
                className="relative -top-[70px] h-[520px] w-[420px] object-cover lg:absolute lg:-right-[132px] lg:-top-[122px] lg:h-[938px] lg:w-[767px]"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
