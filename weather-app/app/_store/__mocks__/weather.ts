import { create } from 'zustand'

import { WeatherStoreState } from '../weather'

export const mockWeather: WeatherStoreState = {
  weather: {
    latitude: -23.5,
    longitude: -46.75,
    current_weather: {
      temperature: 24,
      windspeed: 2.4,
      winddirection: 207,
      weathercode: 0,
      time: '2025-09-10T00:00',
    },
    hourly: {
      time: [
        '2025-09-10T00:00',
        '2025-09-10T01:00',
        '2025-09-10T02:00',
        '2025-09-10T03:00',
        '2025-09-10T04:00',
        '2025-09-10T05:00',
        '2025-09-10T06:00',
      ],
      temperature_2m: [20, 21, 22, 23, 24, 25, 26],
      apparent_temperature: [19, 20, 21, 22, 23, 24, 25],
      relative_humidity_2m: [70, 72, 74, 76, 78, 80, 82],
      precipitation: [0, 0, 0, 0, 0, 0, 0],
      weathercode: [0, 1, 2, 3, 45, 48, 51],
      windspeed_10m: [2, 2.2, 2.4, 2.6, 2.8, 3, 3.2],
      visibility: [10, 10, 10, 10, 10, 10, 10],
      pressure_msl: [1015, 1014, 1013, 1012, 1011, 1010, 1009],
      cloudcover: [20, 25, 30, 35, 40, 45, 50],
      uv_index: [0, 0, 0, 0, 0, 0, 0],
    },
    daily: {
      time: [
        '2025-09-10',
        '2025-09-11',
        '2025-09-12',
        '2025-09-13',
        '2025-09-14',
        '2025-09-15',
        '2025-09-16',
      ],
      temperature_2m_max: [25, 26, 27, 28, 29, 30, 31],
      temperature_2m_min: [15, 16, 17, 18, 19, 20, 21],
      weathercode: [0, 1, 2, 3, 45, 48, 51],
      precipitation_sum: [0, 0, 0, 0, 0, 0, 0],
    },
  },
  cityName: 'London, United Kingdom',
  units: {
    temperature: 'celsius',
    wind: 'kmh',
    precipitation: 'mm',
  },
  setWeather: jest.fn(),
  setUnits: jest.fn(),
}

export const useWeatherStore = create(() => mockWeather)
