import { render, screen } from '@testing-library/react'

import WeatherSummary from './index'

jest.mock('@/app/_store/weather')

describe('WeatherSummary', () => {
  it('renders city name and date', () => {
    render(<WeatherSummary />)
    expect(screen.getByText('London, United Kingdom')).toBeInTheDocument()
    expect(screen.getByText(/2025/)).toBeInTheDocument()
  })

  it('renders temperature and weather icon', () => {
    render(<WeatherSummary />)
    expect(screen.getByText('24°')).toBeInTheDocument()
    expect(screen.getByAltText('weather icon')).toBeInTheDocument()
  })

  it('renders feels like, humidity, wind, and precipitation', () => {
    render(<WeatherSummary />)
    expect(screen.getByText('Feels Like')).toBeInTheDocument()
    expect(screen.getByText('25°')).toBeInTheDocument()
    expect(screen.getByText('Humidity')).toBeInTheDocument()
    expect(screen.getByText('82%')).toBeInTheDocument()
    expect(screen.getByText('Wind')).toBeInTheDocument()
    expect(screen.getByText('2 km/h')).toBeInTheDocument()
    expect(screen.getByText('Precipitation')).toBeInTheDocument()
    expect(screen.getByText('0 mm')).toBeInTheDocument()
  })
})
