// language=GraphQL
export default `
    schema {
        query: Query
        mutation: Mutation
        subscription: Subscription
    }

    type Location {
        id:ID!
        label:String
        lat:Float!
        long:Float!
        address1:String
        address2:String
        city:String
        country:String
        processed:Boolean!
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
        lat:Float!
        long:Float!
    }

    type Value {
        text:String
        value:Int
    }

    type Ride {
        id:ID!
        start:Stay
        end:Stay
        durationMinutes:Int
        route:Route
        path:[LatLng!]
    }

    scalar Date

    type Stay {
        id:ID!
        nights:Int!
        location:Location!
        arrivalDate:Date
        position:Int
        locked:Boolean!
    }
    type Guide {
        id:ID!
        user:User!
        startDate:Date!
        title:String!
        slug:String!
        rideLimitMinutes:Int!
        stays: [Stay!]!
    }
    type User {
        id:ID!
        email:String!
        username:String!
    }

    input AddressInput {
        address1:String!
        address2:String
        city:String!
        country:String!
    }

    type ItemId {
        id:ID!
    }

    type Mutation {
        addStayFromAddress(guideId:ID!,locked:Boolean!,label:String!,address:AddressInput!,nights:Int!):ItemId
        addStayFromLagLng(guideId:ID!,locked:Boolean!,label:String,lat:Float!,long:Float!,nights:Int!):ItemId
        moveStay(lat:Float!,long:Float!,locationId:ID!):ItemId
        deleteStay(stayId:ID!):ItemId
        deleteAllStays(guideId:ID!):ItemId
        updateStay(id:ID!,locked:Boolean!,label:String!,nights:Int!):ItemId
        createUser(email:String!,username:String!):ItemId
        createGuide(userId:ID!,title:String!):ItemId
    }

    type Subscription {
        guide: Guide!
    }

    type Query {
        allGuides: [Guide!]!
        guide(slug:String!):Guide
        allLocations: [Location!]!
        location(id:ID):Location
        allRides(guideSlug:String!): [Ride!]!
        ride(id:ID):Ride
        allStays: [Stay!]!
        stay(id:ID):Stay
        allUsers: [User!]!
        user(id:ID):User
    }
`