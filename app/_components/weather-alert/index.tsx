'use client'

import { Droplets, Eye, Thermometer, Wind, X } from 'lucide-react'
import type React from 'react'
import { useEffect, useMemo, useState } from 'react'

import { useWeatherStore } from '@/app/_store/weather'

interface WeatherAlert {
  id: string
  type: 'rain' | 'heat' | 'cold' | 'wind' | 'visibility'
  title: string
  message: string
  severity: 'low' | 'medium' | 'high'
  icon: React.ReactNode
}

export default function WeatherAlert() {
  const weather = useWeatherStore((s) => s.weather)
  const [alerts, setAlerts] = useState<WeatherAlert[]>([])
  const [dismissedAlerts, setDismissedAlerts] = useState<Set<string>>(new Set())

  const hourIdx = useMemo(() => {
    if (!weather?.hourly?.time?.length) return 0
    const nowISO = weather.current_weather?.time
    const idx = nowISO ? weather.hourly.time.indexOf(nowISO) : -1
    return idx >= 0 ? idx : 0
  }, [weather])

  useEffect(() => {
    if (!weather) return

    const newAlerts: WeatherAlert[] = []

    const precip = weather.hourly?.precipitation ?? []
    const next3h = precip.slice(hourIdx, hourIdx + 3)
    const willRain = next3h.some((mm) => typeof mm === 'number' && mm > 0)
    if (willRain) {
      newAlerts.push({
        id: 'rain-alert',
        type: 'rain',
        title: 'Rain Expected',
        message: 'Possible rain in the next 3 hours. Take an umbrella!',
        severity: 'medium',
        icon: <Droplets className="h-5 w-5" />,
      })
    }

    // Temperatures (Open‑Meteo schema)
    const currentTemp = weather.current_weather?.temperature ?? NaN
    const maxTempToday = weather.daily?.temperature_2m_max?.[0]
    const minTempToday = weather.daily?.temperature_2m_min?.[0]

    if (
      Number.isFinite(currentTemp) &&
      (currentTemp > 35 || (Number.isFinite(maxTempToday) && (maxTempToday as number) > 35))
    ) {
      newAlerts.push({
        id: 'heat-alert',
        type: 'heat',
        title: 'Extreme Heat',
        message: `Very high temperature (${Math.round(
          Math.max(currentTemp, (maxTempToday as number) ?? currentTemp),
        )}°C). Stay hydrated and avoid prolonged sun exposure.`,
        severity: 'high',
        icon: <Thermometer className="h-5 w-5" />,
      })
    }

    if (
      Number.isFinite(currentTemp) &&
      (currentTemp < 5 || (Number.isFinite(minTempToday) && (minTempToday as number) < 5))
    ) {
      newAlerts.push({
        id: 'cold-alert',
        type: 'cold',
        title: 'Severe Cold',
        message: `Very low temperature (${Math.round(
          Math.min(currentTemp, (minTempToday as number) ?? currentTemp),
        )}°C). Wear appropriate clothing and protect yourself from the cold.`,
        severity: 'medium',
        icon: <Thermometer className="h-5 w-5" />,
      })
    }

    const windSpeed = weather.current_weather?.windspeed ?? NaN
    if (Number.isFinite(windSpeed) && windSpeed > 25) {
      newAlerts.push({
        id: 'wind-alert',
        type: 'wind',
        title: 'Strong Winds',
        message: `Strong winds of ${Math.round(windSpeed)} km/h. Beware of loose objects and outdoor activities.`,
        severity: 'medium',
        icon: <Wind className="h-5 w-5" />,
      })
    }

    const visMeters = weather.hourly?.visibility?.[hourIdx]
    if (typeof visMeters === 'number') {
      const visibilityKm = Math.round(visMeters / 1000)
      if (visibilityKm < 5) {
        newAlerts.push({
          id: 'visibility-alert',
          type: 'visibility',
          title: 'Low Visibility',
          message: `Reduced visibility (${visibilityKm} km). Drive carefully and use headlights.`,
          severity: 'high',
          icon: <Eye className="h-5 w-5" />,
        })
      }
    }

    const activeAlerts = newAlerts.filter((a) => !dismissedAlerts.has(a.id))
    setAlerts(activeAlerts)
  }, [weather, hourIdx, dismissedAlerts])

  const dismissAlert = (alertId: string) => {
    setDismissedAlerts((prev) => new Set([...prev, alertId]))
  }

  const getSeverityStyles = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-500/10 border-red-500/20 text-red-100'
      case 'medium':
        return 'bg-yellow-500/10 border-yellow-500/20 text-yellow-100'
      case 'low':
        return 'bg-blue-500/10 border-blue-500/20 text-blue-100'
      default:
        return 'bg-gray-500/10 border-gray-500/20 text-gray-100'
    }
  }

  if (alerts.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm space-y-3">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`relative overflow-hidden rounded-xl border backdrop-blur-md ${getSeverityStyles(alert.severity)} animate-in slide-in-from-right-full shadow-lg shadow-black/20 duration-500`}
        >
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          <div className="relative p-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0">{alert.icon}</div>

              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <h4 className="text-sm font-semibold">{alert.title}</h4>
                  <button
                    onClick={() => dismissAlert(alert.id)}
                    className="flex-shrink-0 rounded-full p-1 transition-colors hover:bg-white/10"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <p className="text-xs leading-relaxed opacity-90">{alert.message}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
