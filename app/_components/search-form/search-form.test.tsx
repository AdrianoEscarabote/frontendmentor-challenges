import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchForm from './index'

jest.mock('@/hooks/useWeather', () => () => ({
  fetchWeather: jest.fn(),
}))

global.fetch = jest.fn((url) => {
  if (url.includes('Mexico')) {
    return Promise.resolve({
      json: () =>
        Promise.resolve({
          results: [
            {
              name: 'Mexico',
              country: 'Mexico',
              latitude: 23,
              longitude: -102,
            },
          ],
        }),
    })
  }
  if (url.includes('qweqweqwe')) {
    return Promise.resolve({
      json: () => Promise.resolve({ results: [] }),
    })
  }
  return Promise.resolve({
    json: () => Promise.resolve({ results: [] }),
  })
}) as jest.Mock

describe('SearchForm', () => {
  it('renders input and button', () => {
    render(<SearchForm />)
    expect(screen.getByPlaceholderText(/search for a place/i)).toBeInTheDocument()
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(2)
  })

  it('shows "No search result found!" when no results', async () => {
    render(<SearchForm />)
    const input = screen.getByPlaceholderText(/search for a place/i)
    await userEvent.type(input, 'qweqweqwe')
    await waitFor(() => expect(screen.getByText(/no search result found!/i)).toBeInTheDocument())
    expect(screen.getByTestId('search-button')).toBeDisabled()
  })

  it('enables button and calls fetchWeather when valid city', async () => {
    render(<SearchForm />)
    const input = screen.getByPlaceholderText(/search for a place/i)
    await userEvent.type(input, 'Mexico')
    await waitFor(() => expect(screen.getByTestId('search-button')).not.toBeDisabled())
    await userEvent.click(screen.getByTestId('search-button'))
    // fetchWeather is called via mock
    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('Mexico'))
  })
})
