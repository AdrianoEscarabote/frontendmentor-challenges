/* eslint-disable prefer-const */
'use client'
import { useEffect, useMemo } from 'react'

import { useWeatherStore } from '@/app/_store/weather'

export default function RainAlert() {
  const weather = useWeatherStore((s) => s.weather)

  const hourIdx = useMemo(() => {
    if (!weather?.hourly?.time?.length) return 0
    const nowISO = weather.current_weather?.time
    const idx = nowISO ? weather.hourly.time.indexOf(nowISO) : -1
    return idx >= 0 ? idx : 0
  }, [weather])

  useEffect(() => {
    let id: number | undefined

    async function tick() {
      if (!weather) return

      const precip = weather.hourly?.precipitation ?? []
      const next3h = precip.slice(hourIdx, hourIdx + 3)
      const willRain = next3h.some((mm) => typeof mm === 'number' && mm > 0)
      if (!willRain || !('Notification' in window)) return

      if (Notification.permission === 'granted') {
        new Notification('Possible rain in the next 3 hours ☔')
        return
      }
      if (Notification.permission === 'default') {
        const perm = await Notification.requestPermission()
        if (perm === 'granted') new Notification('Possible rain in the next 3 hours ☔')
      }
    }

    tick()
    id = window.setInterval(tick, 15 * 60 * 1000)
    return () => clearInterval(id)
  }, [weather, hourIdx])

  return null
}
