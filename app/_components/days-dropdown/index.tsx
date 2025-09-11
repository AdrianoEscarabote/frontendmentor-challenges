'use client'

import { ChevronDown } from 'lucide-react'

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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="text-preset-7 flex min-w-[120px] cursor-pointer items-center justify-center gap-1 rounded-[8px] border-none bg-neutral-600 font-medium text-gray-200"
        >
          {days[selectedIdx]}
          <ChevronDown size={20} className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative right-10 w-[214px] rounded-[12px] border border-neutral-600 bg-neutral-800 p-2">
        <DropdownMenuGroup className="flex flex-col gap-1.5">
          {days.map((itemDay, idx) => (
            <DropdownMenuItem
              key={itemDay}
              className={`text-preset-7 text-neutral-0 w-full cursor-pointer px-2 py-2.5 focus:bg-neutral-700 ${selectedIdx === idx ? 'bg-neutral-700' : 'bg-transparent'}`}
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
