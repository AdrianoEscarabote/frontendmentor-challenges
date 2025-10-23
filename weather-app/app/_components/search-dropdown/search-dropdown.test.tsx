import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchDropdown, { CitySuggestion } from './index'

describe('SearchDropdown', () => {
  const suggestions: CitySuggestion[] = [
    { name: 'London, United Kingdom', latitude: 51.5074, longitude: -0.1278 },
    { name: 'São Paulo, Brazil', latitude: -23.5505, longitude: -46.6333 },
  ]
  const onSelect = jest.fn()

  it('shows loading indicator when loading', () => {
    render(<SearchDropdown loading suggestions={[]} onSelect={onSelect} />)
    expect(screen.getByText('Search in progress')).toBeInTheDocument()
    expect(screen.getByAltText('Loading icon')).toHaveAttribute('src', '/images/icon-loading.svg')
  })

  it('shows suggestions when not loading', () => {
    render(<SearchDropdown loading={false} suggestions={suggestions} onSelect={onSelect} />)
    expect(screen.getByText('London, United Kingdom')).toBeInTheDocument()
    expect(screen.getByText('São Paulo, Brazil')).toBeInTheDocument()
  })

  it('calls onSelect when a suggestion is clicked', async () => {
    render(<SearchDropdown loading={false} suggestions={suggestions} onSelect={onSelect} />)
    await userEvent.click(screen.getByText('London, United Kingdom'))
    expect(onSelect).toHaveBeenCalledWith(suggestions[0])
  })

  it('shows "No results" when not loading and suggestions is empty', () => {
    render(<SearchDropdown loading={false} suggestions={[]} onSelect={onSelect} />)
    expect(screen.getByText('No results')).toBeInTheDocument()
  })
})
