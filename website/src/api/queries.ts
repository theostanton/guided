import gql from "graphql-tag"

export const AllGuideTitles = gql`
    query AllGuideTitles{
        listGuides{
            items{
                id
                title
                slug
            }
        }

    }
`

export const GetGuideBySlug = gql`
    query GetGuideBySlug($slug: String!){
        listGuides(
            filter:{
                slug: {
                    eq:$slug
                }
            }
            limit: 1
        ){
            items{
                id
                title
                slug
            }
        }
    }
`