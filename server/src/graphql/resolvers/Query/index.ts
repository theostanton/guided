import * as Users from './users'
import * as Guides from './guides'
import * as Stays from './stays'
import * as Locations from './locations'
import * as Rides from './rides'
import * as Spots from './spots'
import {IResolvers} from "graphql-tools";

export default {
    ...Users,
    ...Guides,
    ...Stays,
    ...Locations,
    ...Rides,
    ...Spots
} as IResolvers