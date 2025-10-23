import fs from 'node:fs'
import path from 'node:path'

import { expect, test } from '@playwright/test'

const weatherFixturePath = path.join(__dirname, 'fixtures', 'weather.json')
const weatherData = JSON.parse(fs.readFileSync(weatherFixturePath, 'utf-8'))

test('boot: preloader visible and fallback button loads London', async ({ page }) => {
  await page.route('**/api/reverse-geocode?**', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ address: { city: 'London', country: 'United Kingdom' } }),
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

  await expect(page.getByRole('status', { name: /initializing app/i })).toBeVisible()

  await page.getByRole('button', { name: /use default location/i }).click()

  await expect(page.getByRole('region', { name: /weather details/i })).toBeVisible({
    timeout: 15000,
  })
  await expect(page.getByText(/humidity/i)).toBeVisible({ timeout: 15000 })

  await expect(page.getByRole('heading', { name: /london/i })).toBeVisible({ timeout: 15000 })
})
