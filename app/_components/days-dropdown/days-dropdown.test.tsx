import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DaysDropdown from './index'

describe('DaysDropdown', () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const onChange = jest.fn()

  it('renders the selected day', () => {
    render(<DaysDropdown days={days} selectedIdx={2} onChange={onChange} />)
    expect(screen.getByText('Wednesday')).toBeInTheDocument()
  })

  it('shows all days in the dropdown when triggered', async () => {
    render(<DaysDropdown days={days} selectedIdx={0} onChange={onChange} />, {
      container: document.body,
    })

    userEvent.click(screen.getByText('Monday'))

    for (const day of days) {
      expect(await screen.findByText(day)).toBeInTheDocument()
    }
  })

  it('calls onChange with correct index when a day is clicked', async () => {
    render(<DaysDropdown days={days} selectedIdx={0} onChange={onChange} />, {
      container: document.body,
    })

    await userEvent.click(screen.getByText('Monday'))

    const fridayOption = await screen.findByText('Friday')

    await userEvent.click(fridayOption)

    expect(onChange).toHaveBeenCalledWith(4)
  })

  it('highlights the selected day in the dropdown', async () => {
    render(<DaysDropdown days={days} selectedIdx={5} onChange={onChange} />)

    await userEvent.click(screen.getByText('Saturday'))

    const selectedItem = await screen.findAllByText('Saturday')
    const dropdownItem = selectedItem[1]

    expect(dropdownItem).toHaveClass('bg-neutral-700')
  })
})
