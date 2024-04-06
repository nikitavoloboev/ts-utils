import { parseURL } from "ufo"

export function splitUrlByProtocol(url: string) {
  let parsedUrl = parseURL(url)
  console.log(parsedUrl)
  let host = parsedUrl.host
  if (host?.includes("www")) {
    host = host?.replace("www.", "")
  }
  let urlWithoutProtocol = host + parsedUrl.pathname + parsedUrl.search

  let protocol = parsedUrl.protocol
  if (protocol) {
    protocol = protocol.replace(":", "")
  }
  return [urlWithoutProtocol, protocol]
}

// TODO: doesn't work, maybe use playwright
export async function getTitleFromUrl(url: string): Promise<string> {
  try {
    const response = await fetch(url)
    const html = await response.text()
    const match = html.match(/<title>(.*?)<\/title>/i)
    if (match && match[1]) {
      return match[1]
    }
    return "No title found"
  } catch (error) {
    console.error("Error fetching URL:", error)
    return "Error fetching title"
  }
}
