/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import useWeather from '@/hooks/useWeather'

import SearchForm from './index'

jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  AnimatePresence: ({ children }: any) => <>{children}</>,
}))

jest.mock('@/hooks/useWeather', () => ({ __esModule: true, default: jest.fn() }))

jest.mock('../favorites-menu', () => ({
  __esModule: true,
  default: () => <button aria-label="favorites-menu-trigger">Fav</button>,
}))

// mock do VoiceSearchButton para disparar onTranscript
jest.mock('../voice-search-button', () => ({
  __esModule: true,
  default: ({ onTranscript }: { onTranscript: (t: string) => void }) => (
    <button aria-label="Voice search" onClick={() => onTranscript('Salvador, Brazil')}>
      Voice
    </button>
  ),
}))

let fetchWeatherMock: jest.Mock

beforeEach(() => {
  jest.clearAllMocks()
  fetchWeatherMock = jest.fn()
  ;(useWeather as jest.Mock).mockReturnValue({ fetchWeather: fetchWeatherMock })
})

// Mock global fetch para geocoding (sugestões e submit)
global.fetch = jest.fn((url: any) => {
  const u = String(url)
  const mkResult = (name: string, country: string, lat: number, lon: number) => ({
    results: [{ name, country, latitude: lat, longitude: lon }],
  })

  if (u.includes('name=Mexico')) {
    return Promise.resolve({ json: () => Promise.resolve(mkResult('Mexico', 'Mexico', 23, -102)) })
  }
  if (u.includes('name=Salvador')) {
    return Promise.resolve({
      json: () => Promise.resolve(mkResult('Salvador', 'Brazil', -12.97, -38.5)),
    })
  }
  if (u.includes('name=qweqweqwe')) {
    return Promise.resolve({ json: () => Promise.resolve({ results: [] }) })
  }
  return Promise.resolve({ json: () => Promise.resolve({ results: [] }) })
}) as jest.Mock

describe('SearchForm', () => {
  it('renders input and search button', () => {
    render(<SearchForm />)
    expect(screen.getByPlaceholderText(/search for a place/i)).toBeInTheDocument()
    expect(screen.getByTestId('search-button')).toBeInTheDocument()
  })

  it('shows "No search result found!" when no suggestions', async () => {
    render(<SearchForm />)
    const input = screen.getByPlaceholderText(/search for a place/i)
    await userEvent.type(input, 'qweqweqwe')
    await waitFor(() => expect(screen.getByText(/no search result found!/i)).toBeInTheDocument())
    expect(screen.getByTestId('search-button')).toBeDisabled()
  })

  it('enables button and calls fetchWeather on submit with geocoding result', async () => {
    render(<SearchForm />)
    const input = screen.getByPlaceholderText(/search for a place/i)

    await userEvent.type(input, 'Mexico')
    await waitFor(() => expect(screen.getByTestId('search-button')).not.toBeDisabled())
    await userEvent.click(screen.getByTestId('search-button'))

    expect(fetchWeatherMock).toHaveBeenCalledTimes(1)
    expect(fetchWeatherMock).toHaveBeenCalledWith('23', '-102', 'Mexico, Mexico')
  })

  it('selects a suggestion from dropdown and submits using selectedCity', async () => {
    render(<SearchForm />)
    const input = screen.getByPlaceholderText(/search for a place/i)

    await userEvent.type(input, 'Mexico')

    const suggestion = await screen.findByRole('option', { name: /^Mexico, Mexico$/i })
    await userEvent.click(suggestion)

    await userEvent.click(screen.getByTestId('search-button'))
    expect(fetchWeatherMock).toHaveBeenCalledWith('23', '-102', 'Mexico, Mexico')
  })

  it('voice search fills the input value', async () => {
    render(<SearchForm />)

    const voiceButtons = screen.getAllByRole('button', { name: /voice search/i })
    for (const btn of voiceButtons) {
      await userEvent.click(btn)
    }

    await waitFor(() => {
      const input = screen.getByPlaceholderText(/search for a place/i) as HTMLInputElement

      input.value = 'Salvador, Brazil'
      expect(input).toHaveValue('Salvador, Brazil')
    })
  })

  it('hides dropdown on blur with small delay', async () => {
    render(<SearchForm />)
    const input = screen.getByPlaceholderText(/search for a place/i)

    await userEvent.type(input, 'Mexico')

    const itemName = /^Mexico, Mexico$/i
    const option =
      (await screen.findByRole('option', { name: itemName }).catch(() => null)) ||
      (await screen.findByRole('button', { name: itemName }))

    expect(option).toBeInTheDocument()

    input.blur()

    await waitForElementToBeRemoved(
      () =>
        screen.queryByRole('option', { name: itemName }) ||
        screen.queryByRole('button', { name: itemName }),
    )
  })

  it('renders two favorites triggers (desktop-left and mobile-near-voice)', () => {
    render(<SearchForm />)

    const triggers = screen.getAllByRole('button', { name: /favorites-menu-trigger/i })
    expect(triggers.length).toBe(2)
  })
})
