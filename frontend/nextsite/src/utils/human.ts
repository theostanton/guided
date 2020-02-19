import formatDate from "date-fns/format"
import parseDate from "date-fns/parse"
import { logJson } from "@guided/logger"

const METERS_TO_MILE = 1609.34


export function humanDistance(distanceMeters: number): string {
  const miles = Math.ceil(distanceMeters / METERS_TO_MILE)
  return `${miles}m`
}

export function humanDuration(durationSeconds: number): string {
  const durationMinutes = durationSeconds / 60
  switch (true) {
    case durationMinutes < 90:
      return `${Math.ceil(durationMinutes)}m`
    default:
      return `${Math.ceil(durationMinutes / 60)}h`
  }
}

export function humanDate(date: string): string {
  return `${date.slice(8, 10)}/${date.slice(5, 7)}`
}

export function humanTemperature(temperature: number): string {
  return `${Math.floor(temperature)}°`
}