import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import UnitDropdown from './index'

function renderWithPortal(ui: React.ReactElement) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  return render(ui, { container })
}

describe('UnitDropdown', () => {
  it('renders trigger button', () => {
    render(<UnitDropdown />)
    expect(screen.getByRole('button', { name: /units/i })).toBeInTheDocument()
  })

  it('shows dropdown content when trigger is clicked', async () => {
    renderWithPortal(<UnitDropdown />)

    const trigger = screen.getByTestId('unit-dropdown-trigger')

    await userEvent.click(trigger)

    expect(await screen.findByText(/switch to imperial/i)).toBeInTheDocument()
    expect(await screen.findByText(/temperature/i)).toBeInTheDocument()
    expect(await screen.findByText(/wind speed/i)).toBeInTheDocument()
    expect(await screen.findByText(/precipitation/i)).toBeInTheDocument()
  })

  it('toggles unit system and updates options', async () => {
    renderWithPortal(<UnitDropdown />)
    const trigger = screen.getByTestId('unit-dropdown-trigger')
    await userEvent.click(trigger)

    const switchUnit = await screen.findByTestId('unit-system-toggle')
    await userEvent.click(switchUnit)

    await userEvent.click(trigger)

    expect(await screen.findByText(/switch to metric/i)).toBeInTheDocument()
    expect(await screen.findByText(/fahrenheit/i)).toBeInTheDocument()
    expect(await screen.findByText(/mph/i)).toBeInTheDocument()
    expect(await screen.findByText(/inches/i)).toBeInTheDocument()
  })

  it('selects temperature option', async () => {
    renderWithPortal(<UnitDropdown />)

    const trigger = screen.getByTestId('unit-dropdown-trigger')
    await userEvent.click(trigger)

    const fahrenheitOption = await screen.findByText(/fahrenheit/i)
    await userEvent.click(fahrenheitOption)

    expect(fahrenheitOption).toHaveAttribute('aria-checked', 'true')
  })

  it('selects wind speed option', async () => {
    renderWithPortal(<UnitDropdown />)

    const trigger = screen.getByTestId('unit-dropdown-trigger')
    await userEvent.click(trigger)

    const mphOption = await screen.findByText(/mph/i)
    await userEvent.click(mphOption)

    expect(mphOption).toHaveAttribute('aria-checked', 'true')
  })

  it('selects precipitation option', async () => {
    renderWithPortal(<UnitDropdown />)

    const trigger = screen.getByTestId('unit-dropdown-trigger')
    await userEvent.click(trigger)

    const inchesOption = await screen.findByText(/inches/i)
    await userEvent.click(inchesOption)

    expect(inchesOption).toHaveAttribute('aria-checked', 'true')
  })
})
