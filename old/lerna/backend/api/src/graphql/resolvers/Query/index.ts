import * as Users from './users'
import * as Guides from './guides'
import * as Stays from './stays'
import * as Locations from './locations'
import * as Rides from './rides'
import {IResolvers} from "graphql-tools";

export default {
    ...Users,
    ...Guides,
    ...Stays,
    ...Locations,
    ...Rides
} as IResolvers