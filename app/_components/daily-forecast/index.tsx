'use client'

import Image from 'next/image'

import { useWeatherStore } from '@/app/_store/weather'
import { toFixedSafe } from '@/utils/formatters'
import { weatherIconMap } from '@/utils/weatherIconMap'

const DailyForecast = () => {
  const weather = useWeatherStore((state) => state.weather)
  const units = useWeatherStore((s) => s.units)

  if (!weather) return null

  const daysToShow = 7
  const dailyTimes = weather.daily.time.slice(0, daysToShow)
  const dailyMax = weather.daily.temperature_2m_max.slice(0, daysToShow)
  const dailyMin = weather.daily.temperature_2m_min.slice(0, daysToShow)

  const toTemp = (c?: number) =>
    typeof c === 'number' ? (units.temperature === 'fahrenheit' ? (c * 9) / 5 + 32 : c) : undefined
  const dailyMaxDisp = dailyMax.map((v) => toTemp(v))
  const dailyMinDisp = dailyMin.map((v) => toTemp(v))

  const getLabel = (date: string) => {
    const [year, month, day] = date.split('-').map(Number)
    const weekDay = new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('en-US', {
      weekday: 'short',
      timeZone: 'UTC',
    })
    return weekDay
  }

  return (
    <section
      className="mx-auto w-full max-w-[50rem]"
      role="region"
      aria-label="Daily weather forecast"
    >
      <div className="flex w-full max-w-[50rem] flex-col gap-5">
        <h3 className="text-preset-5 dark:text-neutral-0 text-neutral-900">Daily forecast</h3>
        <ul
          className="grid grid-cols-3 grid-rows-3 gap-4 sm:grid-cols-4 sm:grid-rows-2 md:flex"
          role="list"
        >
          {dailyTimes.map((date, idx) => {
            const code = weather.daily.weathercode[idx]
            const iconName = weatherIconMap[code] || 'icon-error.svg'
            const dayId = `daily-${idx}-label`
            const descId = `daily-${idx}-desc`
            return (
              <li
                key={date}
                className="bg-card flex w-full max-w-[9.375rem] flex-col items-center gap-4 rounded-[0.75rem] border px-2.5 py-4 sm:flex md:max-w-[6.2856rem] dark:border-neutral-600 dark:bg-neutral-800"
                aria-labelledby={dayId}
                aria-describedby={descId}
              >
                <p id={dayId} className="text-preset-6 text-neutral-0">
                  {getLabel(date)}
                </p>
                <Image
                  src={`/images/${iconName}`}
                  alt={`Weather icon for ${getLabel(date)}`}
                  width={60}
                  height={60}
                  aria-label={`Weather condition for ${getLabel(date)}`}
                />
                <div className="flex w-full items-center justify-between">
                  <span
                    className="text-preset-7 text-neutral-0"
                    aria-label={`Maximum temperature: ${toFixedSafe(dailyMaxDisp[idx], 0)} degrees`}
                  >
                    {toFixedSafe(dailyMaxDisp[idx], 0)}°
                  </span>
                  <span
                    className="text-preset-7 text-neutral-200"
                    aria-label={`Minimum temperature: ${toFixedSafe(dailyMinDisp[idx], 0)} degrees`}
                  >
                    {toFixedSafe(dailyMinDisp[idx], 0)}°
                  </span>
                </div>
                {/* Descrição acessível sem impactar o layout */}
                <span id={descId} className="sr-only">
                  Forecast for {getLabel(date)}: {toFixedSafe(dailyMax[idx], 0)} degrees max,{' '}
                  {toFixedSafe(dailyMin[idx], 0)} degrees min
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default DailyForecast
