import fs from 'node:fs'
import path from 'node:path'

import { test } from '@playwright/test'

const weatherFixturePath = path.join(__dirname, 'fixtures', 'weather.json')
const weatherData = JSON.parse(fs.readFileSync(weatherFixturePath, 'utf-8'))

test.use({
  permissions: ['geolocation'],
  geolocation: { latitude: -23.5, longitude: -46.6 },
})

test('renders summary, daily forecast and opens chat', async ({ page }) => {
  await page.route('**/v1/forecast?**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(weatherData),
    })
  })

  await page.route('**/api/chat', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ answer: 'No rain expected.' }),
    })
  })

  await page.goto('/')
})
