const HourlyForecastSkeleton = () => (
  <section
    className="border-border flex max-h-[43.3125rem] w-full animate-pulse flex-col gap-4 rounded-[0.75rem] border bg-white md:max-w-[24rem] dark:border-none dark:bg-neutral-800"
    aria-label="Loading hourly weather forecast"
  >
    <div className="flex items-center justify-between px-6 pt-6">
      <div className="h-6 w-32 rounded bg-neutral-700" />
      <div className="h-10 w-24 rounded bg-neutral-700" />
    </div>
    <ul className="hourly-scroll flex flex-col gap-4 overflow-y-scroll px-6 pb-6">
      {Array.from({ length: 8 }).map((_, idx) => (
        <li
          key={idx}
          className="border-border bg-card flex min-h-[3.75rem] items-center justify-between rounded-[0.5rem] border px-4 py-2 dark:border-neutral-600 dark:bg-neutral-700"
        >
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-neutral-700" />
            <div className="h-5 w-16 rounded bg-neutral-700" />
          </div>
          <div className="h-5 w-10 rounded bg-neutral-700" />
        </li>
      ))}
    </ul>
  </section>
)

export default HourlyForecastSkeleton
