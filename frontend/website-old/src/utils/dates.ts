
export function dateString(date: Date): string {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const day = date.getDate().toString().padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function plusDays(str: string, days: number): string {
  const date = new Date(str)
  date.setDate(date.getDate() + days)
  return dateString(date)
}