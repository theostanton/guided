import {client} from "../index";
import {gql} from "apollo-boost";
import {MutationToAddStayFromLagLngArgs} from "../../../../../../backend/common/src";

const MUTATION = gql`
    mutation AddStay($guideId:ID!,$lat:Float!,$long:Float!,$label:String!,$locked:Boolean,!$nights:Int!){
        addStayFromLagLng(guideId:$guideId,lat:$lat,long:$long,label:$label,locked:$locked,nights: $nights){
            id
        }
    }
`;

export default async function (variables: MutationToAddStayFromLagLngArgs): Promise<void> {
    const result = await client.mutate({
        mutation: MUTATION,
        variables,
    });
    console.log("result", result);
}