'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/app/_components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/_components/ui/dropdown-menu'

type DaysDropdownProps = {
  days: string[]
  selectedIdx: number
  onChange: (idx: number) => void
}

const DaysDropdown = ({ days, selectedIdx, onChange }: DaysDropdownProps) => {
  const [open, setOpen] = useState(false)
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className="text-preset-7 flex min-w-[7.5rem] cursor-pointer items-center justify-center gap-1 rounded-[0.5rem] border-none bg-neutral-900 font-medium text-gray-200 hover:bg-neutral-800 dark:bg-neutral-600 dark:hover:bg-neutral-700"
          aria-label="Select day"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          {days[selectedIdx]}
          <ChevronDown size={20} className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="relative right-10 w-[13.375rem] rounded-[0.75rem] border border-neutral-600 bg-neutral-900 p-2 dark:bg-neutral-800"
        role="listbox"
        aria-label="Days of the week"
      >
        <DropdownMenuGroup className="flex flex-col gap-1.5">
          {days.map((itemDay, idx) => (
            <DropdownMenuItem
              key={itemDay}
              className={`text-preset-7 text-neutral-0 focus:text-neutral-0 w-full cursor-pointer px-2 py-2.5 focus:bg-neutral-700 ${selectedIdx === idx ? 'bg-neutral-700' : 'bg-transparent'}`}
              role="option"
              aria-selected={selectedIdx === idx}
              onClick={() => onChange(idx)}
            >
              {itemDay}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DaysDropdown
