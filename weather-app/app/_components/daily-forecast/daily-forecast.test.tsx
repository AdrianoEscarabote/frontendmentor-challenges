import { render, screen } from '@testing-library/react'

import DailyForecast from './index'

jest.mock('@/app/_store/weather')

describe('DailyForecast', () => {
  it('renders daily forecast section', () => {
    render(<DailyForecast />)
    expect(screen.getByText(/Daily forecast/i)).toBeInTheDocument()
  })

  it('renders 7 daily forecast cards', () => {
    render(<DailyForecast />)
    const cards = screen.getAllByText(/°/)
    expect(cards.length).toBe(14)
  })

  it('renders correct weekday labels', () => {
    render(<DailyForecast />)
    expect(screen.getByText('Wed')).toBeInTheDocument()
    expect(screen.getByText('Thu')).toBeInTheDocument()
    expect(screen.getByText('Fri')).toBeInTheDocument()
    expect(screen.getByText('Sat')).toBeInTheDocument()
    expect(screen.getByText('Sun')).toBeInTheDocument()
    expect(screen.getByText('Mon')).toBeInTheDocument()
    expect(screen.getByText('Tue')).toBeInTheDocument()
  })
})
