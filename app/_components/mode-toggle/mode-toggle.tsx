'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'

import { Button } from '@/app/_components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/_components/ui/dropdown-menu'

export function ModeToggle() {
  const { setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Toggle theme"
          aria-haspopup="menu"
          aria-expanded={open}
          className="h-[43px] w-[43px] cursor-pointer border-none bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700"
        >
          <Sun
            className="text-neutral-0 h-[1.25rem] w-[1.25rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
            data-testid="lucide-sun"
          />
          <Moon
            className="text-neutral-0 absolute h-[1.25rem] w-[1.25rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
            data-testid="lucide-moon"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        role="menu"
        aria-label="Theme selection"
        className="flex flex-col gap-0.5 bg-neutral-900 dark:bg-neutral-800"
      >
        <DropdownMenuItem
          role="menuitem"
          tabIndex={0}
          aria-label="Switch to light theme"
          onClick={() => setTheme('light')}
          className="text-neutral-0 focus:text-neutral-0 cursor-pointer focus:bg-neutral-800 dark:focus:bg-neutral-700"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          role="menuitem"
          tabIndex={0}
          aria-label="Switch to dark theme"
          onClick={() => setTheme('dark')}
          className="text-neutral-0 focus:text-neutral-0 cursor-pointer focus:bg-neutral-800 dark:focus:bg-neutral-700"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          role="menuitem"
          tabIndex={0}
          aria-label="Switch to system theme"
          onClick={() => setTheme('system')}
          className="text-neutral-0 focus:text-neutral-0 cursor-pointer focus:bg-neutral-800 dark:focus:bg-neutral-700"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
