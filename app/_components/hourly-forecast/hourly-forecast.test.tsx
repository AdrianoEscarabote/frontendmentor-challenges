import { render, screen } from '@testing-library/react'

import HourlyForecast from './index'

jest.mock('@/app/_store/weather')

beforeAll(() => {
  Element.prototype.scrollTo = jest.fn()
})

describe('HourlyForecast', () => {
  it('renders the hourly forecast section', async () => {
    render(<HourlyForecast />)
    const element = await screen.findByText('Hourly forecast')
    expect(element).toBeInTheDocument()
  })

  it('renders 7 hourly forecast cards for the first day', () => {
    render(<HourlyForecast />)
    const temps = screen.getAllByText(/°/)
    expect(temps.length).toBe(7)
  })

  it('renders correct hour labels', () => {
    render(<HourlyForecast />)
    expect(screen.getByText('12 AM')).toBeInTheDocument()
    expect(screen.getByText('1 AM')).toBeInTheDocument()
    expect(screen.getByText('2 AM')).toBeInTheDocument()
    expect(screen.getByText('3 AM')).toBeInTheDocument()
    expect(screen.getByText('4 AM')).toBeInTheDocument()
    expect(screen.getByText('5 AM')).toBeInTheDocument()
    expect(screen.getByText('6 AM')).toBeInTheDocument()
  })
})
