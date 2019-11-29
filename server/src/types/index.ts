export type Address = {
    id: number
    address1: string
    address2: string
    city: string
    country: string
}
export type Location = {
    id: number
    label: string
    lat: number
    long: number
    address: Address
}
export type Ride = {
    id: number
    start: Spot
    end: Spot
}
export type Day = {
    id: number
    date: Date
    locked: boolean
}

export type Spot = {
    id: number
    location: Location
}
export type Stay = {
    id: number
    spot: Spot
    locked: boolean
}
export type Guide = {
    id: number
    user: User
    dailyLimitKm: number
    stays: [Stay]
}
export type User = {
    id: number
    email: string
}