/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { expect, test } from '@playwright/test'

import { mockForecast, mockReverseGeocode } from './utils/mocks'

test('voice search fills input and triggers search', async ({ page }) => {
  await mockReverseGeocode(page, 'Salvador', 'Brazil')
  await mockForecast(page)

  await page.addInitScript(() => {
    const recognition = function (this: any) {
      this.lang = 'en-US'
      this.onstart = null
      this.onresult = null
      this.onerror = null
      this.onend = null
      this.start = () => {
        setTimeout(() => {
          this.onresult?.({
            results: [[{ transcript: 'Salvador, Brazil' }]],
          })
          this.onend?.()
        }, 50)
      }
      this.stop = () => this.onend?.()
    }
    // @ts-expect-error
    window.SpeechRecognition = recognition
    // @ts-expect-error
    window.webkitSpeechRecognition = recognition
  })

  await page.goto('/')

  await page.getByRole('button', { name: /voice search/i }).click()

  await expect(page.getByPlaceholder('Search for a place...')).toHaveValue(/salvador, brazil/i)
  await expect(page.getByRole('region', { name: /weather details/i })).toBeVisible()
})
