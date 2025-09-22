import { create } from 'zustand'

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
  setUnits: (units: Partial<WeatherStoreState['units']>) => void // <-- CORRIGIDO
}

export const useWeatherStore = create<WeatherStoreState>((set) => ({
  weather: null,
  cityName: null,
  units: {
    temperature: 'celsius',
    wind: 'kmh',
    precipitation: 'mm',
  },
  setWeather: (data, cityName) => set({ weather: data, cityName }),
  setUnits: (newUnits: Partial<WeatherStoreState['units']>) =>
    set((state) => ({
      ...state,
      units: { ...state.units, ...newUnits },
    })),
}))
