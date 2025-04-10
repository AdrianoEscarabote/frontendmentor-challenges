"use client"

import Image from "next/image"
import { useState } from "react"

const ThemeButton = () => {
  const [theme, setTheme] = useState("light")
  const handleThemeChange = () => {
    document.documentElement.classList.toggle("light")
    setTheme(
      document.documentElement.classList.contains("light") ? "dark" : "light",
    )
  }

  return (
    <button
      className={`flex h-[3.125rem] w-[3.125rem] cursor-pointer items-center justify-center rounded-xl ${theme == "light" ? "bg-neutral-700" : "bg-neutral-100"}`}
      onClick={handleThemeChange}
    >
      <Image
        src={
          theme === "light" ? `/images/icon-sun.svg` : `/images/icon-moon.svg`
        }
        width={22}
        height={22}
        alt="icon moon"
      />
    </button>
  )
}

export default ThemeButton
