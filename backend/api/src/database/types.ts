import {Location, User} from "@guided/common";

export type LocationRow = Location & { id?: string }

export type RideRow = {
    id: string
    start: string
    end: string
    durationMinutes: number
    guide: string
    route: string
    path: string
}

export type GuideRow = {
    id: string
    user: string
    title: string
    startDate: Date
    slug: string
    rideLimitMinutes: number
}

export type StayRow = {
    id: string
    location: string
    nights: number
    position?:number
    guide: string
    locked: boolean
}

export type UserRow = User