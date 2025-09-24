import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import { FloatingChatButton } from './index'

jest.mock('@/app/_store/weather')

beforeAll(() => {
  Element.prototype.scrollIntoView = jest.fn()
})

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: async () => ({ answer: 'No rain expected in the next hours.' }),
    } as Response),
  )
})

afterEach(() => {
  jest.resetAllMocks()
})

describe('FloatingChatButton', () => {
  it('opens the dialog when clicking the floating button', async () => {
    render(<FloatingChatButton />)
    const openBtn = screen.getByRole('button', { name: /open weather chat/i })
    await userEvent.click(openBtn)
    expect(await screen.findByTestId('dialog-title')).toBeInTheDocument()
  })

  it('sends a question and shows the AI answer', async () => {
    render(<FloatingChatButton />)

    await userEvent.click(screen.getByRole('button', { name: /open weather chat/i }))
    const input = await screen.findByPlaceholderText(/ask about the weather/i)

    await userEvent.type(input, 'Do I need an umbrella today?{enter}')

    expect(await screen.findByText(/do i need an umbrella today\?/i)).toBeInTheDocument()

    await waitFor(() =>
      expect(screen.getByText(/no rain expected in the next hours\./i)).toBeInTheDocument(),
    )

    expect(global.fetch).toHaveBeenCalledWith(
      '/api/chat',
      expect.objectContaining({ method: 'POST' }),
    )
  })

  it('shows an error message when the API returns an error', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 500,
        json: async () => ({}),
      } as Response),
    )

    render(<FloatingChatButton />)
    await userEvent.click(screen.getByRole('button', { name: /open weather chat/i }))
    const input = await screen.findByPlaceholderText(/ask about the weather/i)

    await userEvent.type(input, 'Will it rain?{enter}')

    expect(
      await screen.findByText(/sorry, an error occurred\. please try again\./i),
    ).toBeInTheDocument()
  })

  it('disables input while waiting for the response', async () => {
    let resolveFetch: ((value: unknown) => void) | undefined

    global.fetch = jest.fn(
      () =>
        new Promise((res) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          resolveFetch = (v) => res(v as any)
        }),
    )

    render(<FloatingChatButton />)
    await userEvent.click(screen.getByRole('button', { name: /open weather chat/i }))
    const input = await screen.findByPlaceholderText(/ask about the weather/i)

    await userEvent.type(input, 'Is it windy?{enter}')

    expect(input).toBeDisabled()

    resolveFetch?.({
      ok: true,
      json: async () => ({ answer: 'Winds remain mild.' }),
    })

    await waitFor(() => expect(input).not.toBeDisabled())
    expect(screen.getByText(/winds remain mild\./i)).toBeInTheDocument()
  })

  it('does not send when the input is empty', async () => {
    render(<FloatingChatButton />)
    await userEvent.click(screen.getByRole('button', { name: /open weather chat/i }))
    const input = await screen.findByPlaceholderText(/ask about the weather/i)

    await userEvent.type(input, '{enter}')
    expect(global.fetch).not.toHaveBeenCalled()
  })
})
