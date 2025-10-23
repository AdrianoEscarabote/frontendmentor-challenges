import { render, screen } from '@testing-library/react'

import Header from './index'

describe('Header', () => {
  it('renders the main heading (sr-only)', () => {
    render(<Header />)
    expect(
      screen.getByText('Weather App - Weather forecast and meteorological conditions'),
    ).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Header />)
    expect(screen.getByText('How’s the sky looking today?')).toBeInTheDocument()
  })

  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })

  it('renders the UnitDropdown', () => {
    render(<Header />)
    expect(screen.getByText(/Units/i)).toBeInTheDocument()
  })

  it('renders the SearchForm', () => {
    render(<Header />)
    expect(screen.getByPlaceholderText(/Search for a place/i)).toBeInTheDocument()
  })
})
