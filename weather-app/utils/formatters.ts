export const toFixedSafe = (val: unknown, digits = 0): string => {
  const n = typeof val === 'number' ? val : Number.NaN
  return Number.isFinite(n) ? n.toFixed(digits) : '—'
}

export const pickAt = <T>(arr: unknown, idx: number): T | undefined =>
  Array.isArray(arr) && idx >= 0 && idx < arr.length ? (arr[idx] as T) : undefined

export const toTemp = (celsius: number | undefined, isFahrenheit: boolean): number | undefined =>
  typeof celsius === 'number' ? (isFahrenheit ? (celsius * 9) / 5 + 32 : celsius) : undefined

export const toSpeed = (kmh: number | undefined, windUnit: string): number | undefined =>
  typeof kmh === 'number' ? (windUnit === 'mph' ? kmh * 0.621371 : kmh) : undefined

export function formatVisibility(
  meters: number | undefined,
  units: { temperature: string; wind: string; precipitation: string },
): string {
  const fix = (v: number, d = 1) => toFixedSafe(v, d)
  if (meters == null || !Number.isFinite(meters)) return '—'
  const isImperial =
    units.temperature === 'fahrenheit' || units.wind === 'mph' || units.precipitation === 'inch'
  if (isImperial) {
    const mi = meters / 1609.344
    return `${mi >= 10 ? Math.round(mi) : fix(mi, 1)} mi`
  }
  if (meters >= 1000) {
    const km = meters / 1000
    return `${meters >= 10000 ? Math.round(km) : fix(km, 1)} km`
  }
  return `${Math.round(meters)} m`
}
