export async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice")
  const result = await response.json()
  return result["slip"]
}