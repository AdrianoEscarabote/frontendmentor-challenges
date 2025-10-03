import { expect, test } from '@playwright/test'

import { bootstrapApp, mockGeocodingSuggestions } from './utils/mocks'

test('search: selects suggestion and closes on blur', async ({ page }) => {
  page.on('console', (m) => m.type() === 'error' && console.log('[console.error]', m.text()))
  page.on('pageerror', (e) => console.log('[pageerror]', e))

  await bootstrapApp(page, { city: 'Mexico', country: 'Mexico' })

  await mockGeocodingSuggestions(page, /mex/i, [{ name: 'Mexico, Mexico', lat: 23, lon: -102 }])

  const input = page.getByPlaceholder('Search for a place...')
  await input.focus()
  await input.fill('Mexico')

  const listbox = page.getByRole('listbox', { name: /city suggestions/i })
  await expect(listbox).toBeVisible()

  const suggestion = listbox.getByRole('option', { name: /^Mexico, Mexico$/i })
  await expect(suggestion).toBeVisible()

  await suggestion.click()

  await expect(page.getByRole('region', { name: /weather details/i })).toBeVisible()
  await expect(input).toHaveValue(/mexico, mexico/i)

  await input.evaluate((el) => (el as HTMLInputElement).focus())
  await input.fill('Mexico')
  const listboxAgain = page.getByRole('listbox', { name: /city suggestions/i })
  await expect(listboxAgain).toBeVisible()
  const sugAgain = listboxAgain.getByRole('option', { name: /^Mexico, Mexico$/i })
  await expect(sugAgain).toBeVisible()
  await input.evaluate((el) => (el as HTMLInputElement).blur())
  await expect(sugAgain).toBeHidden()
})
