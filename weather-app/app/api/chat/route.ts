import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return new Response(JSON.stringify({ error: 'Missing GROQ_API_KEY' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const body = await req.json()
    const question: string | undefined = body.question ?? body.message
    const weather = body.weather
    const units = body.units ?? {}
    const cityName = body.cityName ?? 'your city'

    if (!question || !weather) {
      return new Response(JSON.stringify({ error: 'Question and weather data are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const tempUnit = units.temperature === 'fahrenheit' ? '°F' : '°C'
    const windUnit = units.wind === 'mph' ? 'mph' : 'km/h'
    const precipUnit = units.precipitation === 'inch' ? 'in' : 'mm'

    const now = weather.current_weather ?? {}
    const curISO: string | undefined = now.time

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let next24: any = {}
    if (weather.hourly?.time?.length) {
      const times: string[] = weather.hourly.time
      const idx = curISO ? Math.max(0, times.indexOf(curISO)) : 0
      const end = Math.min(times.length, idx + 24)

      const slice = (arr?: number[]) => (Array.isArray(arr) ? arr.slice(idx, end) : [])
      next24 = {
        time: times.slice(idx, end),
        temperature_2m: slice(weather.hourly.temperature_2m),
        precipitation: slice(weather.hourly.precipitation),
        windspeed_10m: slice(weather.hourly.windspeed_10m),
        weathercode: slice(weather.hourly.weathercode),
        uv_index: slice(weather.hourly.uv_index),
      }
    }

    const system =
      'You are an objective weather assistant. Respond briefly, in EN, based ONLY on the provided JSON.'

    const contextObj = {
      cityName,
      units: { tempUnit, windUnit, precipUnit },
      current: {
        time: curISO,
        temperature: now.temperature,
        windspeed: now.windspeed,
        weathercode: now.weathercode,
      },
      next24,
      guidance:
        'If there is precipitation > 0 in the next hours, advise to take an umbrella. Consider wind and UV when relevant.',
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        temperature: 0.2,
        max_tokens: 350,
        messages: [
          { role: 'system', content: system },
          {
            role: 'user',
            content: `Weather context (JSON): ${JSON.stringify(contextObj).slice(0, 7000)}\n\nQuestion: ${question}`,
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('[/api/chat] Groq API error:', errorText)
      return new Response(JSON.stringify({ error: `Groq API error ${response.status}` }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const data = await response.json()
    const answer =
      data.choices?.[0]?.message?.content ?? 'Could not process your question. Please try again.'

    return new Response(JSON.stringify({ answer }), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('[/api/chat] error:', error)
    const message = error instanceof Error ? error.message : 'Internal server error'
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
