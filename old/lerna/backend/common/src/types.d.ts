import { GraphQLResolveInfo, GraphQLScalarType } from 'graphql';
export interface Query {
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
export interface Guide {
    id: string;
    user: User;
    startDate: Date;
    title: string;
    slug: string;
    rideLimitMinutes: number;
    stays: Array<Stay>;
}
export interface User {
    id: string;
    email: string;
    username: string;
}
export declare type Date = any;
export interface Stay {
    id: string;
    nights: number;
    location: Location;
    arrivalDate: Date;
    position?: number;
    locked: boolean;
}
export interface Location {
    id: string;
    label?: string;
    lat: number;
    long: number;
    address1?: string;
    address2?: string;
    city?: string;
    country?: string;
    processed: boolean;
}
export interface Ride {
    id: string;
    start?: Stay;
    end?: Stay;
    durationMinutes?: number;
    route?: Route;
    path?: Array<LatLng>;
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
    lat: number;
    long: number;
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
    deleteStay?: ItemId;
    deleteAllStays?: ItemId;
    updateStay?: ItemId;
    createUser?: ItemId;
    createGuide?: ItemId;
}
export interface AddressInput {
    address1: string;
    address2?: string;
    city: string;
    country: string;
}
export interface ItemId {
    id: string;
}
export interface Subscription {
    guide: Guide;
}
export interface Resolver {
    Query?: QueryTypeResolver;
    Guide?: GuideTypeResolver;
    User?: UserTypeResolver;
    Date?: GraphQLScalarType;
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
export interface QueryToAllRidesArgs {
    guideSlug: string;
}
export interface QueryToAllRidesResolver<TParent = any, TResult = any> {
    (parent: TParent, args: QueryToAllRidesArgs, context: any, info: GraphQLResolveInfo): TResult;
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
export interface GuideTypeResolver<TParent = any> {
    id?: GuideToIdResolver<TParent>;
    user?: GuideToUserResolver<TParent>;
    startDate?: GuideToStartDateResolver<TParent>;
    title?: GuideToTitleResolver<TParent>;
    slug?: GuideToSlugResolver<TParent>;
    rideLimitMinutes?: GuideToRideLimitMinutesResolver<TParent>;
    stays?: GuideToStaysResolver<TParent>;
}
export interface GuideToIdResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
export interface GuideToUserResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
export interface GuideToStartDateResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
export interface GuideToTitleResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
export interface GuideToSlugResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
export interface GuideToRideLimitMinutesResolver<TParent = any, TResult = any> {
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
    nights?: StayToNightsResolver<TParent>;
    location?: StayToLocationResolver<TParent>;
    arrivalDate?: StayToArrivalDateResolver<TParent>;
    position?: StayToPositionResolver<TParent>;
    locked?: StayToLockedResolver<TParent>;
}
export interface StayToIdResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
export interface StayToNightsResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
export interface StayToLocationResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
export interface StayToArrivalDateResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
export interface StayToPositionResolver<TParent = any, TResult = any> {
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
    address1?: LocationToAddress1Resolver<TParent>;
    address2?: LocationToAddress2Resolver<TParent>;
    city?: LocationToCityResolver<TParent>;
    country?: LocationToCountryResolver<TParent>;
    processed?: LocationToProcessedResolver<TParent>;
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
export interface LocationToAddress1Resolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
export interface LocationToAddress2Resolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
export interface LocationToCityResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
export interface LocationToCountryResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
export interface LocationToProcessedResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
export interface RideTypeResolver<TParent = any> {
    id?: RideToIdResolver<TParent>;
    start?: RideToStartResolver<TParent>;
    end?: RideToEndResolver<TParent>;
    durationMinutes?: RideToDurationMinutesResolver<TParent>;
    route?: RideToRouteResolver<TParent>;
    path?: RideToPathResolver<TParent>;
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
export interface RideToDurationMinutesResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
export interface RideToRouteResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
export interface RideToPathResolver<TParent = any, TResult = any> {
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
    deleteStay?: MutationToDeleteStayResolver<TParent>;
    deleteAllStays?: MutationToDeleteAllStaysResolver<TParent>;
    updateStay?: MutationToUpdateStayResolver<TParent>;
    createUser?: MutationToCreateUserResolver<TParent>;
    createGuide?: MutationToCreateGuideResolver<TParent>;
}
export interface MutationToAddStayFromAddressArgs {
    guideId: string;
    locked: boolean;
    label: string;
    address: AddressInput;
    nights: number;
}
export interface MutationToAddStayFromAddressResolver<TParent = any, TResult = any> {
    (parent: TParent, args: MutationToAddStayFromAddressArgs, context: any, info: GraphQLResolveInfo): TResult;
}
export interface MutationToAddStayFromLagLngArgs {
    guideId: string;
    locked: boolean;
    label?: string;
    lat: number;
    long: number;
    nights: number;
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
export interface MutationToDeleteStayArgs {
    stayId: string;
}
export interface MutationToDeleteStayResolver<TParent = any, TResult = any> {
    (parent: TParent, args: MutationToDeleteStayArgs, context: any, info: GraphQLResolveInfo): TResult;
}
export interface MutationToDeleteAllStaysArgs {
    guideId: string;
}
export interface MutationToDeleteAllStaysResolver<TParent = any, TResult = any> {
    (parent: TParent, args: MutationToDeleteAllStaysArgs, context: any, info: GraphQLResolveInfo): TResult;
}
export interface MutationToUpdateStayArgs {
    id: string;
    locked: boolean;
    label: string;
    nights: number;
}
export interface MutationToUpdateStayResolver<TParent = any, TResult = any> {
    (parent: TParent, args: MutationToUpdateStayArgs, context: any, info: GraphQLResolveInfo): TResult;
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
//# sourceMappingURL=types.d.ts.map