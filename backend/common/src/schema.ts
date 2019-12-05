// language=GraphQL
export default `
schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
}

type Address{
    id:ID!
    address1:String!
    address2:String
    city:String!
    country:String!
}

type Location {
    id:ID!
    label:String
    lat:Float!
    long:Float!
    address:Address
}

type Route {
    summary:String
    legs:[Leg]
    overview_polyline: PolyLine
    bounds:Bounds
}
type Bounds {
    northeast: LatLng!
    southwest: LatLng!
}


type PolyLine {
    points: String
}

type Leg {
    distance:Value
    duration:Value
    start_location:LatLng
    end_location:LatLng
    steps:[Step]
}

type Step{
    distance:Value
    duration:Value
    start_location:LatLng
    end_location:LatLng
}

type LatLng{
    lat:Float
    long:Float
}

type Value {
    text:String
    value:Int
}

type Ride {
    id:ID!
    start:Stay
    end:Stay
    route:Route
}
type Day {
    id:ID!
    date:Date
    locked:Boolean
}

scalar Date

type Stay {
    id:ID!
    location:Location
    locked:Boolean
}
type Guide {
    id:ID!
    user:User
    dailyLimitKm:Int
    stays: [Stay]
}
type User {
    id:ID!
    email:String
    username:String
}

input AddressInput {
    address1:String
    address2:String
    city:String
    country:String
}

type ItemId {
    id:ID
}

type Mutation {
    addStayFromAddress(guideId:ID!,locked:Boolean,label:String,address:AddressInput):ItemId
    addStayFromLagLng(guideId:ID!,locked:Boolean,label:String,lat:Float,long:Float):ItemId
    moveStay(lat:Float,long:Float,locationId:ID):ItemId
}

type Subscription {
    guide: Guide!
}

type Query {
    allAddresss: [Address!]!
    address(id:ID):Address
    allDays: [Day!]!
    day(id:ID):Day
    allGuides: [Guide!]!
    guide(id:ID):Guide
    allLocations: [Location!]!
    location(id:ID):Location
    allRides: [Ride!]!
    ride(id:ID):Ride
    allStays: [Stay!]!
    stay(id:ID):Stay
    allUsers: [User!]!
    user(id:ID):User
}
`