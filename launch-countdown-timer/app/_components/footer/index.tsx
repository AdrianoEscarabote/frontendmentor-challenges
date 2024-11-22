import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="absolute md:bottom-[4.5rem] bottom-10">
      <ul className="flex gap-8">
        <li className="relative w-[1.5rem] h-[1.5rem]">
          <Link href="/" aria-label="facebook page">
            <Image src={"/images/icon-facebook.svg"} alt="" fill />
          </Link>
        </li>
        <li className="relative w-[1.5rem] h-[1.5rem]">
          <Link href="/" aria-label="pinterest page">
            <Image src={"/images/icon-pinterest.svg"} alt="" fill />
          </Link>
        </li>
        <li className="relative w-[1.5rem] h-[1.5rem]">
          <Link href="/" aria-label="instagram page">
            <Image src={"/images/icon-instagram.svg"} alt="" fill />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
