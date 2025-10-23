import { useCallback } from 'react'

import { useWeatherStore } from '@/app/_store/weather'

const getCityName = async (lat: string, lon: string) => {
  const res = await fetch(`/api/reverse-geocode?lat=${lat}&lon=${lon}`)
  const data = await res.json()
  const city = data.address?.city || data.address?.town || data.address?.village
  const country = data.address?.country
  return city && country ? `${city}, ${country}` : city || country || 'Your Location'
}

const useWeather = () => {
  const { setWeather } = useWeatherStore()

  const fetchWeather = useCallback(
    async (lat: string, lon: string, cityName?: string) => {
      let resolvedCityName = cityName
      if (!cityName || cityName === 'Your Location') {
        resolvedCityName = await getCityName(lat, lon)
      }
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=auto&timeformat=iso8601&current_weather=true&temperature_unit=celsius&windspeed_unit=kmh&precipitation_unit=mm&hourly=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weathercode,windspeed_10m,uv_index,visibility,pressure_msl,cloudcover&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum`
      const response = await fetch(url)
      const data = await response.json()
      setWeather(data, resolvedCityName)
    },
    [setWeather],
  )

  return { fetchWeather }
}

export default useWeather
