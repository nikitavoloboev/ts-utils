import osascript from "osascript-tag"

export async function executeJxa(script: string) {
  try {
    const result = await osascript.jxa({ parse: true })`${script}`
    return result
  } catch (err: unknown) {
    if (typeof err === "string") {
      console.error(err, "failed to execute jxa")
    }
  }
}
