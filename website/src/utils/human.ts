const METERS_TO_MILE = 1609.34

export function humanDistance(distanceMeters: number): string {
  const miles = Math.ceil(distanceMeters / METERS_TO_MILE)
  return `${miles} miles`
}

export function humanDuration(durationSeconds: number): string {
  const durationMinutes = durationSeconds / 60
  switch (true) {
    case durationMinutes < 90:
      return `${Math.ceil(durationMinutes)} mins`
    default:
      return `${Math.ceil(durationMinutes / 60)} hours`
  }
}