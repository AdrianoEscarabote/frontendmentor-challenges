import { expect, test } from '@playwright/test'

import { mockForecast, mockReverseGeocode } from './utils/mocks'

test('units and favorites persist across reload', async ({ page }) => {
  await mockReverseGeocode(page, 'London', 'United Kingdom')
  await mockForecast(page)

  await page.goto('/')

  await page.getByRole('button', { name: /units/i }).click()
  await page.getByTestId('unit-system-toggle').click()
  await page.keyboard.press('Escape')

  const favBtn = page
    .locator('button[aria-label="Add to favorites"], button[aria-label="Remove from favorites"]')
    .first()
  await favBtn.click()

  await page.reload()

  await expect(page.getByRole('region', { name: /weather details/i })).toBeVisible()
  await page.getByRole('button', { name: /units/i }).click()
  await expect(page.getByRole('menuitemradio', { name: /fahrenheit/i })).toHaveAttribute(
    'aria-checked',
    'true',
  )
  await expect(page.getByRole('menuitemradio', { name: /mph\b/i })).toHaveAttribute(
    'aria-checked',
    'true',
  )
  await expect(page.getByRole('menuitemradio', { name: /inch(es)?/i })).toHaveAttribute(
    'aria-checked',
    'true',
  )

  await page.keyboard.press('Escape')
  await page.locator('button[aria-controls="favorites-menu"]').first().click()

  await expect(page.getByRole('button', { name: /^London, United Kingdom$/i })).toBeVisible()
})
