const DailyForecastSkeleton = () => (
  <section className="mx-auto w-full max-w-[50rem]" aria-label="Loading daily weather forecast">
    <div className="flex w-full max-w-[800px] flex-col gap-5">
      <h3 className="text-preset-5 dark:text-neutral-0 text-neutral-900">Daily forecast</h3>
      <ul className="grid animate-pulse grid-cols-3 grid-rows-3 gap-4 sm:grid-cols-4 sm:grid-rows-2 md:flex">
        {Array.from({ length: 7 }).map((_, idx) => (
          <li
            key={idx}
            className="bg-card border-border flex min-h-[165px] w-full max-w-[150px] flex-col items-center justify-between gap-4 rounded-[12px] border px-2.5 py-4 sm:flex md:max-w-[100.5696px] dark:border-neutral-600 dark:bg-neutral-800"
          >
            <div className="h-5 w-8 rounded bg-neutral-700" />
            <div className="h-12 w-12 rounded-full bg-neutral-700" />
            <div className="flex w-full items-center justify-between gap-2">
              <div className="h-5 w-8 rounded bg-neutral-700" />
              <div className="h-5 w-8 rounded bg-neutral-700" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default DailyForecastSkeleton
