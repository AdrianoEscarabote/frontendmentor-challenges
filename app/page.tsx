'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import useWeather from '@/hooks/useWeather'

import BootPreloader from './_components/boot-preloader'
import DailyForecast from './_components/daily-forecast'
import DailyForecastSkeleton from './_components/daily-forecast/daily-forecast-skeleton'
import { FloatingChatButton } from './_components/floating-chat-button'
import Header from './_components/header'
import HourlyForecast from './_components/hourly-forecast'
import HourlyForecastSkeleton from './_components/hourly-forecast/hourly-forecast-skeleton'
import RainAlert from './_components/rain-alert'
import WeatherAlert from './_components/weather-alert'
import WeatherSummary from './_components/weather-summary'
import WeatherSummarySkeleton from './_components/weather-summary/weather-summary-skeleton'
import { useWeatherStore } from './_store/weather'

export default function Home() {
  const weather = useWeatherStore((state) => state.weather)
  const { fetchWeather } = useWeather()
  const [booting, setBooting] = useState(true)

  function getPosition(timeoutMs = 8000) {
    return new Promise<GeolocationPosition>((resolve, reject) => {
      if (!('geolocation' in navigator)) {
        reject(new Error('Geolocation not supported'))
        return
      }
      const id = setTimeout(() => reject(new Error('Geolocation timeout')), timeoutMs)
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          clearTimeout(id)
          resolve(pos)
        },
        (err) => {
          clearTimeout(id)
          reject(err)
        },
        { enableHighAccuracy: false, maximumAge: 60_000 },
      )
    })
  }

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const pos = await getPosition(8000)
        if (cancelled) return
        const { latitude, longitude } = pos.coords
        await fetchWeather(latitude.toString(), longitude.toString())
      } catch {
        if (cancelled) return
        await fetchWeather('51.5074', '-0.1278', 'London, United Kingdom')
      } finally {
        if (!cancelled) setBooting(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [fetchWeather])

  const handleSkip = async () => {
    await fetchWeather('51.5074', '-0.1278', 'London, United Kingdom')
    setBooting(false)
  }

  return (
    <>
      {booting && !weather ? (
        <BootPreloader onSkip={handleSkip} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          layout
          key="main-content"
          className="flex min-h-screen w-full flex-col gap-4 md:gap-12"
          aria-busy={booting}
        >
          <WeatherAlert />
          <Header />
          <div className="mx-auto flex w-full max-w-[90rem] flex-col gap-8 px-5 pb-20 lg:flex-row xl:px-[7rem]">
            <div className="flex w-full flex-1 flex-col gap-4 md:gap-12">
              {weather ? <WeatherSummary /> : <WeatherSummarySkeleton />}
              <RainAlert />
              {weather ? <DailyForecast /> : <DailyForecastSkeleton />}
            </div>
            <div className="flex w-full max-w-[384px] flex-col gap-6">
              {weather ? <HourlyForecast /> : <HourlyForecastSkeleton />}
            </div>
          </div>
          <FloatingChatButton />
        </motion.div>
      )}
    </>
  )
}
