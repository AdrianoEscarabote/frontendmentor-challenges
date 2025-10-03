import { expect, test } from '@playwright/test'

import { bootstrapApp } from './utils/mocks'

test('units: switch to imperial updates UI', async ({ page }) => {
  await bootstrapApp(page)

  await page.getByRole('button', { name: /units/i }).click()
  await page.getByTestId('unit-system-toggle').click()

  await page.getByRole('button', { name: /units/i }).click()
  const menu = page.getByRole('menu')

  await expect(menu.getByRole('menuitemradio', { name: /fahrenheit/i })).toHaveAttribute(
    'aria-checked',
    'true',
  )

  await expect(menu.getByRole('menuitemradio', { name: /mph\b/i })).toHaveAttribute(
    'aria-checked',
    'true',
  )

  await expect(menu.getByRole('menuitemradio', { name: /inch(es)?/i })).toHaveAttribute(
    'aria-checked',
    'true',
  )

  await page.keyboard.press('Escape')

  const details = page.getByRole('region', { name: /weather details/i })
  await expect(details.getByText(/\b\d+\s?mph\b/)).toBeVisible()
})

test('theme: dark persists after reload', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('button', { name: /toggle theme/i }).click()
  await page.getByText(/dark/i).click()

  await expect(page.locator('html')).toHaveClass(/dark/)

  await page.reload()

  await expect(page.locator('html')).toHaveClass(/dark/)
})
