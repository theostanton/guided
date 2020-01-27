import gql from "graphql-tag"

export const CreateGuide = gql`
    mutation CreateGuide($input: CreateGuideInput!){
        createGuide(input: $input){
            id
            title
            slug
        }
    }
`

export const DeleteGuide = gql`
    mutation DeleteGuide($guideId:ID!){
        deleteGuide(input: {
            id: $guideId
        }){
            id
        }
    }
`