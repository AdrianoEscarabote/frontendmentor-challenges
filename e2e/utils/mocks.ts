/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import fs from 'node:fs'
import path from 'node:path'

import type { Request } from '@playwright/test'
import { expect, Page, Route } from '@playwright/test'

const weatherFixturePath = path.join(__dirname, '..', 'fixtures', 'weather.json')
export const weatherData = JSON.parse(fs.readFileSync(weatherFixturePath, 'utf-8'))

export async function mockForecast(page: Page, weather: any) {
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

export async function clearClientState(page: Page) {
  await page.addInitScript(() => {
    try {
      localStorage.clear()
      sessionStorage.clear()
      // @ts-ignore
      if (indexedDB?.databases) {
        // @ts-ignore
        indexedDB
          .databases()
          .then((dbs: any[]) => dbs.forEach((d) => d?.name && indexedDB.deleteDatabase(d.name)))
      }
    } catch {}
  })
}

export async function bootstrapApp(
  page: Page,
  opts: { city?: string; country?: string; weather?: any } = {},
) {
  const city = opts.city ?? 'London'
  const country = opts.country ?? 'United Kingdom'
  await mockReverseGeocode(page, city, country)
  await mockForecast(page, opts.weather)
  await clearClientState(page)

  await page.goto('/')

  const fallback = page.getByRole('button', { name: /use default location/i })
  if (await fallback.isVisible().catch(() => false)) {
    await fallback.click()
  }

  await expect(page.getByRole('region', { name: /weather details/i })).toBeVisible({
    timeout: 15000,
  })
}

export function isForecast(req: Request) {
  return req.url().includes('/v1/forecast')
}
