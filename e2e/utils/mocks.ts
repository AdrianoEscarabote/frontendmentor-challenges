import fs from 'node:fs'
import path from 'node:path'

import type { Page, Request, Route } from '@playwright/test'

const weatherFixturePath = path.join(__dirname, '..', 'fixtures', 'weather.json')
export const weatherData = JSON.parse(fs.readFileSync(weatherFixturePath, 'utf-8'))

export async function mockForecast(page: Page) {
  await page.route('**/v1/forecast?**', (route: Route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(weatherData),
    }),
  )
}

export type GeoSuggestion = {
  name: string
  country?: string
  lat: number
  lon: number
}

export async function mockGeocodingSuggestions(
  page: Page,
  query: string | RegExp,
  items: GeoSuggestion[],
) {
  await page.route('**/api/geocoding?**', (route: Route) => {
    const url = new URL(route.request().url())
    const name = url.searchParams.get('name') ?? url.searchParams.get('q') ?? ''
    const match =
      typeof query === 'string'
        ? name.toLowerCase().includes(query.toLowerCase())
        : query.test(name)

    const results = (match ? items : []).map((s) => ({
      name: s.name,
      country: s.country ?? '',
      latitude: s.lat,
      longitude: s.lon,
    }))

    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ results }),
    })
  })
}

export async function mockReverseGeocode(page: Page, city = 'London', country = 'United Kingdom') {
  await page.route('**/api/reverse-geocode?**', (route: Route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ address: { city, country } }),
    }),
  )
}

export function isForecast(req: Request) {
  return req.url().includes('/v1/forecast')
}
