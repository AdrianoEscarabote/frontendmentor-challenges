import fs from 'node:fs'
import path from 'node:path'

import { expect, test } from '@playwright/test'

test('OG endpoint returns a PNG', async ({ request }) => {
  const url = '/api/og?city=Salvador%2C%20Brazil&temp=25&desc=Partly%20cloudy&code=2'
  const res = await request.get(url)
  expect(res.status()).toBe(200)
  expect(res.headers()['content-type']).toContain('image/png')
  const buf = await res.body()
  expect(buf.byteLength).toBeGreaterThan(10_000)
  const out = path.join(process.cwd(), 'e2e', 'artifacts', 'og-sample.png')
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, buf)
})
