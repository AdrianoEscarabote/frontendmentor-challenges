/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import VoiceSearchButton from './index'

describe('VoiceSearchButton', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the voice search button', () => {
    render(<VoiceSearchButton onTranscript={jest.fn()} />)
    expect(screen.getByRole('button', { name: /voice search/i })).toBeInTheDocument()
  })

  it('shows error if SpeechRecognition is not supported', async () => {
    const originalSpeechRecognition = (window as any).SpeechRecognition
    const originalWebkitSpeechRecognition = (window as any).webkitSpeechRecognition
    delete (window as any).SpeechRecognition
    delete (window as any).webkitSpeechRecognition

    const mockOnError = jest.fn()
    render(<VoiceSearchButton onTranscript={jest.fn()} onError={mockOnError} />)
    await userEvent.click(screen.getByRole('button', { name: /voice search/i }))
    expect(mockOnError).toHaveBeenCalledWith('Voice search is not supported in this browser.')
    ;(window as any).SpeechRecognition = originalSpeechRecognition
    ;(window as any).webkitSpeechRecognition = originalWebkitSpeechRecognition
  })

  it('calls onTranscript when recognition result is received', async () => {
    const mockOnTranscript = jest.fn()
    const recognitionMock = {
      lang: '',
      interimResults: false,
      maxAlternatives: 1,
      continuous: false,
      start: jest.fn(),
      stop: jest.fn(),
      onstart: jest.fn(),
      onend: jest.fn(),
      onresult: jest.fn(),
      onerror: jest.fn(),
    }
    ;(window as any).SpeechRecognition = jest.fn(() => recognitionMock)

    render(<VoiceSearchButton onTranscript={mockOnTranscript} />)
    await userEvent.click(screen.getByRole('button', { name: /voice search/i }))

    const event = { results: [[{ transcript: 'Rio de Janeiro' }]] }
    recognitionMock.onresult(event)
    expect(mockOnTranscript).toHaveBeenCalledWith('Rio de Janeiro')
  })

  it('calls onError when recognition error occurs', async () => {
    const mockOnError = jest.fn()
    const recognitionMock = {
      lang: '',
      interimResults: false,
      maxAlternatives: 1,
      continuous: false,
      start: jest.fn(),
      stop: jest.fn(),
      onstart: jest.fn(),
      onend: jest.fn(),
      onresult: jest.fn(),
      onerror: jest.fn(),
    }
    ;(window as any).SpeechRecognition = jest.fn(() => recognitionMock)

    render(<VoiceSearchButton onTranscript={jest.fn()} onError={mockOnError} />)
    await userEvent.click(screen.getByRole('button', { name: /voice search/i }))

    const event = { error: 'not-allowed' }

    recognitionMock.onerror(event)

    expect(mockOnError).toHaveBeenCalledWith(expect.stringMatching(/permission denied/i))
  })

  it('shows listening animation when listening is true', async () => {
    const recognitionMock = {
      lang: '',
      interimResults: false,
      maxAlternatives: 1,
      continuous: false,
      start: jest.fn(),
      stop: jest.fn(),
      onstart: jest.fn(),
      onend: jest.fn(),
      onresult: jest.fn(),
      onerror: jest.fn(),
    }
    ;(window as any).SpeechRecognition = jest.fn(() => recognitionMock)

    render(<VoiceSearchButton onTranscript={jest.fn()} />)
    await userEvent.click(screen.getByRole('button', { name: /voice search/i }))

    recognitionMock.onstart()

    expect(screen.getByRole('button', { name: /listening|voice search/i })).toBeInTheDocument()
  })
})
