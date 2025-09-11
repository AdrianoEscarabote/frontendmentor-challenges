import { Ban, RefreshCw } from 'lucide-react'

const ApiError = () => {
  return (
    <article className="mx-auto flex w-full max-w-[600px] flex-col items-center justify-center gap-6 pt-10 text-center">
      <Ban className="h-[50px] w-[42px] text-neutral-300" data-testid="ban-icon" />
      <h2 className="text-preset-2 text-neutral-0">Something went wrong</h2>
      <p className="text-preset-5-medium text-neutral-200">
        We couldn’t connect to the server (API error). Please try again in a few moments.
      </p>
      <button className="text-neutral-0 flex gap-2.5 rounded-[8px] bg-neutral-800 px-3 py-4">
        <RefreshCw data-testid="refreshcw-icon" />
        Retry
      </button>
    </article>
  )
}

export default ApiError
