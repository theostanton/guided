import {client} from "../index";
import {gql} from "apollo-boost";
import {MutationToDeleteAllStaysArgs, MutationToDeleteStayArgs} from "../../../../../../backend/common/src";

const MUTATION = gql`
    mutation DeleteAllStays($guideId:ID!){
        deleteAllStays(guideId: $guideId){
            id
        }
    }
`;

export default async function (variables:MutationToDeleteAllStaysArgs): Promise<void> {
    const result = await client.mutate({
        mutation: MUTATION,
        variables,
    });
    console.log("result", result);
}