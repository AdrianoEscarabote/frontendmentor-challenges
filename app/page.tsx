'use client'

import { useEffect } from 'react'

import useWeather from '@/hooks/useWeather'

import DailyForecast from './_components/daily-forecast'
import DailyForecastSkeleton from './_components/daily-forecast/daily-forecast-skeleton'
import Header from './_components/header'
import HourlyForecast from './_components/hourly-forecast'
import HourlyForecastSkeleton from './_components/hourly-forecast/hourly-forecast-skeleton'
import WeatherSummary from './_components/weather-summary'
import WeatherSummarySkeleton from './_components/weather-summary/weather-summary-skeleton'
import { useWeatherStore } from './_store/weather'

export default function Home() {
  const weather = useWeatherStore((state) => state.weather)
  const { fetchWeather } = useWeather()

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          fetchWeather(latitude.toString(), longitude.toString())
        },
        () => {
          fetchWeather('51.5074', '-0.1278', 'London, United Kingdom')
        },
      )
    } else {
      fetchWeather('51.5074', '-0.1278', 'London, United Kingdom')
    }
  }, [fetchWeather])

  return (
    <div className="flex min-h-screen w-full flex-col gap-12">
      <Header />
      <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-8 px-5 pb-20 lg:flex-row xl:px-[7rem]">
        <div className="flex w-full flex-1 flex-col gap-12">
          {weather ? <WeatherSummary /> : <WeatherSummarySkeleton />}
          {weather ? <DailyForecast /> : <DailyForecastSkeleton />}
        </div>
        {weather ? <HourlyForecast /> : <HourlyForecastSkeleton />}
      </div>
    </div>
  )
}
