/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from 'framer-motion'
import { MicIcon } from 'lucide-react'
import { useRef, useState } from 'react'
import { toast } from 'sonner'

const VoiceSearchButton = ({
  onTranscript,
  onError,
}: {
  onTranscript: (text: string) => void
  onError?: (msg: string) => void
}) => {
  const [listening, setListening] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const recognitionRef = useRef<any>(null)

  const getFriendlyErrorMessage = (errorType: string) => {
    switch (errorType) {
      case 'no-speech':
        return 'Could not hear anything. Please try again!'
      case 'audio-capture':
        return 'Microphone error. Check your permissions.'
      case 'not-allowed':
        return 'Permission denied. Allow microphone access.'
      case 'network':
        return 'Connection error. Check your internet.'
      case 'aborted':
        return 'Voice search canceled.'
      default:
        return 'Something went wrong. Please try again!'
    }
  }

  const hardStop = () => {
    try {
      recognitionRef.current?.stop?.()
    } catch {}
    recognitionRef.current = null
    setListening(false)
  }

  const handleVoiceSearch = () => {
    if (listening) {
      hardStop()
      return
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition

    if (!SpeechRecognition) {
      const errorMsg = 'Voice search is not supported in this browser.'
      toast.error(errorMsg)
      onError?.(errorMsg)
      return
    }

    const recognition = new SpeechRecognition()
    recognitionRef.current = recognition

    recognition.lang = 'en-US'
    recognition.interimResults = false
    recognition.maxAlternatives = 1
    recognition.continuous = false

    recognition.onstart = () => {
      setError(null)
      setListening(true)
    }

    recognition.onend = () => {
      hardStop()
    }

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      onTranscript(transcript)
      hardStop()
    }

    recognition.onerror = (event: any) => {
      const friendlyError = getFriendlyErrorMessage(event.error)
      setError(friendlyError)
      toast.error(friendlyError)
      onError?.(friendlyError)
      hardStop()
    }

    setTimeout(() => {
      if (recognitionRef.current) {
        toast.warning('Time limit reached. Please try again!')
        hardStop()
      }
    }, 10000)

    recognition.start()
  }

  return (
    <div className="relative">
      <motion.button
        type="button"
        aria-label={listening ? 'Listening... Click to stop' : 'Voice Search'}
        className={`relative z-10 grid h-[3.5rem] w-[3.5rem] cursor-pointer place-content-center rounded-[0.75rem] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:outline-none ${
          listening
            ? 'bg-red-500 hover:bg-red-600 focus-visible:ring-red-500'
            : 'bg-blue-500 hover:bg-blue-700 focus-visible:ring-blue-500'
        }`}
        onClick={handleVoiceSearch}
        animate={{ scale: listening ? 1.05 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          animate={listening ? { scale: [1, 1.2, 1] } : { scale: 1 }}
          transition={{
            duration: listening ? 1.5 : 0.2,
            repeat: listening ? Number.POSITIVE_INFINITY : 0,
            ease: 'easeInOut',
          }}
        >
          <MicIcon size={24} className="text-white" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {listening && (
          <motion.div
            key="fx"
            className="pointer-events-none absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            {/* Rings */}
            <motion.div
              className="absolute inset-0 rounded-[0.75rem] border-2 border-red-400"
              animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0.2, 0.8] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute inset-0 rounded-[0.75rem] border-2 border-red-300"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0.1, 0.6] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
                delay: 0.3,
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-[0.75rem] border-2 border-red-200"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.05, 0.4] }}
              transition={{
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
                delay: 0.6,
              }}
            />

            {/* Sound wave */}
            <div className="absolute top-1/2 -right-16 flex -translate-y-1/2 items-center gap-1">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 rounded-full bg-red-400"
                  animate={{ height: [4, 16, 8, 20, 4] }}
                  transition={{
                    duration: 1.2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>

            {/* Status */}
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-xs font-medium text-red-400">Listening...</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default VoiceSearchButton
