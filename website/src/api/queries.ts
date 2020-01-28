import gql from "graphql-tag"

export const AllGuideTitlesForUser = gql`
    query AllGuideTitlesForUser($owner:String!){
        listGuides(filter: {
            owner: {
                eq: $owner
            }
        }){
            items{
                id
                title
                slug
            }
        }

    }
`

export const GetGuideBySlug = gql`
    query GetGuideBySlug($slug: String!,$owner:String!){
        listGuides(
            filter:{
                owner: {
                    eq: $owner
                },
                slug: {
                    eq:$slug
                }
            }
        ){
            items{
                id
                title
                slug
            }
        }
    }
`