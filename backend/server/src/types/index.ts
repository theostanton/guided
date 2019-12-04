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
    route: Route
}


export type Route = {
    summary: string
    legs: Leg[]
    overview_polyline: PolyLine
    bounds: Bounds
}
export type Bounds = {
    northeast: LatLng
    southwest: LatLng
}

export type PolyLine = {
    points: string
}

export type Leg = {
    distance: Value
    duration: Value
    start_location: LatLng
    end_location: LatLng
    steps: Step[]
}

export type Step = {
    distance: Value
    duration: Value
    start_location: LatLng
    end_location: LatLng
}

export type LatLng = {
    lat: number
    long: number
}

export type Value = {
    text: String
    value: number
}


export type RideRow = {
    id: number
    start: number
    end: number
    route: Route
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
    guide: number
    locked: boolean
}

export type Guide = {
    id: number
    user?: User
    dailyLimitKm: number
    stays: Stay[]
}

export type GuideRow = {
    id: number
    user: number
    dailyLimitKm: number
}

export type User = {
    id: number
    email: string
    username: string
}

export type LatLng = {
    lat: number
    long: number
}

export type UserRow = User