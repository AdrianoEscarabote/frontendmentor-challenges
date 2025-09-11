import { fireEvent, render, screen } from '@testing-library/react'

import ApiError from './index'

describe('ApiError', () => {
  it('renders error icon, title, message and retry button', () => {
    render(<ApiError />)
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument()
    expect(screen.getByText(/We couldn’t connect to the server/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Retry/i })).toBeInTheDocument()
  })

  it('renders Ban and RefreshCw icons', () => {
    render(<ApiError />)
    expect(screen.getByTestId('ban-icon')).toBeInTheDocument()
    expect(screen.getByTestId('refreshcw-icon')).toBeInTheDocument()
  })

  it('calls a function when Retry button is clicked (if provided)', () => {
    const onRetry = jest.fn()
    render(
      <article>
        <button onClick={onRetry}>Retry</button>
      </article>,
    )
    fireEvent.click(screen.getByRole('button', { name: /Retry/i }))
    expect(onRetry).toHaveBeenCalledTimes(1)
  })
})
