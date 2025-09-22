import Image from 'next/image'
import { useState } from 'react'

import { useWeatherStore } from '@/app/_store/weather'
import { weatherIconMap } from '@/utils/weatherIconMap'

import DaysDropdown from '../days-dropdown'

const HourlyForecast = () => {
  const weather = useWeatherStore((s) => s.weather)
  const units = useWeatherStore((s) => s.units)
  const [selectedDayIdx, setSelectedDayIdx] = useState(0)

  if (!weather) return null

  const dailyTimes = weather.daily.time.slice(0, 7)
  const daysOfWeek = dailyTimes.map((date) => {
    const [year, month, day] = date.split('-').map(Number)
    return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('en-US', {
      weekday: 'long',
      timeZone: 'UTC',
    })
  })

  const selectedDate = dailyTimes[selectedDayIdx]

  function formatHour(hour: number) {
    const period = hour < 12 ? 'AM' : 'PM'
    const hour12 = hour % 12 === 0 ? 12 : hour % 12
    return `${hour12} ${period}`
  }

  const toTemp = (c: number) => (units.temperature === 'fahrenheit' ? (c * 9) / 5 + 32 : c)

  const hourlyData = weather.hourly.time
    .map((time, idx) => {
      if (time.startsWith(selectedDate)) {
        return {
          hour: new Date(time).getHours(),
          temperature: toTemp(weather.hourly.temperature_2m[idx]),
          weatherCode: weather.hourly.weathercode[idx],
        }
      }
      return null
    })
    .filter(Boolean)

  return (
    <section
      className="border-border flex max-h-[43.3125rem] w-full flex-col gap-4 rounded-[0.75rem] border bg-white md:max-w-[24rem] dark:border-none dark:bg-neutral-800"
      role="region"
      aria-label="Hourly weather forecast"
    >
      <div className="flex items-center justify-between px-6 pt-6">
        <h3 className="dark:text-neutral-0 text-preset-5 text-neutral-900">Hourly forecast</h3>
        <DaysDropdown days={daysOfWeek} selectedIdx={selectedDayIdx} onChange={setSelectedDayIdx} />
      </div>
      <ul className="hourly-scroll flex flex-col gap-4 overflow-y-scroll px-6 pb-6" role="list">
        {hourlyData.map((item, idx) => (
          <li
            key={idx}
            className="border-border bg-card flex min-h-[3.75rem] items-center justify-between rounded-[0.5rem] border px-4 py-2 dark:border-neutral-600 dark:bg-neutral-700"
            role="listitem"
            aria-label={`At ${formatHour(item!.hour)}, ${item!.temperature.toFixed(0)} degrees, ${weatherIconMap[item!.weatherCode]?.replace('icon-', '').replace('.svg', '').replace('-', ' ') || 'Unknown weather'}`}
          >
            <div className="flex items-center gap-2">
              <Image
                src={`/images/${weatherIconMap[item!.weatherCode] || 'icon-error.svg'}`}
                alt={
                  weatherIconMap[item!.weatherCode]
                    ?.replace('icon-', '')
                    .replace('.svg', '')
                    .replace('-', ' ') || 'weather icon'
                }
                width={32}
                height={32}
              />
              <p className="text-preset-5-medium text-neutral-0">{formatHour(item!.hour)}</p>
            </div>
            <p
              className="text-preset-7 text-neutral-0"
              aria-label={`Temperature: ${item!.temperature.toFixed(0)} degrees`}
            >
              {item!.temperature.toFixed(0)}°
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HourlyForecast
