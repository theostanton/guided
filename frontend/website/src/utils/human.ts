const METERS_TO_MILE = 1609.34


export function humanDistance(distanceMeters: number, append: boolean = true): string {
  const miles = Math.ceil(distanceMeters / METERS_TO_MILE)
  return `${miles}${append ? "m" : ""}`
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

export function plural(word: string, count: number): string {
  return count === 1 ? word : `${word}s`
}