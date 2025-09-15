import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ModeToggle } from './mode-toggle'

jest.mock('next-themes', () => ({
  useTheme: () => ({
    setTheme: jest.fn(),
  }),
}))

describe('ModeToggle', () => {
  it('renders the toggle button', () => {
    render(<ModeToggle />)
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument()
    expect(screen.getByTestId('lucide-sun')).toBeInTheDocument()
    expect(screen.getByTestId('lucide-moon')).toBeInTheDocument()
  })

  it('shows dropdown menu items when clicked', async () => {
    render(<ModeToggle />)
    await userEvent.click(screen.getByRole('button', { name: /toggle theme/i }))
    expect(screen.getByText('Light')).toBeInTheDocument()
    expect(screen.getByText('Dark')).toBeInTheDocument()
    expect(screen.getByText('System')).toBeInTheDocument()
  })

  it('calls setTheme when a menu item is clicked', async () => {
    const setTheme = jest.fn()
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    jest.spyOn(require('next-themes'), 'useTheme').mockReturnValue({ setTheme })

    render(<ModeToggle />)

    await userEvent.click(screen.getByRole('button', { name: /toggle theme/i }))
    const darkOption = screen.getByText('Dark')
    await userEvent.click(darkOption)
    expect(setTheme).toHaveBeenCalledWith('dark')

    await userEvent.click(screen.getByRole('button', { name: /toggle theme/i }))
    const lightOption = screen.getByText('Light')
    await userEvent.click(lightOption)
    expect(setTheme).toHaveBeenCalledWith('light')

    await userEvent.click(screen.getByRole('button', { name: /toggle theme/i }))
    const systemOption = screen.getByText('System')
    await userEvent.click(systemOption)
    expect(setTheme).toHaveBeenCalledWith('system')
  })
})
