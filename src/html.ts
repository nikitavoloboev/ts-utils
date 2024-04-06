export async function getHtmlForUrl(url: string): Promise<string> {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const html = await response.text()
    return html
  } catch (error) {
    console.error("Error fetching URL:", error)
    return ""
  }
}
