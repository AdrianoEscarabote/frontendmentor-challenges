const WeatherSummarySkeleton = () => (
  <section className="flex max-w-[50rem] animate-pulse flex-col gap-5 sm:gap-8">
    <div className="relative flex items-center justify-center rounded-[1.25rem] bg-neutral-800 px-6 py-36 md:min-h-[17.5rem]">
      <div className="flex flex-col items-center">
        <div className="mb-2 flex gap-2">
          <span
            className="h-3 w-3 animate-bounce rounded-full bg-neutral-200"
            style={{ animationDelay: '0ms' }}
          />
          <span
            className="h-3 w-3 animate-bounce rounded-full bg-neutral-200"
            style={{ animationDelay: '150ms' }}
          />
          <span
            className="h-3 w-3 animate-bounce rounded-full bg-neutral-200"
            style={{ animationDelay: '300ms' }}
          />
        </div>
        <span className="text-preset-6 text-neutral-200">Loading...</span>
      </div>
    </div>
    <div className="grid grid-cols-2 items-center gap-4 py-6 sm:flex-col md:grid-cols-4 md:grid-rows-2 md:gap-6 md:py-0 dark:bg-neutral-900">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="bg-card flex w-full flex-col gap-6 rounded-[0.75rem] p-5 dark:bg-neutral-800"
        >
          <div className="h-6 w-24 rounded bg-neutral-700" />
          <div className="h-8 w-16 rounded bg-neutral-700" />
        </div>
      ))}
    </div>
  </section>
)
export default WeatherSummarySkeleton
