import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export type WeatherApiResponse = {
  latitude: number
  longitude: number
  current_weather: {
    temperature: number
    windspeed: number
    winddirection: number
    weathercode: number
    time: string
  }
  hourly: {
    time: string[]
    temperature_2m: number[]
    apparent_temperature: number[]
    relative_humidity_2m: number[]
    precipitation: number[]
    weathercode: number[]
    windspeed_10m: number[]
    uv_index: number[]
    visibility: number[]
    pressure_msl: number[]
    cloudcover: number[]
  }
  daily: {
    time: string[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    weathercode: number[]
    precipitation_sum: number[]
  }
}

export interface WeatherStoreState {
  weather: WeatherApiResponse | null
  cityName: string | null
  units: {
    temperature: 'celsius' | 'fahrenheit'
    wind: 'kmh' | 'mph'
    precipitation: 'mm' | 'inch'
  }
  setWeather: (data: WeatherApiResponse, cityName?: string) => void
  setUnits: (units: Partial<WeatherStoreState['units']>) => void
}

type UnitsV0 = {
  temperature?: 'celsius' | 'fahrenheit'
  wind?: 'kmh' | 'mph'
  precipitation?: 'mm' | 'inch'
}

type PersistedV0 = {
  state?: { units?: UnitsV0 }
  version?: number
}

type PersistedV1 = {
  state: { units: WeatherStoreState['units'] }
  version: number
}

export const useWeatherStore = create<WeatherStoreState>()(
  persist(
    (set) => ({
      weather: null,
      cityName: null,
      units: { temperature: 'celsius', wind: 'kmh', precipitation: 'mm' },
      setWeather: (data, cityName) => set({ weather: data, cityName }),
      setUnits: (newUnits) => set((state) => ({ units: { ...state.units, ...newUnits } })),
    }),
    {
      name: 'weather-preferences',
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ units: state.units }),
      migrate: (persisted: unknown): PersistedV1 => {
        const data = (persisted as PersistedV0) ?? {}
        const u0 = data.state?.units ?? {}

        const units: WeatherStoreState['units'] = {
          temperature: u0.temperature === 'fahrenheit' ? 'fahrenheit' : 'celsius',
          wind: u0.wind === 'mph' ? 'mph' : 'kmh',
          precipitation: u0.precipitation === 'inch' ? 'inch' : 'mm',
        }

        return { state: { units }, version: 1 }
      },
    },
  ),
)
