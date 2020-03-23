import { logJson } from "@guided/logger"

export function dateString(date: Date): string {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, "0")
  const day = date.getDate().toString().padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function plusDays(str: string, days: number): string {
  const date = new Date(str)
  logJson(date, `${str} 1`)
  date.setDate(date.getDate() + days)
  logJson(date, `${str} 2`)
  const newDateString = dateString(date)
  logJson(newDateString, `${str} 3`)
  return newDateString
}

export function extract(dateString: string): { year: number, month: number, date: number } {
  const split = dateString.split("-")
  return {
    year: parseInt(split[0]),
    month: parseInt(split[1]),
    date: parseInt(split[2]),
  }

}