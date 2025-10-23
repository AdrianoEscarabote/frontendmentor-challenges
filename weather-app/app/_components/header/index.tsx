'use client'

import Logo from '@/app/_icons/logo'

import { ModeToggle } from '../mode-toggle/mode-toggle'
import SearchForm from '../search-form'
import UnitDropdown from '../unit-dropdown'

const Header = () => {
  return (
    <header
      role="banner"
      aria-label="Weather App header with logo, theme toggle, unit selection, and search"
      className="flex w-full flex-col items-center justify-center"
    >
      <h1 className="sr-only">Weather App - Weather forecast and meteorological conditions</h1>
      <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between px-4 pt-4 md:px-[1.5rem] md:pt-6 xl:px-[7rem] xl:pt-12">
        <Logo
          className="dark:text-neutral-0 h-[1.75rem] w-[8.5625rem] text-neutral-900 md:h-[2.5rem] md:w-[12.3125rem]"
          data-testid="logo"
          aria-label="Weather Now logo"
        />
        <div className="flex min-w-[10.625rem] items-center justify-end gap-3">
          <ModeToggle />
          <UnitDropdown />
        </div>
      </div>
      <h2
        aria-label="Main question: How’s the sky looking today?"
        className="text-preset-2 dark:text-neutral-0 mx-auto my-12 px-4 text-center text-neutral-900 md:my-16"
      >
        How’s the sky looking today?
      </h2>

      <SearchForm />
    </header>
  )
}

export default Header
