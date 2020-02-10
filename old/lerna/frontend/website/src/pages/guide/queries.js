"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_boost_1 = require("apollo-boost");
exports.QUERY = apollo_boost_1.gql `
    query Guide($slug:String!){
        guide(slug:$slug){
            id
            user{
                email
                username
            }
            stays{
                id
                locked
                nights
                position
                arrivalDate
                location{
                    id
                    label
                    lat
                    long
                }
            }
        }
        rides:allRides(guideSlug: $slug){
            id
            start{
                id
            }
            end{
                id
            }
            durationMinutes
            path{
                lat
                long
            }
            route{
                summary
                #                overview_polyline{
                #                    points
                #                }
                #                legs{
                #                    start_location{
                #                        lat
                #                        long
                #                    }
                #                    end_location{
                #                        lat
                #                        long
                #                    }
                #                    distance{
                #                        text
                #                        value
                #                    }
                #                    duration{
                #                        text
                #                        value
                #                    }
                #                }
            }
        }
    }
`;
