import gql from "graphql-tag"

export const OnCreateGuide = gql`
    subscription OnCreateGuide{
        onCreateGuide{
            id
        }
    }
`

export const OnUpdateGuide = gql`
    subscription OnUpdateGuide{
        onUpdateGuide{
            id
        }
    }
`