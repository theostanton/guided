import {gql} from "apollo-boost";

export const QUERY = gql`
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