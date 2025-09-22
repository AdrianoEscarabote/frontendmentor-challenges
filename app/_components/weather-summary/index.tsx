import Image from 'next/image'

import { useWeatherStore } from '@/app/_store/weather'
import { weatherIconMap } from '@/utils/weatherIconMap'

export function formatVisibility(
  meters: number,
  units: { temperature: string; wind: string; precipitation: string },
) {
  const isImperial =
    units.temperature === 'fahrenheit' || units.wind === 'mph' || units.precipitation === 'inch'

  if (isImperial) {
    const mi = meters / 1609.344
    return `${mi >= 10 ? Math.round(mi) : mi.toFixed(1)} mi`
  }
  if (meters >= 1000)
    return `${meters >= 10000 ? Math.round(meters / 1000) : (meters / 1000).toFixed(1)} km`
  return `${Math.round(meters)} m`
}

const WeatherSummary = () => {
  const cityName = useWeatherStore((state) => state.cityName)
  const weather = useWeatherStore((state) => state.weather)
  const units = useWeatherStore((s) => s.units)

  if (!weather) return null

  const temp = weather.current_weather.temperature
  const weatherCode = weather.current_weather.weathercode
  const icon = weatherIconMap[weatherCode] || 'icon-error.svg'
  const currentTime = weather.current_weather.time

  function toHourIso(iso: string) {
    return iso.slice(0, 13) + ':00'
  }

  function getHourIndex(times: string[], currentIso: string) {
    const curHour = toHourIso(currentIso)

    const exact = times.indexOf(curHour)
    if (exact !== -1) return exact

    let last = 0
    for (let i = 0; i < times.length; i++) {
      if (times[i] <= curHour) last = i
      else break
    }
    return last
  }

  const hourIdx = getHourIndex(weather.hourly.time, currentTime)

  const tempC = weather.current_weather.temperature
  const tempDisplay = units.temperature === 'fahrenheit' ? (tempC * 9) / 5 + 32 : tempC

  const windKmh = weather.current_weather.windspeed
  const windDisplay = units.wind === 'mph' ? windKmh * 0.621371 : windKmh

  const precipMm = weather.hourly.precipitation[hourIdx]
  const precipDisplay =
    units.precipitation === 'inch'
      ? `${(precipMm / 25.4).toFixed(2)} in`
      : `${precipMm.toFixed(1)} mm`

  const cardData = [
    {
      label: 'Feels Like',
      value: `${(units.temperature === 'fahrenheit'
        ? (weather.hourly.apparent_temperature[hourIdx] * 9) / 5 + 32
        : weather.hourly.apparent_temperature[hourIdx]
      )?.toFixed(0)}°`,
      aria: `Feels like: ${weather.hourly.apparent_temperature[hourIdx]?.toFixed(0)} degrees`,
    },
    {
      label: 'Humidity',
      value: `${weather.hourly.relative_humidity_2m[hourIdx]?.toFixed(0)}%`,
      aria: `Humidity: ${weather.hourly.relative_humidity_2m[hourIdx]?.toFixed(0)} percent`,
    },
    {
      label: 'Wind',
      value: `${windDisplay?.toFixed(0)} ${units.wind.replace('kmh', 'km/h')}`,
      aria: `Wind: ${windDisplay?.toFixed(0)} ${units.wind.replace('kmh', 'km/h')}`,
    },
    {
      label: 'Precipitation',
      value: precipDisplay,
      aria: `Precipitation: ${precipDisplay}`,
    },
    {
      label: 'UV Index',
      value: `${weather.hourly.uv_index[hourIdx]}`,
      aria: `UV Index: ${weather.hourly.uv_index[hourIdx]}`,
    },
    {
      label: 'Visibility',
      value: formatVisibility(weather.hourly.visibility[hourIdx], units),
      aria: `Visibility: ${formatVisibility(weather.hourly.visibility[hourIdx], units)}`,
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
              {tempDisplay.toFixed(0)}°
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
