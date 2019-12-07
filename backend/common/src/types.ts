/* tslint:disable */
/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */
 

/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface Query {
  allAddresss: Array<Address>;
  address?: Address;
  allDays: Array<Day>;
  day?: Day;
  allGuides: Array<Guide>;
  guide?: Guide;
  allLocations: Array<Location>;
  location?: Location;
  allRides: Array<Ride>;
  ride?: Ride;
  allStays: Array<Stay>;
  stay?: Stay;
  allUsers: Array<User>;
  user?: User;
}

export interface Address {
  id: string;
  address1: string;
  address2?: string;
  city: string;
  country: string;
}

export interface Day {
  id: string;
  date?: Date;
  locked?: boolean;
}

export type Date = any;

export interface Guide {
  id: string;
  user?: User;
  title?: string;
  slug?: string;
  dailyLimitKm?: number;
  stays?: Array<Stay | null>;
}

export interface User {
  id: string;
  email?: string;
  username?: string;
}

export interface Stay {
  id: string;
  location?: Location;
  locked?: boolean;
}

export interface Location {
  id: string;
  label?: string;
  lat: number;
  long: number;
  address?: Address;
}

export interface Ride {
  id: string;
  start?: Stay;
  end?: Stay;
  route?: Route;
}

export interface Route {
  summary?: string;
  legs?: Array<Leg | null>;
  overview_polyline?: PolyLine;
  bounds?: Bounds;
}

export interface Leg {
  distance?: Value;
  duration?: Value;
  start_location?: LatLng;
  end_location?: LatLng;
  steps?: Array<Step | null>;
}

export interface Value {
  text?: string;
  value?: number;
}

export interface LatLng {
  lat?: number;
  long?: number;
}

export interface Step {
  distance?: Value;
  duration?: Value;
  start_location?: LatLng;
  end_location?: LatLng;
}

export interface PolyLine {
  points?: string;
}

export interface Bounds {
  northeast: LatLng;
  southwest: LatLng;
}

export interface Mutation {
  addStayFromAddress?: ItemId;
  addStayFromLagLng?: ItemId;
  moveStay?: ItemId;
  createUser?: ItemId;
  createGuide?: ItemId;
}

export interface AddressInput {
  address1?: string;
  address2?: string;
  city?: string;
  country?: string;
}

export interface ItemId {
  id?: string;
}

export interface Subscription {
  guide: Guide;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface Resolver {
  Query?: QueryTypeResolver;
  Address?: AddressTypeResolver;
  Day?: DayTypeResolver;
  Date?: GraphQLScalarType;
  Guide?: GuideTypeResolver;
  User?: UserTypeResolver;
  Stay?: StayTypeResolver;
  Location?: LocationTypeResolver;
  Ride?: RideTypeResolver;
  Route?: RouteTypeResolver;
  Leg?: LegTypeResolver;
  Value?: ValueTypeResolver;
  LatLng?: LatLngTypeResolver;
  Step?: StepTypeResolver;
  PolyLine?: PolyLineTypeResolver;
  Bounds?: BoundsTypeResolver;
  Mutation?: MutationTypeResolver;
  ItemId?: ItemIdTypeResolver;
  Subscription?: SubscriptionTypeResolver;
}
export interface QueryTypeResolver<TParent = any> {
  allAddresss?: QueryToAllAddresssResolver<TParent>;
  address?: QueryToAddressResolver<TParent>;
  allDays?: QueryToAllDaysResolver<TParent>;
  day?: QueryToDayResolver<TParent>;
  allGuides?: QueryToAllGuidesResolver<TParent>;
  guide?: QueryToGuideResolver<TParent>;
  allLocations?: QueryToAllLocationsResolver<TParent>;
  location?: QueryToLocationResolver<TParent>;
  allRides?: QueryToAllRidesResolver<TParent>;
  ride?: QueryToRideResolver<TParent>;
  allStays?: QueryToAllStaysResolver<TParent>;
  stay?: QueryToStayResolver<TParent>;
  allUsers?: QueryToAllUsersResolver<TParent>;
  user?: QueryToUserResolver<TParent>;
}

export interface QueryToAllAddresssResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToAddressArgs {
  id?: string;
}
export interface QueryToAddressResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToAddressArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToAllDaysResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToDayArgs {
  id?: string;
}
export interface QueryToDayResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToDayArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToAllGuidesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToGuideArgs {
  slug: string;
}
export interface QueryToGuideResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToGuideArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToAllLocationsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToLocationArgs {
  id?: string;
}
export interface QueryToLocationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToLocationArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToAllRidesResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToRideArgs {
  id?: string;
}
export interface QueryToRideResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToRideArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToAllStaysResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToStayArgs {
  id?: string;
}
export interface QueryToStayResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToStayArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToAllUsersResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToUserArgs {
  id?: string;
}
export interface QueryToUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressTypeResolver<TParent = any> {
  id?: AddressToIdResolver<TParent>;
  address1?: AddressToAddress1Resolver<TParent>;
  address2?: AddressToAddress2Resolver<TParent>;
  city?: AddressToCityResolver<TParent>;
  country?: AddressToCountryResolver<TParent>;
}

export interface AddressToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToAddress1Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToAddress2Resolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToCityResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface AddressToCountryResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface DayTypeResolver<TParent = any> {
  id?: DayToIdResolver<TParent>;
  date?: DayToDateResolver<TParent>;
  locked?: DayToLockedResolver<TParent>;
}

export interface DayToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface DayToDateResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface DayToLockedResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GuideTypeResolver<TParent = any> {
  id?: GuideToIdResolver<TParent>;
  user?: GuideToUserResolver<TParent>;
  title?: GuideToTitleResolver<TParent>;
  slug?: GuideToSlugResolver<TParent>;
  dailyLimitKm?: GuideToDailyLimitKmResolver<TParent>;
  stays?: GuideToStaysResolver<TParent>;
}

export interface GuideToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GuideToUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GuideToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GuideToSlugResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GuideToDailyLimitKmResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GuideToStaysResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserTypeResolver<TParent = any> {
  id?: UserToIdResolver<TParent>;
  email?: UserToEmailResolver<TParent>;
  username?: UserToUsernameResolver<TParent>;
}

export interface UserToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToEmailResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface UserToUsernameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface StayTypeResolver<TParent = any> {
  id?: StayToIdResolver<TParent>;
  location?: StayToLocationResolver<TParent>;
  locked?: StayToLockedResolver<TParent>;
}

export interface StayToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface StayToLocationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface StayToLockedResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LocationTypeResolver<TParent = any> {
  id?: LocationToIdResolver<TParent>;
  label?: LocationToLabelResolver<TParent>;
  lat?: LocationToLatResolver<TParent>;
  long?: LocationToLongResolver<TParent>;
  address?: LocationToAddressResolver<TParent>;
}

export interface LocationToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LocationToLabelResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LocationToLatResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LocationToLongResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LocationToAddressResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RideTypeResolver<TParent = any> {
  id?: RideToIdResolver<TParent>;
  start?: RideToStartResolver<TParent>;
  end?: RideToEndResolver<TParent>;
  route?: RideToRouteResolver<TParent>;
}

export interface RideToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RideToStartResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RideToEndResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RideToRouteResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RouteTypeResolver<TParent = any> {
  summary?: RouteToSummaryResolver<TParent>;
  legs?: RouteToLegsResolver<TParent>;
  overview_polyline?: RouteToOverview_polylineResolver<TParent>;
  bounds?: RouteToBoundsResolver<TParent>;
}

export interface RouteToSummaryResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RouteToLegsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RouteToOverview_polylineResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface RouteToBoundsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LegTypeResolver<TParent = any> {
  distance?: LegToDistanceResolver<TParent>;
  duration?: LegToDurationResolver<TParent>;
  start_location?: LegToStart_locationResolver<TParent>;
  end_location?: LegToEnd_locationResolver<TParent>;
  steps?: LegToStepsResolver<TParent>;
}

export interface LegToDistanceResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LegToDurationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LegToStart_locationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LegToEnd_locationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LegToStepsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ValueTypeResolver<TParent = any> {
  text?: ValueToTextResolver<TParent>;
  value?: ValueToValueResolver<TParent>;
}

export interface ValueToTextResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ValueToValueResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LatLngTypeResolver<TParent = any> {
  lat?: LatLngToLatResolver<TParent>;
  long?: LatLngToLongResolver<TParent>;
}

export interface LatLngToLatResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface LatLngToLongResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface StepTypeResolver<TParent = any> {
  distance?: StepToDistanceResolver<TParent>;
  duration?: StepToDurationResolver<TParent>;
  start_location?: StepToStart_locationResolver<TParent>;
  end_location?: StepToEnd_locationResolver<TParent>;
}

export interface StepToDistanceResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface StepToDurationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface StepToStart_locationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface StepToEnd_locationResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface PolyLineTypeResolver<TParent = any> {
  points?: PolyLineToPointsResolver<TParent>;
}

export interface PolyLineToPointsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface BoundsTypeResolver<TParent = any> {
  northeast?: BoundsToNortheastResolver<TParent>;
  southwest?: BoundsToSouthwestResolver<TParent>;
}

export interface BoundsToNortheastResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface BoundsToSouthwestResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationTypeResolver<TParent = any> {
  addStayFromAddress?: MutationToAddStayFromAddressResolver<TParent>;
  addStayFromLagLng?: MutationToAddStayFromLagLngResolver<TParent>;
  moveStay?: MutationToMoveStayResolver<TParent>;
  createUser?: MutationToCreateUserResolver<TParent>;
  createGuide?: MutationToCreateGuideResolver<TParent>;
}

export interface MutationToAddStayFromAddressArgs {
  guideId: string;
  locked?: boolean;
  label?: string;
  address?: AddressInput;
}
export interface MutationToAddStayFromAddressResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToAddStayFromAddressArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToAddStayFromLagLngArgs {
  guideId: string;
  locked: boolean;
  label: string;
  lat: number;
  long: number;
}
export interface MutationToAddStayFromLagLngResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToAddStayFromLagLngArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToMoveStayArgs {
  lat: number;
  long: number;
  locationId: string;
}
export interface MutationToMoveStayResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToMoveStayArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToCreateUserArgs {
  email: string;
  username: string;
}
export interface MutationToCreateUserResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCreateUserArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToCreateGuideArgs {
  userId: string;
  title: string;
}
export interface MutationToCreateGuideResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToCreateGuideArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ItemIdTypeResolver<TParent = any> {
  id?: ItemIdToIdResolver<TParent>;
}

export interface ItemIdToIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface SubscriptionTypeResolver<TParent = any> {
  guide?: SubscriptionToGuideResolver<TParent>;
}

export interface SubscriptionToGuideResolver<TParent = any, TResult = any> {
  resolve?: (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo) => TResult;
  subscribe: (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo) => AsyncIterator<TResult>;
}
