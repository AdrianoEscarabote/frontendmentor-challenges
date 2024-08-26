import Image from "next/image"
import RequestButton from "../requestButton"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-darkBlue">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between px-5 py-12 md:flex-row xl:px-[165px]">
        <nav className="flex w-full max-w-[660px] flex-col items-center gap-7 md:flex-row md:gap-20">
          <div className="md:items-left flex h-full w-full max-w-[205px] flex-col items-center gap-7 md:gap-[55px]">
            <Image
              src={"/images/white-logo.svg"}
              alt=""
              width={0}
              height={0}
              style={{ width: "140px", height: "auto" }}
            />
            <ul className="flex w-full justify-center gap-[13px] md:justify-start">
              <li>
                <Link href="/" aria-label="go to facebook page">
                  <Image
                    src={"/images/icon-facebook.svg"}
                    alt=""
                    width={21}
                    height={21}
                    style={{ width: "auto", height: "auto" }}
                  />
                </Link>
              </li>
              <li>
                <Link href="/" aria-label="go to youtube page">
                  <Image
                    src={"/images/icon-youtube.svg"}
                    alt=""
                    width={21}
                    height={21}
                    style={{ width: "auto", height: "auto" }}
                  />
                </Link>
              </li>
              <li>
                <Link href="/" aria-label="go to twitter page">
                  <Image
                    src={"/images/icon-twitter.svg"}
                    alt=""
                    width={21}
                    height={21}
                    style={{ width: "auto", height: "auto" }}
                  />
                </Link>
              </li>
              <li>
                <Link href="/" aria-label="go to pinterest page">
                  <Image
                    src={"/images/icon-pinterest.svg"}
                    alt=""
                    width={0}
                    height={0}
                    style={{ width: "21px", height: "auto" }}
                  />
                </Link>
              </li>
              <li>
                <Link href="/" aria-label="go to instagram page">
                  <Image
                    src={"/images/icon-instagram.svg"}
                    alt=""
                    width={21}
                    height={21}
                    style={{ width: "auto", height: "auto" }}
                  />
                </Link>
              </li>
            </ul>
          </div>

          <ul className="flex h-full w-full max-w-[380px] flex-col items-start justify-between gap-3 text-center text-[15px] font-thin text-white md:flex-row md:gap-0 md:text-left">
            <div className="mt-[2px] flex w-full flex-col gap-3">
              <li>
                <Link
                  href={"/"}
                  className="w-full min-w-16"
                  aria-label="go to about us page"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link href={"/"} aria-label="go to contact page">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={"/"} aria-label="go to blog page">
                  Blog
                </Link>
              </li>
            </div>

            <div className="mt-[2px] flex w-full flex-col gap-3">
              <li>
                <Link href={"/"} aria-label="go to careers page">
                  Careers
                </Link>
              </li>
              <li>
                <Link href={"/"} aria-label="go to support page">
                  Support
                </Link>
              </li>
              <li>
                <Link href={"/"} aria-label="see privacy policy">
                  Privacy Policy
                </Link>
              </li>
            </div>
          </ul>
        </nav>
        <div className="md:text-lef mt-7 flex flex-col items-center gap-6 text-center md:mt-0 md:items-end">
          <div>
            <RequestButton />
          </div>
          <p className="text-[15px] font-thin leading-[26px] tracking-[-0.3spx] text-white opacity-50">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
