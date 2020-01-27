import gql from "graphql-tag"

export const OnCreateGuide = gql`
    subscription OnCreateGuide($owner:String!){
        onCreateGuide(owner:$owner){
            id
        }
    }
`

export const OnUpdateGuide = gql`
    subscription OnUpdateGuide($owner:String!){
        onUpdateGuide(owner:$owner){
            id
        }
    }
`