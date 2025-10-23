import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export type SavedLocation = {
  id: string // `${lat},${lon}`
  name: string
  latitude: number
  longitude: number
  createdAt: number
}

type FavoritesState = {
  favorites: SavedLocation[]
  addFavorite: (loc: Omit<SavedLocation, 'id' | 'createdAt'>) => void
  removeFavorite: (id: string) => void
  toggleFavorite: (loc: { name: string; latitude: number; longitude: number }) => void
  isFavorite: (id: string) => boolean
  clear: () => void
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (loc) =>
        set((state) => {
          const id = `${loc.latitude},${loc.longitude}`
          if (state.favorites.some((f) => f.id === id)) return state
          return {
            favorites: [
              {
                id,
                name: loc.name,
                latitude: loc.latitude,
                longitude: loc.longitude,
                createdAt: Date.now(),
              },
              ...state.favorites,
            ],
          }
        }),
      removeFavorite: (id) =>
        set((state) => ({ favorites: state.favorites.filter((f) => f.id !== id) })),
      toggleFavorite: (loc) => {
        const id = `${loc.latitude},${loc.longitude}`
        if (get().isFavorite(id)) {
          get().removeFavorite(id)
        } else {
          get().addFavorite(loc)
        }
      },
      isFavorite: (id) => get().favorites.some((f) => f.id === id),
      clear: () => set({ favorites: [] }),
    }),
    {
      name: 'weather-favorites',
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ favorites: s.favorites }),
    },
  ),
)
