"use client";

import Image from "next/image";
import Cart from "../cart";
import { useState } from "react";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mx-auto w-full max-w-[90rem] px-5 pt-8 lg:px-[10.3125rem] lg:pt-0">
      <div className="flex w-full flex-row justify-between border-b-2 border-b-neutral-light-grayish-blue lg:pb-[1.1875rem] lg:pt-[2.5625rem]">
        <nav className="flex gap-8 md:gap-14">
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              setCartOpen(false);
            }}
            className="flex items-start md:hidden"
          >
            <Image
              src={"/images/icon-menu.svg"}
              alt=""
              width={20}
              height={20}
              className="mt-1"
            />
          </button>

          {menuOpen && (
            <div
              className="fixed left-0 top-0 z-50 min-h-screen w-full bg-black bg-opacity-75"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div
                className="absolute left-0 top-0 flex min-h-screen w-[50%] flex-col gap-3 bg-neutral-white px-6 py-8"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="mb-8" onClick={() => setMenuOpen(!menuOpen)}>
                  <Image
                    src={"/images/icon-close.svg"}
                    alt=""
                    width={20}
                    height={20}
                  />
                </button>
                <ul className="flex flex-col gap-4">
                  <li className="relative font-bold tracking-[-0.0219rem] text-neutral-very-dark-blue">
                    <a href="/">Collections</a>
                  </li>
                  <li className="relative font-bold tracking-[-0.0219rem] text-neutral-very-dark-blue">
                    <a href="/">Men</a>
                  </li>
                  <li className="relative font-bold tracking-[-0.0219rem] text-neutral-very-dark-blue">
                    <a href="/">Women</a>
                  </li>
                  <li className="relative font-bold tracking-[-0.0219rem] text-neutral-very-dark-blue">
                    <a href="/">About</a>
                  </li>
                  <li className="relative font-bold tracking-[-0.0219rem] text-neutral-very-dark-blue">
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <div className="relative mt-[0.125rem] h-5 w-[8.625rem]">
            <Image alt="logo" src={"/images/logo.svg"} fill />
          </div>
          <ul className="hidden gap-8 md:flex">
            <li>
              <a
                href="/"
                className="relative tracking-[-0.0219rem] text-neutral-dark-grayish-blue hover:text-neutral-very-dark-blue hover:after:absolute hover:after:-bottom-[3.125rem] hover:after:left-0 hover:after:h-[0.125rem] hover:after:w-full hover:after:bg-primary-orange"
              >
                Collections
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="relative tracking-[-0.0219rem] text-neutral-dark-grayish-blue hover:text-neutral-very-dark-blue hover:after:absolute hover:after:-bottom-[3.125rem] hover:after:left-0 hover:after:h-[0.125rem] hover:after:w-full hover:after:bg-primary-orange"
              >
                Men
              </a>
            </li>

            <li>
              <a
                href="/"
                className="relative tracking-[-0.0219rem] text-neutral-dark-grayish-blue hover:text-neutral-very-dark-blue hover:after:absolute hover:after:-bottom-[3.125rem] hover:after:left-0 hover:after:h-[0.125rem] hover:after:w-full hover:after:bg-primary-orange"
              >
                Women
              </a>
            </li>
            <li>
              <a
                href="/"
                className="relative tracking-[-0.0219rem] text-neutral-dark-grayish-blue hover:text-neutral-very-dark-blue hover:after:absolute hover:after:-bottom-[3.125rem] hover:after:left-0 hover:after:h-[0.125rem] hover:after:w-full hover:after:bg-primary-orange"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="relative tracking-[-0.0219rem] text-neutral-dark-grayish-blue hover:text-neutral-very-dark-blue hover:after:absolute hover:after:-bottom-[3.125rem] hover:after:left-0 hover:after:h-[0.125rem] hover:after:w-full hover:after:bg-primary-orange"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-[2.75rem]">
          <Cart isOpen={cartOpen} setIsOpen={setCartOpen} />
          <Image
            alt=""
            src={"/images/image-avatar.png"}
            width={52}
            height={52}
            className="relative bottom-[0.9375rem] cursor-pointer hover:rounded-full hover:outline hover:outline-2 hover:outline-primary-orange"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
