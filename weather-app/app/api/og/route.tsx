/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'

import Logo from '@/app/_icons/logo'
import { weatherIconMap } from '@/utils/weatherIconMap'

export const runtime = 'edge'
export const alt = 'Weather Now - Share'
export const contentType = 'image/png'
export const size = { width: 1200, height: 630 }

export async function GET(req: Request) {
  const { searchParams, origin } = new URL(req.url)
  const city = searchParams.get('city') ?? 'Your city'
  const temp = searchParams.get('temp') ?? '—'
  const desc = searchParams.get('desc') ?? 'Forecast'
  const code = Number(searchParams.get('code') ?? '0')

  const iconFile = weatherIconMap[code] || 'sunny.svg'
  const iconUrl = `${origin}/images/${iconFile}`

  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '48px 64px',
          background: 'linear-gradient(135deg,#1d2540 0%,#03012D 100%)',
          color: '#ffffff',
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
        }}
      >
        <div style={{ display: 'flex', position: 'absolute', top: 48, left: 64 }}>
          <Logo
            className="dark:text-neutral-0 h-[1.75rem] w-[8.5625rem] text-neutral-900 md:h-[2.5rem] md:w-[12.3125rem]"
            style={{ height: 44, width: 214 }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 720 }}>
          <div style={{ display: 'flex', fontSize: 52, fontWeight: 800, lineHeight: 1.1 }}>
            {city}
          </div>
          <div style={{ display: 'flex', fontSize: 34, opacity: 0.95, fontWeight: 600 }}>
            {desc}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <img
            src={iconUrl}
            alt="weather icon"
            width={140}
            height={140}
            style={{ display: 'flex' }}
          />
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <div style={{ display: 'flex', fontSize: 160, fontWeight: 900 }}>
              {String(temp).replace(/[^0-9\-]/g, '')}
            </div>
            <div style={{ display: 'flex', fontSize: 80, fontWeight: 800 }}>°</div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
