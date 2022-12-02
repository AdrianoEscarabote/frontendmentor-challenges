export async function getAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice",  { cache: "no-cache" });
  const result = await response.json()
  return result["slip"]
}