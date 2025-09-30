import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import BootPreloader from './index'

describe('BootPreloader', () => {
  it('renders loading animation and texts', () => {
    render(<BootPreloader onSkip={() => {}} />)
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByText(/Requesting location access/i)).toBeInTheDocument()
    expect(screen.getByText(/We need your location/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Use default location/i })).toBeInTheDocument()
    // SVG and animated elements
    expect(screen.getByLabelText(/Initializing app/i)).toBeInTheDocument()
  })

  it('calls onSkip when fallback button is clicked', async () => {
    const onSkip = jest.fn()
    render(<BootPreloader onSkip={onSkip} />)
    const btn = screen.getByRole('button', { name: /Use default location/i })
    await userEvent.click(btn)
    expect(onSkip).toHaveBeenCalledTimes(1)
  })

  it('is accessible with aria attributes', () => {
    render(<BootPreloader onSkip={() => {}} />)
    const section = screen.getByRole('status')
    expect(section).toHaveAttribute('aria-live', 'polite')
    expect(section).toHaveAttribute('aria-label', expect.stringMatching(/Initializing app/i))
  })
})
