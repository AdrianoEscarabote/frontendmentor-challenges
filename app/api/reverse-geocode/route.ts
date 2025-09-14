import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'weather-app-hackaton/1.0 (adriano.escarabote@hotmail.com)',
    },
  })
  const data = await res.json()
  return NextResponse.json(data)
}
