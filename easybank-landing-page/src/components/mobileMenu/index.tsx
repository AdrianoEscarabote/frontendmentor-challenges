import Link from "next/link"
import { MobileMenuProps } from "./mobileMenuProps"

const MobileMenu = ({ closeFn }: MobileMenuProps) => {
  return (
    <div
      className="absolute left-0 top-20 z-[1000] min-h-screen w-full bg-[#66666683]"
      onClick={closeFn}
    >
      <ul
        className="m-4 flex flex-col items-center gap-[30px] rounded-lg bg-white py-8 pl-5 text-[14px] md:ml-1"
        onClick={(ev) => ev.stopPropagation()}
      >
        <li>
          <Link
            href={"/"}
            onClick={closeFn}
            className="headingXs font-semibold text-darkBlue"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            onClick={closeFn}
            className="headingXs font-semibold text-darkBlue"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            onClick={closeFn}
            className="headingXs font-semibold text-darkBlue"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            onClick={closeFn}
            className="headingXs font-semibold text-darkBlue"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            onClick={closeFn}
            className="headingXs font-semibold text-darkBlue"
          >
            Careers
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu
