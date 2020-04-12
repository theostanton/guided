const METERS_TO_MILE = 1609.34
import * as timeago from "timeago.js"


export function humanDistance(distanceMeters: number, append: boolean = true, long: boolean = false): string {
  const miles = Math.ceil(distanceMeters / METERS_TO_MILE)
  return `${miles}${append ? `${long ? " miles" : "m"}` : ""}`
}

export function humanDuration(durationSeconds: number, long: boolean = false): string {
  const durationMinutes = durationSeconds / 60
  switch (true) {
    case durationMinutes < 90:
      return `${Math.ceil(durationMinutes)}${long ? plural(" min", durationMinutes) : "m"}`
    default:
      return `${Math.ceil(durationMinutes / 60)}${long ? plural(" hour", durationMinutes / 60) : "h"}`
  }
}

export function humanDate(date: string): string {
  return `${date.slice(8, 10)}/${date.slice(5, 7)}`
}

export function humanTemperature(temperature: number): string {
  return `${Math.floor(temperature)}°`
}

export function plural(word: string, count: number): string {
  return count === 1 ? word : `${word}s`
}

export function humanElapsed(date: Date): string {
  return timeago.format(date)
}