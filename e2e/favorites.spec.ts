import fs from 'node:fs'
import path from 'node:path'

import { expect, test } from '@playwright/test'

const weatherFixturePath = path.join(__dirname, 'fixtures', 'weather.json')
const weatherData = JSON.parse(fs.readFileSync(weatherFixturePath, 'utf-8'))

test('favorites: add current city, list in menu, open and remove', async ({ page, context }) => {
  await context.grantPermissions(['geolocation'])
  await context.setGeolocation({ latitude: -22.9, longitude: -43.2 })

  await page.route('**/api/reverse-geocode?**', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ address: { city: 'Rio de Janeiro', country: 'Brazil' } }),
    }),
  )
  await page.route('**/v1/forecast?**', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(weatherData),
    }),
  )

  await page.goto('/')

  const star =
    (await page
      .getByRole('button', { name: /add to favorites/i })
      .elementHandle()
      .catch(() => null)) ||
    (await page
      .getByRole('button', { name: /remove from favorites/i })
      .elementHandle()
      .catch(() => null)) ||
    (await page.locator('button[aria-label*="favorites"]').first())
  await star!.click()

  await page
    .getByRole('button', { name: /favorites/i })
    .first()
    .click()
  await expect(page.getByRole('button', { name: /^Rio de Janeiro, Brazil$/i })).toBeVisible()

  await page.getByRole('button', { name: /remove rio de janeiro, brazil/i }).click()
  await expect(page.getByText(/no favorites yet/i)).toBeVisible()
})
