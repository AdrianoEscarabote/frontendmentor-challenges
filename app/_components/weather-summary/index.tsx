import Image from 'next/image'

import { useWeatherStore } from '@/app/_store/weather'
import { weatherIconMap } from '@/utils/weatherIconMap'

const WeatherSummary = () => {
  const cityName = useWeatherStore((state) => state.cityName)
  const weather = useWeatherStore((state) => state.weather)
  const units = useWeatherStore((s) => s.units)

  if (!weather) return null

  const temp = weather.current_weather.temperature
  const weatherCode = weather.current_weather.weathercode
  const icon = weatherIconMap[weatherCode] || 'icon-error.svg'
  const wind = weather.current_weather.windspeed
  const currentTime = weather.current_weather.time

  const getLastHourIndex = (times: string[], currentIso: string) => {
    const currentTs = new Date(currentIso).getTime()
    let idx = -1
    for (let i = 0; i < times.length; i++) {
      const ts = new Date(times[i]).getTime()
      if (ts <= currentTs) idx = i
      else break
    }
    return idx === -1 ? 0 : idx
  }

  const hourIdx = getLastHourIndex(weather.hourly.time, currentTime)

  const cardData = [
    {
      label: 'Feels Like',
      value: `${weather.hourly.apparent_temperature[hourIdx]?.toFixed(0)}°`,
      aria: `Feels like: ${weather.hourly.apparent_temperature[hourIdx]?.toFixed(0)} degrees`,
    },
    {
      label: 'Humidity',
      value: `${weather.hourly.relative_humidity_2m[hourIdx]?.toFixed(0)}%`,
      aria: `Humidity: ${weather.hourly.relative_humidity_2m[hourIdx]?.toFixed(0)} percent`,
    },
    {
      label: 'Wind',
      value: `${wind?.toFixed(0)} ${units.wind.replace('kmh', 'km/h')}`,
      aria: `Wind: ${wind?.toFixed(0)} ${units.wind.replace('kmh', 'km/h')}`,
    },
    {
      label: 'Precipitation',
      value: `${weather.hourly.precipitation[hourIdx]} mm`,
      aria: `Precipitation: ${weather.hourly.precipitation[hourIdx]} mm`,
    },
    {
      label: 'UV Index',
      value: `${weather.hourly.uv_index[hourIdx]}`,
      aria: `UV Index: ${weather.hourly.uv_index[hourIdx]}`,
    },
    {
      label: 'Visibility',
      value: `${weather.hourly.visibility[hourIdx]?.toFixed(0)} m`,
      aria: `Visibility: ${weather.hourly.visibility[hourIdx]?.toFixed(0)} meters`,
    },
    {
      label: 'Air Pressure',
      value: `${weather.hourly.pressure_msl[hourIdx]?.toFixed(0)} hPa`,
      aria: `Air Pressure: ${weather.hourly.pressure_msl[hourIdx]?.toFixed(0)} hPa`,
    },
    {
      label: 'Cloud Cover',
      value: `${weather.hourly.cloudcover[hourIdx]?.toFixed(0)}%`,
      aria: `Cloud Cover: ${weather.hourly.cloudcover[hourIdx]?.toFixed(0)} percent`,
    },
  ]

  const dateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <section
      id="weather-summary"
      className="flex max-w-[50rem] flex-col gap-0 pt-4 sm:gap-8 sm:pt-0"
      role="region"
      aria-label="Weather summary"
    >
      <div
        className="relative rounded-[1.25rem] bg-[url('/images/bg-today-small.svg')] bg-cover bg-center px-6 py-20 lg:bg-[url('/images/bg-today-large.svg')]"
        role="region"
        aria-label={`Current weather for ${cityName}`}
      >
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row lg:gap-0">
          <div className="flex flex-col gap-3">
            <h2 className="text-neutral-0 text-preset-4" aria-label={`City: ${cityName}`}>
              {cityName}
            </h2>
            <p className="text-preset-6 text-neutral-200" aria-label={`Date: ${dateStr}`}>
              {dateStr}
            </p>
          </div>
          <div
            className="flex items-center gap-2"
            aria-label={`Temperature: ${temp.toFixed(0)} degrees`}
          >
            <Image
              src={`/images/${icon}`}
              aria-label="Weather condition icon"
              alt="weather icon"
              width={120}
              height={120}
            />
            <span
              className="text-neutral-0 text-preset-1"
              aria-live="polite"
              aria-label={`Temperature: ${temp.toFixed(0)} degrees`}
            >
              {temp.toFixed(0)}°
            </span>
          </div>
        </div>
      </div>
      <div
        className="grid grid-cols-2 items-center gap-4 py-6 sm:flex-col md:grid-cols-4 md:grid-rows-2 md:gap-6 md:py-0 dark:bg-neutral-900"
        role="region"
        aria-label="Weather details"
      >
        {cardData.map((card) => (
          <div
            key={card.label}
            className="bg-card border-border flex w-full max-w-none flex-col items-start gap-6 rounded-[0.75rem] border p-5 lg:max-w-[11.375rem] dark:border-neutral-600 dark:bg-neutral-800"
            role="group"
            aria-label={card.label}
          >
            <p className="text-preset-6 text-neutral-200 dark:text-neutral-200">{card.label}</p>
            <p
              className="dark:text-neutral-0 text-preset-3 text-neutral-200"
              aria-live="polite"
              aria-label={card.aria}
            >
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WeatherSummary
