import gql from "graphql-tag"

export const listAllGuides = gql`
    query ListMyGuides{
        listGuides{
            items{
                id
                title
                spots{
                    items{
                        guideID
                    }
                }
            }
        }
    }
`

export const listAllGuideInfo = gql`
    query ListAllMyGuideInfo{
        listGuides{
            items{
                id
                spots{
                    items{
                        id
                        label
                        nights
                    }
                }
                rides{
                    items{
                        id
                        fromSpotID
                        toSpotID
                    }
                }
            }
        }
    }
`