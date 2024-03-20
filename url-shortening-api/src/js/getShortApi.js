export default async function getShortApi(linkToShort) {
  const response = await fetch("https://api.shrtco.de/v2/shorten?url=" + linkToShort);
  const result = await response.json()
  return result["result"].full_short_link
}