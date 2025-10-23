import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

export type CitySuggestion = {
  name: string
  latitude: number
  longitude: number
}

export type SearchDropdownProps = {
  loading?: boolean
  suggestions?: CitySuggestion[]
  onSelect: (city: CitySuggestion) => void
}

const SearchDropdown = ({ loading, suggestions = [], onSelect }: SearchDropdownProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="z-50 flex w-full flex-col gap-1 rounded-[0.75rem] border border-neutral-700 bg-neutral-900 p-2 transition-all duration-200 md:max-w-[32.875rem] dark:bg-neutral-800"
        role="listbox"
        aria-label="City suggestions"
      >
        {loading && (
          <p
            className="text-preset-7 text-neutral-0 flex items-center gap-2.5 px-2 py-2.5"
            role="status"
            aria-live="polite"
          >
            <Image
              src={'/images/icon-loading.svg'}
              className="animate-spin"
              alt="Loading icon"
              width={16}
              height={19}
            />
            Search in progress
          </p>
        )}
        {!loading && suggestions.length > 0 && (
          <div className="flex flex-col gap-1">
            {suggestions.map((city, idx) => (
              <button
                key={idx}
                className={`text-neutral-0 text-preset-7 w-full cursor-pointer rounded-[0.5rem] px-2 py-2.5 text-left hover:bg-neutral-700 ${idx === 0 ? 'border border-neutral-700 bg-neutral-800 dark:border-neutral-600 dark:bg-neutral-700' : ''}`}
                type="button"
                role="option"
                aria-selected={false}
                onMouseDown={() => onSelect(city)}
                tabIndex={0}
              >
                {city.name}
              </button>
            ))}
          </div>
        )}
        {!loading && suggestions.length === 0 && (
          <div>
            <span
              className="text-preset-7 w-full cursor-pointer px-2 py-2.5 text-left text-neutral-200"
              role="alert"
              aria-live="assertive"
            >
              No results
            </span>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default SearchDropdown
