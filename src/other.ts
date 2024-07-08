// Check if a string is valid base64
export function isValidBase64(str: string): boolean {
  try {
    return btoa(atob(str)) === str
  } catch (err) {
    return false
  }
}
