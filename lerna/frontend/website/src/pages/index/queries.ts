import {gql} from "apollo-boost";


export const QUERY = gql`
    query GuidesQuery{
        allGuides{
            id
            title
            slug
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
    }`;
