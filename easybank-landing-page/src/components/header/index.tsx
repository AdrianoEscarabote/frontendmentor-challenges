import Image from "next/image";
import RequestButton from "../requestButton";
import Link from "next/link";
import style from "./style.module.css";

const Header = () => {
  return (
    <header className="w-full">
      <section className="fixed top-0 flex justify-center bg-white w-full h-[82px]">
        <div className="flex flex-col w-full max-w-[1440px] xl:px-[165px] py-4 mx-auto px-5">
          <nav className="overflow-hidden flex items-center justify-between">
            <Image
              src={"/images/logo.svg"}
              alt=""
              width={139}
              height={0}
              className="mt-[4px]"
            />
            <ul className="flex gap-7 pl-5">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>About</Link>
              </li>
              <li>
                <Link href={"/"}>Contact</Link>
              </li>
              <li>
                <Link href={"/"}>Blog</Link>
              </li>
              <li>
                <Link href={"/"}>Careers</Link>
              </li>
            </ul>
            <RequestButton />
          </nav>
        </div>
      </section>
      <section className="bg-veryLightGray mt-[82px]">
        <div className="max-w-[1440px] xl:px-[165px] px-5 mx-auto flex items-center justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="headingXl flex flex-col text-darkBlue">
              Next generation <span>digital banking</span>
            </h1>
            <p className="bodyMd max-w-[381px] text-grayishBlue">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <RequestButton />
          </div>
          {/* <picture>
            <source
              media="(max-width: 768px)"
              srcSet="/images/bg-intro-mobile.svg"
            />
            <Image
              src={"/images/bg-intro-desktop.svg"}
              alt="hero image"
              width={500}
              height={600}
            />
          </picture> */}

          <div className={`${style.bg}`}>
            <Image
              src={"/images/image-mockups.png"}
              alt="hero image"
              width={500}
              height={600}
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
