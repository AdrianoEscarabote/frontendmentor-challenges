async function sendNewLink(linkToShort) {

  async function shortLink(linkToShort) {
    const response = await fetch("https://api.shrtco.de/v2/shorten?url=" + linkToShort);
    const result = await response.json()
    const returnPromise = result.result.full_short_link
    return returnPromise
  }

  await shortLink(linkToShort).then(link => {
    newLink = link
    return newLink
  })
}

let linknew = ""
const link = sendNewLink("https://www.frontendmentor.io/solutions", linknew)

setTimeout(() => {
  console.log(linknew)
}, 2000)

