'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

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
  { label: 'Inches (in)', value: 'in' },
]

const UnitDropdown = () => {
  const [temperature, setTemperature] = useState('celsius')
  const [wind, setWind] = useState('kmh')
  const [precipitation, setPrecipitation] = useState('mm')
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric')

  useEffect(() => {
    if (temperature === 'fahrenheit' && wind === 'mph' && precipitation === 'in') {
      setUnitSystem('imperial')
    } else if (temperature === 'celsius' && wind === 'kmh' && precipitation === 'mm') {
      setUnitSystem('metric')
    }
  }, [temperature, wind, precipitation])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="text-preset-7 text-neutral-0 focus:ring-none flex h-[43px] w-full max-w-[119px] cursor-pointer items-center justify-center gap-2.5 rounded-[8px] bg-neutral-800 focus:outline-none md:transition-all md:hover:bg-neutral-600"
          data-testid="unit-dropdown-trigger"
        >
          <Image src={'/images/icon-units.svg'} alt="units icon" width={16} height={16} />
          Units
          <Image src={'/images/icon-dropdown.svg'} alt="dropdown icon" width={12} height={18} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative top-1 right-12 w-[214px] border border-neutral-600 bg-neutral-800 px-2 py-1.5">
        <DropdownMenuItem asChild>
          <button
            className="text-preset-7 text-neutral-0 h-[39px] w-full cursor-pointer rounded-[8px] px-2 text-start transition-colors focus:bg-neutral-700"
            data-testid="unit-system-toggle"
            onClick={() => {
              if (unitSystem === 'metric') {
                setUnitSystem('imperial')
                setTemperature('fahrenheit')
                setWind('mph')
                setPrecipitation('in')
              } else {
                setUnitSystem('metric')
                setTemperature('celsius')
                setWind('kmh')
                setPrecipitation('mm')
              }
            }}
          >
            {unitSystem === 'metric' ? 'Switch to Imperial' : 'Switch to Metric'}
          </button>
        </DropdownMenuItem>

        <DropdownMenuLabel className="text-preset-8 text-neutral-300">
          Temperature
        </DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={temperature}
          onValueChange={setTemperature}
          className="flex flex-col gap-1.5"
        >
          {temperatureOptions.map((opt) => (
            <DropdownMenuRadioItem
              key={opt.value}
              value={opt.value}
              className={`text-preset-7 flex cursor-pointer appearance-none justify-between rounded-[8px] ${temperature === opt.value && 'bg-neutral-700'} h-[39px] focus:bg-neutral-700`}
            >
              {opt.label}
              {temperature === opt.value && (
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
          value={wind}
          onValueChange={setWind}
          className="flex flex-col gap-1.5"
        >
          {windOptions.map((opt) => (
            <DropdownMenuRadioItem
              key={opt.value}
              value={opt.value}
              className={`text-preset-7 flex cursor-pointer appearance-none justify-between rounded-[8px] ${wind === opt.value && 'bg-neutral-700'} h-[39px] focus:bg-neutral-700`}
            >
              {opt.label}
              {wind === opt.value && (
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
          value={precipitation}
          onValueChange={setPrecipitation}
          className="flex flex-col gap-1.5"
        >
          {precipitationOptions.map((opt) => (
            <DropdownMenuRadioItem
              key={opt.value}
              value={opt.value}
              className={`text-preset-7 flex cursor-pointer appearance-none justify-between rounded-[8px] ${precipitation === opt.value && 'bg-neutral-700'} h-[39px] focus:bg-neutral-700`}
            >
              {opt.label}
              {precipitation === opt.value && (
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
