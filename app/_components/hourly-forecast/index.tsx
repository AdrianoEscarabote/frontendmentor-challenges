import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { useWeatherStore } from '@/app/_store/weather'
import { pickAt, toFixedSafe } from '@/utils/formatters'
import { weatherIconMap } from '@/utils/weatherIconMap'

import DaysDropdown from '../days-dropdown'

type HourlyItem = { hour: number; temperature?: number; weatherCode?: number }

const HourlyForecast = () => {
  const weather = useWeatherStore((s) => s.weather)
  const units = useWeatherStore((s) => s.units)
  const [selectedDayIdx, setSelectedDayIdx] = useState(0)
  const listRef = useRef<HTMLUListElement>(null)
  const didAutoScrollRef = useRef(false)

  if (!weather) return null

  const dailyTimes = weather.daily.time.slice(0, 7)
  if (!dailyTimes.length) return null
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

  const toTemp = (c?: number) =>
    typeof c === 'number' ? (units.temperature === 'fahrenheit' ? (c * 9) / 5 + 32 : c) : undefined

  const hourlyData = weather.hourly.time
    .map((time, idx) => {
      if (time.startsWith(selectedDate)) {
        const hour = parseInt(time.slice(11, 13), 10)
        const tempC = pickAt<number>(weather.hourly.temperature_2m, idx)
        const code = pickAt<number>(weather.hourly.weathercode, idx)
        return { hour, temperature: toTemp(tempC), weatherCode: code } as HourlyItem
      }
      return null
    })
    .filter(Boolean) as HourlyItem[]

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const list = listRef.current
    if (!weather || !list) return
    const nowISO = weather.current_weather?.time
    if (!nowISO) return
    const todayISO = nowISO.slice(0, 10)
    const isToday = selectedDate === todayISO

    if (!isToday) {
      list.scrollTo({ top: 0, behavior: 'auto' })
      didAutoScrollRef.current = false
      return
    }

    if (didAutoScrollRef.current) return

    const currentHour = parseInt(nowISO.slice(11, 13), 10)
    const target = list.querySelector<HTMLElement>(`[data-hour="${currentHour}"]`)
    if (!target) return

    const listRect = list.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const paddingTop = parseFloat(getComputedStyle(list).paddingTop || '0')
    const newTop = list.scrollTop + (targetRect.top - listRect.top) - paddingTop

    list.scrollTo({ top: Math.max(newTop, 0), behavior: 'auto' })
    didAutoScrollRef.current = true
  }, [selectedDate, weather])

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
      <ul
        ref={listRef}
        className="hourly-scroll flex flex-col gap-4 overflow-y-scroll px-6 pb-6"
        role="list"
      >
        {hourlyData.map((item, idx) => (
          <li
            key={idx}
            data-hour={item.hour}
            className="border-border bg-card flex min-h-[3.75rem] items-center justify-between rounded-[0.5rem] border px-4 py-2 dark:border-neutral-600 dark:bg-neutral-700"
            role="listitem"
            aria-label={`At ${formatHour(item.hour)}, ${toFixedSafe(item.temperature, 0)} degrees, ${
              weatherIconMap[item.weatherCode as number]
                ?.replace('icon-', '')
                .replace('.svg', '')
                .replace('-', ' ') || 'Unknown weather'
            }`}
          >
            <div className="flex items-center gap-2">
              <Image
                src={`/images/${weatherIconMap[item.weatherCode as number] || 'icon-error.svg'}`}
                alt={
                  weatherIconMap[item.weatherCode as number]
                    ?.replace('icon-', '')
                    .replace('.svg', '')
                    .replace('-', ' ') || 'weather icon'
                }
                width={32}
                height={32}
              />
              <p className="text-preset-5-medium text-neutral-0">{formatHour(item.hour)}</p>
            </div>
            <p
              className="text-preset-7 text-neutral-0"
              aria-label={`Temperature: ${toFixedSafe(item.temperature, 0)} degrees`}
            >
              {toFixedSafe(item.temperature, 0)}°
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HourlyForecast
