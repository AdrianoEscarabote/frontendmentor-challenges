"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className="">
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              <Link
                href="/"
                className={pathname === "/" ? "active underline" : ""}
              >
                00 Home
              </Link>
            </li>
            <li>
              <Link
                href="/destination"
                className={
                  pathname === "/destination" ? "active underline" : ""
                }
              >
                01 Destination
              </Link>
            </li>
            <li>
              <Link
                href="/crew"
                className={pathname === "/crew" ? "active underline" : ""}
              >
                02 Crew
              </Link>
            </li>
            <li>
              <Link
                href="/technology"
                className={pathname === "/technology" ? "active underline" : ""}
              >
                03 technology
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
