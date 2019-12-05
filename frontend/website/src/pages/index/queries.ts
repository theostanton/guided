import {gql} from "apollo-boost";


export const QUERY = gql`{
    guide(id:1){
        id
        user{
            email
            username
        }
        stays{
            location{
                id
                label
                lat
                long
            }
        }
    }
    rides:allRides{
        id
        start{
            id
            location{
                label
                lat
                long
            }
        }
        end{
            id
            location{
                label
                lat
                long
            }
        }
        route{
            summary
            overview_polyline{
                points
            }
            legs{
                start_location{
                    lat
                    long
                }
                end_location{
                    lat
                    long
                }
                distance{
                    text
                    value
                }
                duration{
                    text
                    value
                }
            }
        }
    }
}`;