import moment, { Moment } from "moment"

export function dateString(year: number, month: number, date: number): string {
  return `${year}-${month.toString().padStart(2, "0")}-${date.toString().padStart(2, "0")}`
}

export function plusDays(dateString: string, days: number): string {
  const { year, month, date } = extract(dateString)
  let utcDate = moment({
    year, month: month - 1, date,
  }).utc(true)

  utcDate = utcDate.add("day", days)

  return utcDate.format("YYYY-MM-DD")
}

export function extract(dateString: string): { year: number, month: number, date: number } {
  const split = dateString.split("-")
  return {
    year: parseInt(split[0]),
    month: parseInt(split[1]),
    date: parseInt(split[2]),
  }

}