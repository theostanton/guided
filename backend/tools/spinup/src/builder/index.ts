import { Guide, Spot, User } from '@guided/database'
import UserBuilder from './UserBuilder'

export type Contents = {
    users: User[];
    guides: Guide[];
    // stages: Stage[]
    // rides: Rides[]
    spots: Spot[];
}

export { UserBuilder }
