import Groq from 'groq-sdk'

export const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
})

export const modelAdvice = 'llama-3.1-8b-instant'
export const modelChat = 'llama-3.1-70b-versatile'
