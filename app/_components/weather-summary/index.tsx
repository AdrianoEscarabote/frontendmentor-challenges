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
  const feelsLike = weather.hourly.apparent_temperature.at(-1)
  const humidity = weather.hourly.relative_humidity_2m.at(-1)
  const wind = weather.current_weather.windspeed
  const precipitation = weather.hourly.precipitation.at(-1)

  const dateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <section
      className="flex max-w-[800px] flex-col gap-0 sm:gap-8"
      role="region"
      aria-label="Weather summary"
    >
      <div
        className="relative rounded-[20px] bg-[url('/images/bg-today-small.svg')] bg-cover bg-center px-6 py-20 lg:bg-[url('/images/bg-today-large.svg')]"
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
        className="grid grid-cols-2 items-center gap-4 py-6 md:flex md:gap-6 md:py-0 dark:bg-neutral-900"
        role="region"
        aria-label="Weather details"
      >
        <div
          className="bg-card border-border flex w-full max-w-none flex-col items-start gap-6 rounded-[12px] border p-5 lg:max-w-[182px] dark:border-neutral-600 dark:bg-neutral-800"
          role="group"
          aria-label="Feels Like"
        >
          <p className="text-preset-6 text-neutral-200 dark:text-neutral-200">Feels Like</p>
          <p
            className="dark:text-neutral-0 text-preset-3 text-neutral-200"
            aria-live="polite"
            aria-label={`Feels like: ${feelsLike?.toFixed(0)} degrees`}
          >
            {feelsLike?.toFixed(0)}°
          </p>
        </div>
        <div
          className="bg-card border-border flex w-full max-w-none flex-col items-start gap-6 rounded-[12px] border p-5 lg:max-w-[182px] dark:border-neutral-600 dark:bg-neutral-800"
          role="group"
          aria-label="Humidity"
        >
          <p className="text-preset-6 text-neutral-200 dark:text-neutral-200">Humidity</p>
          <p
            className="dark:text-neutral-0 text-preset-3 text-neutral-200"
            aria-live="polite"
            aria-label={`Humidity: ${humidity?.toFixed(0)} percent`}
          >
            {humidity?.toFixed(0)}%
          </p>
        </div>
        <div
          className="bg-card border-border flex w-full max-w-none flex-col items-start gap-6 rounded-[12px] border p-5 lg:max-w-[182px] dark:border-neutral-600 dark:bg-neutral-800"
          role="group"
          aria-label="Wind"
        >
          <p className="text-preset-6 text-neutral-200 dark:text-neutral-200">Wind</p>
          <p
            className="dark:text-neutral-0 text-preset-3 text-neutral-200"
            aria-live="polite"
            aria-label={`Wind: ${wind?.toFixed(0)} ${units.wind.replace('kmh', 'km/h')}`}
          >
            {wind?.toFixed(0)} {units.wind.replace('kmh', 'km/h')}
          </p>
        </div>
        <div
          className="bg-card border-border flex w-full max-w-none flex-col items-start gap-6 rounded-[12px] border p-5 lg:max-w-[182px] dark:border-neutral-600 dark:bg-neutral-800"
          role="group"
          aria-label="Precipitation"
        >
          <p className="text-preset-6 text-neutral-200 dark:text-neutral-200">Precipitation</p>
          <p
            className="dark:text-neutral-0 text-preset-3 text-neutral-200"
            aria-live="polite"
            aria-label={`Precipitation: ${precipitation?.toFixed(0)} mm`}
          >
            {precipitation?.toFixed(0)} mm
          </p>
        </div>
      </div>
    </section>
  )
}

export default WeatherSummary
