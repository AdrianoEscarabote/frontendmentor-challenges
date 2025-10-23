'use client'

import { MessageCircle, Send, Sparkles } from 'lucide-react'
import type React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { Button } from '@/app/_components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/app/_components/ui/dialog'
import { Input } from '@/app/_components/ui/input'
import { ScrollArea } from '@/app/_components/ui/scroll-area'
import { useWeatherStore } from '@/app/_store/weather'

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { weather, cityName, units } = useWeatherStore()

  const viewportRef = useRef<HTMLDivElement | null>(null)
  const endRef = useRef<HTMLDivElement | null>(null)

  const getViewport = () => {
    const el = viewportRef.current
    if (!el) return null
    if (el.hasAttribute('data-radix-scroll-area-viewport')) return el
    return el.querySelector<HTMLElement>(
      '[data-radix-scroll-area-viewport]',
    ) as HTMLDivElement | null
  }

  const scrollToBottom = useCallback((behavior: ScrollBehavior = 'smooth') => {
    const vp = getViewport()
    if (!vp) return
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior, block: 'end' })
    } else {
      vp.scrollTo({ top: vp.scrollHeight, behavior })
    }
  }, [])

  const scrollAfterOpen = useCallback(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToBottom('auto')
      })
    })
  }, [scrollToBottom])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    requestAnimationFrame(() => scrollToBottom('smooth'))

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: userMessage.content,
          weather,
          units,
          cityName,
        }),
      })

      if (!response.ok) throw new Error('Failed to get response')
      const data = await response.json()

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.answer ?? 'No answer',
        isUser: false,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      requestAnimationFrame(() => scrollToBottom('smooth'))
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, an error occurred. Please try again.',
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
      requestAnimationFrame(() => scrollToBottom('smooth'))
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (isOpen) scrollToBottom('auto')
  }, [isOpen, scrollToBottom])

  useEffect(() => {
    if (isOpen) scrollToBottom('smooth')
  }, [messages.length, isLoading, isOpen, scrollToBottom])

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="group fixed right-6 bottom-6 z-50 h-14 w-14 cursor-pointer rounded-full border border-white/30 bg-gradient-to-r from-blue-500/90 to-purple-600/90 shadow-lg shadow-blue-500/25 backdrop-blur-xl transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-white/30 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 after:absolute after:inset-[1px] after:rounded-full after:bg-gradient-to-br after:from-white/20 after:via-transparent after:to-transparent after:opacity-60 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 hover:before:opacity-100 dark:border-white/20 dark:from-blue-600/90 dark:to-purple-600/90 dark:shadow-blue-600/25 dark:hover:shadow-blue-600/40"
        size="icon"
      >
        <MessageCircle className="relative z-10 h-6 w-6 text-white transition-transform duration-200 group-hover:scale-110" />
        <span className="sr-only">Open weather chat</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          onOpenAutoFocus={scrollAfterOpen}
          className="overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-0 shadow-2xl ring-1 shadow-blue-500/20 ring-white/20 backdrop-blur-xl before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-gradient-to-br before:from-white/20 before:via-blue-50/10 before:to-purple-50/10 before:backdrop-blur-3xl after:absolute after:inset-[1px] after:-z-10 after:rounded-3xl after:bg-gradient-to-br after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 sm:max-w-md dark:from-slate-900/10 dark:via-slate-800/5 dark:to-transparent dark:shadow-blue-600/30 dark:ring-white/10 dark:before:from-slate-800/20 dark:before:via-blue-900/10 dark:before:to-purple-900/10 dark:after:from-slate-700/30"
        >
          <DialogHeader className="relative overflow-hidden rounded-t-3xl border-b border-white/20 bg-gradient-to-r from-white/30 to-blue-50/20 p-4 backdrop-blur-2xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:backdrop-blur-sm dark:border-slate-700/30 dark:from-slate-800/30 dark:to-blue-900/20">
            <DialogTitle
              className="relative z-10 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white"
              data-testid="dialog-title"
            >
              <div className="rounded-full bg-gradient-to-r from-blue-500/80 to-purple-600/80 p-2 shadow-lg ring-1 shadow-blue-500/25 ring-white/30 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              Weather Chat
            </DialogTitle>
          </DialogHeader>

          <div className="relative flex h-[400px] flex-col p-6 pt-0 pb-4">
            <ScrollArea ref={viewportRef} className="flex-1 overflow-y-auto px-1">
              <div className="space-y-4 py-4">
                {messages.length === 0 && (
                  <div className="py-8 text-center text-neutral-950 dark:text-neutral-200">
                    <Sparkles className="mx-auto mb-2 h-8 w-8 opacity-60" />
                    <p>Ask anything about the weather!</p>
                    <p className="mt-1 text-sm opacity-80">
                      Ex: &quot;Do I need an umbrella today?&quot;
                    </p>
                  </div>
                )}

                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`relative max-w-[80%] rounded-2xl px-4 py-2 ${
                        message.isUser
                          ? `bg-gradient-to-r from-blue-500/90 to-purple-600/90 text-white shadow-lg ring-1 shadow-blue-500/25 ring-white/20 backdrop-blur-sm before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-60`
                          : `bg-white/20 text-gray-900 ring-1 ring-white/30 backdrop-blur-2xl before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/30 before:to-transparent before:opacity-50 dark:bg-slate-800/20 dark:text-slate-100 dark:ring-slate-700/30 dark:before:from-slate-700/30`
                      }`}
                    >
                      <p className="relative z-10 text-sm leading-relaxed">{message.content}</p>
                      <p className="relative z-10 mt-1 text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString('en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="relative rounded-2xl bg-white/20 px-4 py-2 ring-1 ring-white/30 backdrop-blur-2xl before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/30 before:to-transparent before:opacity-50 dark:bg-slate-800/20 dark:ring-slate-700/30 dark:before:from-slate-700/30">
                      <div className="relative z-10 flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]"></div>
                          <div className="h-2 w-2 animate-bounce rounded-full bg-purple-500 [animation-delay:-0.15s]"></div>
                          <div className="h-2 w-2 animate-bounce rounded-full bg-blue-500"></div>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-slate-300">
                          Thinking...
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={endRef} className="h-px" aria-hidden />
              </div>
            </ScrollArea>

            <form
              onSubmit={handleSubmit}
              className="relative flex gap-2 border-t border-white/20 pt-4 dark:border-slate-700/30"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about the weather..."
                disabled={isLoading}
                className="flex-1 rounded-xl border-0 bg-white/20 text-gray-900 ring-1 ring-white/30 backdrop-blur-2xl placeholder:text-gray-600 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-60 focus:ring-2 focus:ring-blue-500/50 dark:bg-slate-800/20 dark:text-white dark:ring-slate-700/30 dark:placeholder:text-slate-300 dark:before:from-slate-700/20"
              />
              <Button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="relative rounded-xl bg-gradient-to-r from-blue-500/90 to-purple-600/90 shadow-lg ring-1 shadow-blue-500/25 ring-white/20 backdrop-blur-sm transition-all duration-200 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-60 hover:from-blue-600/90 hover:to-purple-700/90 hover:shadow-blue-500/40 disabled:cursor-not-allowed disabled:opacity-50"
                size="icon"
              >
                <Send className="relative z-10 h-4 w-4" />
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
