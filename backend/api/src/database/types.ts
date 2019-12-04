import {Address, Day, Route, User} from "@guided/common";

export type AddressRow = Address

export type LocationRow = {
    id: string
    label: string
    lat: number
    long: number
    address: string
}


export type RideRow = {
    id: string
    start: string
    end: string
    route: Route
}

export type DayRow = Day

export type GuideRow = {
    id: string
    user: string
    dailyLimitKm: number
}

export type StayRow = {
    id: string
    location: string
    guide: string
    locked: boolean
}

export type UserRow = User