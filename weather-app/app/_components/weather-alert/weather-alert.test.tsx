/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import WeatherAlert from './index'

let mockState: any
jest.mock('@/app/_store/weather', () => ({
  useWeatherStore: (sel: any) => sel(mockState),
}))

const baseWeather = {
  current_weather: {
    time: '2025-09-23T12:00',
    temperature: 22,
    windspeed: 10,
    weathercode: 2,
  },
  daily: {
    temperature_2m_max: [25],
    temperature_2m_min: [15],
  },
  hourly: {
    time: ['2025-09-23T11:00', '2025-09-23T12:00', '2025-09-23T13:00', '2025-09-23T14:00'],
    precipitation: [0, 0, 0, 0],
    visibility: [10000, 10000, 10000, 10000],
  },
}

describe('WeatherAlert', () => {
  beforeEach(() => {
    mockState = { weather: JSON.parse(JSON.stringify(baseWeather)) }
  })

  it('renders nothing when there are no alerts', () => {
    const { container } = render(<WeatherAlert />)
    expect(container.firstChild).toBeNull()
  })

  it('shows rain alert when there is precipitation in the next 3h', async () => {
    mockState.weather.hourly.precipitation = [0, 0.5, 0, 0]
    render(<WeatherAlert />)
    expect(await screen.findByText('Rain Expected')).toBeInTheDocument()
  })

  it('shows heat alert when temperature is very high', async () => {
    mockState.weather.current_weather.temperature = 36
    render(<WeatherAlert />)
    expect(await screen.findByText('Extreme Heat')).toBeInTheDocument()
  })

  it('shows cold alert when temperature is very low', async () => {
    mockState.weather.current_weather.temperature = 2
    mockState.weather.daily.temperature_2m_min = [0]
    render(<WeatherAlert />)
    expect(await screen.findByText('Severe Cold')).toBeInTheDocument()
  })

  it('shows strong wind alert when windspeed > 25 km/h', async () => {
    mockState.weather.current_weather.windspeed = 30
    render(<WeatherAlert />)
    expect(await screen.findByText('Strong Winds')).toBeInTheDocument()
  })

  it('shows low visibility alert when < 5 km', async () => {
    mockState.weather.hourly.visibility[1] = 3000
    render(<WeatherAlert />)
    expect(await screen.findByText('Low Visibility')).toBeInTheDocument()
  })

  it('allows dismissing an alert', async () => {
    mockState.weather.current_weather.windspeed = 30
    render(<WeatherAlert />)

    const title = await screen.findByText('Strong Winds')

    const closeBtn = screen.getByRole('button')
    await userEvent.click(closeBtn)

    expect(title).not.toBeInTheDocument()
  })
})
