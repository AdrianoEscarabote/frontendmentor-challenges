import { fireEvent, render, screen } from '@testing-library/react'

import PrimaryButton from './index'

describe('PrimaryButton', () => {
  it('renders with default text', () => {
    render(<PrimaryButton />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('accepts and applies custom props', () => {
    render(<PrimaryButton data-testid="custom-btn" disabled />)
    const btn = screen.getByTestId('custom-btn')
    expect(btn).toBeDisabled()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<PrimaryButton onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button', { name: /search/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
