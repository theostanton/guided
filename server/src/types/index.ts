export type Address = {
    id: string
    address1: string
    address2: string
    city: string
    country: string
}
export type Location = {
    id: string
    label: string
    lat: number
    long: number
    address: Address
}
export type Ride = {
    id: string
    start: Spot
    end: Spot
}
export type Day = {
    id: string
    date: Date
    locked: boolean
}

export type Spot = {
    id: string
    location: Location
}
export type Stay = {
    id: string
    spot: Spot
    locked: boolean
}
export type Guide = {
    id: string
    user: User
    dailyLimitKm: number
    stays: [Stay]
}
export type User = {
    id: string
    email: string
}