'use client'

import { ChevronDown, Star, Trash2 } from 'lucide-react'
import { useState } from 'react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/app/_components/ui/dropdown-menu'
import { useFavoritesStore } from '@/app/_store/favorites'
import useWeather from '@/hooks/useWeather'

export default function FavoritesMenu() {
  const { fetchWeather } = useWeather()
  const { favorites, removeFavorite } = useFavoritesStore()
  const [open, setOpen] = useState(false)

  const loadLoc = async (lat: number, lon: number, name: string) => {
    await fetchWeather(String(lat), String(lon), name)
    setOpen(false)
  }

  const count = favorites.length
  const countLabel = count > 9 ? '9+' : String(count)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="group relative h-14 min-w-[3.5rem] shrink-0 cursor-pointer rounded-md border border-neutral-700 bg-neutral-900 px-3 text-white outline-none hover:bg-neutral-800 active:scale-[0.99] dark:bg-neutral-800 dark:hover:bg-neutral-700"
          aria-label="Open favorites"
          title="Favorites"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls="favorites-menu"
          data-state={open ? 'open' : 'closed'}
        >
          {count > 0 && (
            <span className="pointer-events-none absolute -top-1.5 -right-1.5 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-blue-500 px-1 text-[0.6875rem] leading-none font-semibold text-white">
              {countLabel}
            </span>
          )}

          <span className="flex items-center justify-center gap-2 md:justify-normal">
            <Star className="h-5 w-5" />
            <span className="hidden sm:inline">Favorites</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform data-[state=open]:rotate-180 sm:opacity-80 ${open ? 'rotate-180' : ''}`}
            />
          </span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        id="favorites-menu"
        side="bottom"
        sideOffset={8}
        className="z-[80] w-[17.5rem] rounded-lg border border-neutral-700 bg-neutral-900 p-2 text-white shadow-xl dark:bg-neutral-800"
      >
        {favorites.length === 0 ? (
          <div className="px-2 py-3 text-sm text-neutral-300">
            No favorites yet
            <div className="mt-1 text-xs text-neutral-400">
              Use the star on the weather card to save a place.
            </div>
          </div>
        ) : (
          <ul className="max-h-80 space-y-1 overflow-auto">
            {favorites.map((f) => (
              <li
                key={f.id}
                className="group flex items-center justify-between gap-2 rounded-md px-1 py-1"
              >
                <button
                  className="w-full cursor-pointer truncate rounded p-1.5 text-left text-sm hover:bg-neutral-700"
                  onClick={() => loadLoc(f.latitude, f.longitude, f.name)}
                >
                  {f.name}
                </button>
                <button
                  className="cursor-pointer rounded p-2 text-neutral-300 transition-colors hover:bg-neutral-700"
                  onClick={() => removeFavorite(f.id)}
                  aria-label={`Remove ${f.name}`}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
