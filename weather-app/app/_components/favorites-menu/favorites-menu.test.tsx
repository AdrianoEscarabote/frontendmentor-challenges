import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { useFavoritesStore } from '@/app/_store/favorites'
import useWeather from '@/hooks/useWeather'

import FavoritesMenu from './index'

jest.mock('@/hooks/useWeather', () => ({
  __esModule: true,
  default: jest.fn(),
}))

function resetStore() {
  useFavoritesStore.setState({ favorites: [] })
  try {
    localStorage.removeItem('weather-favorites')
  } catch {}
}

describe('FavoritesMenu', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    resetStore()
    ;(useWeather as jest.Mock).mockReturnValue({ fetchWeather: jest.fn() })
  })

  it('renders the button and shows correct aria state when opened', async () => {
    render(<FavoritesMenu />)

    const trigger = screen.getByRole('button', { name: /favorites/i })
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    expect(await screen.findByText(/no favorites yet/i)).toBeInTheDocument()
  })

  it('shows badge with favorites count', () => {
    useFavoritesStore.setState({
      favorites: [
        { id: '1,1', name: 'Place A', latitude: 1, longitude: 1, createdAt: Date.now() },
        { id: '2,2', name: 'Place B', latitude: 2, longitude: 2, createdAt: Date.now() },
      ],
    })

    render(<FavoritesMenu />)
    const trigger = screen.getByRole('button', { name: /favorites/i })
    const scoped = within(trigger)
    expect(scoped.getByText('2')).toBeInTheDocument()
  })

  it('calls fetchWeather with lat, lon and name when selecting a favorite', async () => {
    const fetchWeatherMock = jest.fn()
    ;(useWeather as jest.Mock).mockReturnValue({ fetchWeather: fetchWeatherMock })

    useFavoritesStore.setState({
      favorites: [
        {
          id: '10,20',
          name: 'Rio de Janeiro, Brazil',
          latitude: 10,
          longitude: 20,
          createdAt: Date.now(),
        },
      ],
    })

    render(<FavoritesMenu />)

    await userEvent.click(screen.getByRole('button', { name: /favorites/i }))

    const itemBtn = screen.getByRole('button', {
      name: /^Rio de Janeiro, Brazil$/i,
    })
    await userEvent.click(itemBtn)

    expect(fetchWeatherMock).toHaveBeenCalledTimes(1)
    expect(fetchWeatherMock).toHaveBeenCalledWith('10', '20', 'Rio de Janeiro, Brazil')
  })

  it('removes a favorite when clicking the remove button', async () => {
    const removeSpy = jest.fn()
    useFavoritesStore.setState({
      favorites: [
        { id: '30,40', name: 'London, UK', latitude: 30, longitude: 40, createdAt: Date.now() },
      ],
      removeFavorite: removeSpy,
    })

    render(<FavoritesMenu />)

    await userEvent.click(screen.getByRole('button', { name: /favorites/i }))
    const removeBtn = screen.getByRole('button', { name: /remove london, uk/i })
    await userEvent.click(removeBtn)

    expect(removeSpy).toHaveBeenCalledTimes(1)
    expect(removeSpy).toHaveBeenCalledWith('30,40')
  })
})
