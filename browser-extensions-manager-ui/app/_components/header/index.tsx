import IconLogo from "@/app/_icons/logo"

import ThemeButton from "../theme-button"

const Header = () => {
  return (
    <header className="bg-background-1 max-w-[90rem] rounded-[1.25rem] px-4 py-3">
      <nav className="flex items-center justify-between">
        <IconLogo className="text-text-color-1 h-[2.5625rem] w-[11.1875rem]" />

        <ThemeButton />
      </nav>
    </header>
  )
}

export default Header
