import Image from 'next/image'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/app/_components/ui/dropdown-menu'
import { useWeatherStore } from '@/app/_store/weather'

const temperatureOptions = [
  { label: 'Celsius (°C)', value: 'celsius' },
  { label: 'Fahrenheit (°F)', value: 'fahrenheit' },
]

const windOptions = [
  { label: 'km/h', value: 'kmh' },
  { label: 'mph', value: 'mph' },
]

const precipitationOptions = [
  { label: 'Millimeters (mm)', value: 'mm' },
  { label: 'Inches (inch)', value: 'inch' },
]

const UnitDropdown = () => {
  const units = useWeatherStore((s) => s.units)
  const setUnits = useWeatherStore((s) => s.setUnits)

  const handleUnitSystemToggle = () => {
    if (units.temperature === 'celsius' && units.wind === 'kmh' && units.precipitation === 'mm') {
      setUnits({ temperature: 'fahrenheit', wind: 'mph', precipitation: 'inch' })
    } else {
      setUnits({ temperature: 'celsius', wind: 'kmh', precipitation: 'mm' })
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="text-preset-7 text-neutral-0 focus:ring-none flex h-[2.6875rem] w-[7.4375rem] cursor-pointer items-center justify-center gap-2.5 rounded-[0.5rem] bg-neutral-900 focus:outline-none md:transition-all md:hover:bg-neutral-800 dark:bg-neutral-800 dark:md:hover:bg-neutral-700"
          data-testid="unit-dropdown-trigger"
        >
          <Image src={'/images/icon-units.svg'} alt="units icon" width={16} height={16} />
          Units
          <Image src={'/images/icon-dropdown.svg'} alt="dropdown icon" width={12} height={18} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="border-border relative top-1 right-12 w-[13.375rem] border bg-neutral-900 px-2 py-1.5 dark:border-neutral-600 dark:bg-neutral-800">
        <DropdownMenuItem asChild>
          <button
            className="text-preset-7 text-neutral-0 focus:text-neutral-0 h-[2.4375rem] w-full cursor-pointer rounded-[0.5rem] px-2 text-start transition-colors focus:bg-neutral-800 dark:focus:bg-neutral-700"
            data-testid="unit-system-toggle"
            onClick={handleUnitSystemToggle}
          >
            {units.temperature === 'celsius' ? 'Switch to Imperial' : 'Switch to Metric'}
          </button>
        </DropdownMenuItem>

        <DropdownMenuLabel className="text-preset-8 text-neutral-200 dark:text-neutral-300">
          Temperature
        </DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={units.temperature}
          onValueChange={(value) => setUnits({ temperature: value as 'celsius' | 'fahrenheit' })}
          className="flex flex-col gap-1.5"
        >
          {temperatureOptions.map((opt) => (
            <DropdownMenuRadioItem
              key={opt.value}
              value={opt.value}
              className={`text-preset-7 flex cursor-pointer appearance-none justify-between rounded-[0.5rem] ${units.temperature === opt.value && 'bg-neutral-700 text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-700 focus-visible:bg-neutral-700'} text-neutral-0 hover:text-neutral-0 focus:text-neutral-0 h-[2.4375rem] focus:bg-neutral-800 dark:focus:bg-neutral-700`}
            >
              {opt.label}
              {units.temperature === opt.value && (
                <Image
                  src={'/images/icon-checkmark.svg'}
                  width={14}
                  height={17}
                  alt="checkmark icon"
                />
              )}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator className="mx-1 bg-neutral-600" />

        <DropdownMenuLabel className="text-preset-8 text-neutral-300">Wind Speed</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={units.wind}
          onValueChange={(value) => setUnits({ wind: value as 'kmh' | 'mph' })}
          className="flex flex-col gap-1.5"
        >
          {windOptions.map((opt) => (
            <DropdownMenuRadioItem
              key={opt.value}
              value={opt.value}
              className={`text-preset-7 flex cursor-pointer appearance-none justify-between rounded-[0.5rem] ${units.wind === opt.value && 'bg-neutral-700 text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-700 focus-visible:bg-neutral-700'} text-neutral-0 hover:text-neutral-0 focus:text-neutral-0 h-[2.4375rem] focus:bg-neutral-800 dark:focus:bg-neutral-700`}
            >
              {opt.label}
              {units.wind === opt.value && (
                <Image
                  src={'/images/icon-checkmark.svg'}
                  width={14}
                  height={17}
                  alt="checkmark icon"
                />
              )}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>

        <DropdownMenuSeparator className="mx-1 bg-neutral-600" />

        <DropdownMenuLabel className="text-preset-8 text-neutral-300">
          Precipitation
        </DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={units.precipitation}
          onValueChange={(value) => setUnits({ precipitation: value as 'mm' | 'inch' })}
          className="flex flex-col gap-1.5"
        >
          {precipitationOptions.map((opt) => (
            <DropdownMenuRadioItem
              key={opt.value}
              value={opt.value}
              className={`text-preset-7 flex cursor-pointer appearance-none justify-between rounded-[0.5rem] ${units.precipitation === opt.value && 'bg-neutral-700 text-neutral-200 hover:bg-neutral-700 focus:bg-neutral-700 focus-visible:bg-neutral-700'} text-neutral-0 hover:text-neutral-0 focus:text-neutral-0 h-[2.4375rem] focus:bg-neutral-800 dark:focus:bg-neutral-700`}
            >
              {opt.label}
              {units.precipitation === opt.value && (
                <Image
                  src={'/images/icon-checkmark.svg'}
                  width={14}
                  height={17}
                  alt="checkmark icon"
                />
              )}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UnitDropdown
