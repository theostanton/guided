export type Address = {
    id: number
    address1: string
    address2: string
    city: string
    country: string
}

export type AddressRow = Address

export type Location = {
    id: number
    label: string
    lat: number
    long: number
    address: Address
}

export type LocationRow = {
    id: number
    label: string
    lat: number
    long: number
    address: number
}
export type Ride = {
    id: number
    start: Spot
    end: Spot
}

export type RideRow = {
    id: number
    start: number
    end: number
}

export type Day = {
    id: number
    date: Date
    locked: boolean
}

export type DayRow = Day

export type Spot = {
    id: number
    location: Location
}
export type SpotRow = {
    id: number
    location: number
}

export type Stay = {
    id: number
    spot: Spot
    locked: boolean
}

export type StayRow = {
    id: number
    spot: number
    locked: boolean
}

export type Guide = {
    id: number
    user: User
    dailyLimitKm: number
    stays: [Stay]
}

export type GuideRow = {
    id: number
    user: number
    dailyLimitKm: number
}

export type User = {
    id: number
    email: string
}

export type UserRow = User