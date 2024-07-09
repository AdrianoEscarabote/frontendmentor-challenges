import Image from "next/image";
import RequestButton from "../requestButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-darkBlue">
      <div className="mx-auto w-full max-w-[1440px] xl:px-[165px] px-5 py-12 flex justify-between">
        <nav className="flex items-center gap-20 w-full max-w-[660px]">
          <div className="flex flex-col h-full gap-[55px] w-full max-w-[205px]">
            <Image
              src={"/images/white-logo.svg"}
              alt=""
              width={140}
              height={120}
            />
            <ul className="flex gap-[13px] w-full mt-">
              <li>
                <Link href="/" aria-label="go to facebook page">
                  <Image
                    src={"/images/icon-facebook.svg"}
                    alt=""
                    width={20}
                    height={32}
                  />
                </Link>
              </li>
              <li>
                <Link href="/" aria-label="go to youtube page">
                  <Image
                    src={"/images/icon-youtube.svg"}
                    alt=""
                    width={20}
                    height={32}
                  />
                </Link>
              </li>
              <li>
                <Link href="/" aria-label="go to twitter page">
                  <Image
                    src={"/images/icon-twitter.svg"}
                    alt=""
                    width={20}
                    height={32}
                  />
                </Link>
              </li>
              <li>
                <Link href="/" aria-label="go to pinterest page">
                  <Image
                    src={"/images/icon-pinterest.svg"}
                    alt=""
                    width={20}
                    height={32}
                  />
                </Link>
              </li>
              <li>
                <Link href="/" aria-label="go to instagram page">
                  <Image
                    src={"/images/icon-instagram.svg"}
                    alt=""
                    width={20}
                    height={32}
                  />
                </Link>
              </li>
            </ul>
          </div>

          <ul className="flex items-start h-full text-white w-full justify-between max-w-[380px]">
            <div className="flex flex-col gap-3 w-full mt-[2px]">
              <li>
                <Link
                  href={"/"}
                  className="min-w-16 w-full"
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
              <li className="relative bottom-1">
                <Link href={"/"} aria-label="go to blog page">
                  Blog
                </Link>
              </li>
            </div>

            <div className="flex flex-col gap-3 w-full mt-[2px]">
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
              <li className="relative bottom-1">
                <Link href={"/"} aria-label="see privacy policy">
                  Privacy Policy
                </Link>
              </li>
            </div>
          </ul>
        </nav>
        <div className="flex items-end flex-col gap-6 max-w-[]">
          <div>
            <RequestButton />
          </div>
          <p className="bodyMd tracking-tight">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
