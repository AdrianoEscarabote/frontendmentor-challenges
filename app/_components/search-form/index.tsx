'use client'

import { AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import useWeather from '@/hooks/useWeather'

import PrimaryButton from '../primary-button'
import SearchDropdown from '../search-dropdown'
import VoiceSearchButton from '../voice-search-button'

export type CitySuggestion = {
  name: string
  latitude: number
  longitude: number
}

const SearchForm = () => {
  const { fetchWeather } = useWeather()
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<{ query: string }>()
  const query = watch('query')
  const [loading, setLoading] = useState(false)
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([])

  const [selectedCity, setSelectedCity] = useState<{
    name: string
    latitude: number
    longitude: number
  } | null>(null)

  const [showDropdown, setShowDropdown] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!query) {
      setSuggestions([])
      return
    }
    setLoading(true)
    fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5`,
    )
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(
          data.results.map(
            (city: { name: string; country: string; latitude: number; longitude: number }) => ({
              name: `${city.name}, ${city.country}`,
              latitude: city.latitude,
              longitude: city.longitude,
            }),
          ),
        )
        setLoading(false)
      })
      .catch(() => {
        setSuggestions([])
        setLoading(false)
      })
  }, [query])

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true)
    setError(null)

    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(data.query)}&count=1`,
    )
    const geoData = await geoRes.json()
    const city = geoData.results?.[0]

    if (!city) {
      setError('City not found. Please select a valid city.')
      setLoading(false)
      return
    }

    const cityToUse = selectedCity || {
      name: `${city.name}, ${city.country}`,
      latitude: city.latitude,
      longitude: city.longitude,
    }

    await fetchWeather(
      cityToUse.latitude.toString(),
      cityToUse.longitude.toString(),
      cityToUse.name,
    )

    if (window.innerWidth < 768) {
      document.getElementById('weather-summary')?.scrollIntoView({ behavior: 'smooth' })
    }

    setLoading(false)
    setValue('query', '')
    setSuggestions([])
    setSelectedCity(null)
  })

  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 100)
  }

  const handleSelectCity = (cityObj: { name: string; latitude: number; longitude: number }) => {
    setValue('query', cityObj.name)
    setSelectedCity(cityObj)
    setShowDropdown(false)
  }

  return (
    <form
      role="search"
      aria-label="Search for a place"
      className="relative z-50 flex w-full flex-col items-center justify-center gap-4 px-4 md:flex-row md:px-0"
      onSubmit={onSubmit}
    >
      <div className="relative w-full md:max-w-[526px]">
        <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">
          <Search size={20} />
        </span>
        <input
          type="text"
          placeholder="Search for a place..."
          aria-label="Search for a place"
          aria-invalid={!!errors.query}
          aria-describedby={errors.query ? 'search-error' : undefined}
          className={`text-preset-5-medium h-14 w-full max-w-none cursor-pointer rounded-md bg-neutral-900 p-2 pl-12 text-white md:max-w-[526px] dark:bg-neutral-800 ${errors.query && 'border border-red-400 outline outline-red-400'}`}
          {...register('query', { required: 'Please enter a location' })}
          onFocus={() => {
            setShowDropdown(true)
            setError(null)
          }}
          onBlur={handleBlur}
          aria-controls="city-suggestions"
        />
        {query && !loading && suggestions.length === 0 && (
          <span
            role="alert"
            className="text-preset-7 absolute -top-8 left-0 mt-2 text-red-400 md:top-14"
          >
            No search result found!
          </span>
        )}
        {query && showDropdown && (
          <AnimatePresence>
            <div className="pointer-events-auto absolute top-16 left-0 z-[70] w-full">
              <SearchDropdown
                key={suggestions.length}
                loading={loading}
                suggestions={suggestions}
                onSelect={handleSelectCity}
              />
            </div>
          </AnimatePresence>
        )}
      </div>
      <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
        <PrimaryButton
          type="submit"
          aria-label="Search"
          className="w-full max-w-none md:w-auto"
          disabled={loading || suggestions.length === 0}
          data-testid="search-button"
          loading={loading}
        />
        <VoiceSearchButton
          onTranscript={(text) => setValue('query', text)}
          onError={(msg) => setError(msg)}
        />
      </div>
    </form>
  )
}

export default SearchForm
