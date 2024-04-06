export function convertToTime(isoString) {
  const date = new Date(isoString)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${hours.toString().padStart(2, "0")}:${
    minutes
      .toString()
      .padStart(2, "0")
  }`
}
