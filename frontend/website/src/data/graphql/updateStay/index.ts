import {client} from "../index";
import {gql} from "apollo-boost";
import {MutationToUpdateStayArgs} from "@guided/common";

const MUTATION = gql`
    mutation UpdateStay($id:ID!,$locked:Boolean!,$label:String!,$nights:Int!){
        updateStay(id:$id,locked: $locked,label:$label,nights:$nights){
            id
        }
    }
`;

export default async function (variables: MutationToUpdateStayArgs): Promise<void> {
    const result = await client.mutate({
        mutation: MUTATION,
        variables,
    });
    console.log("result", result);
}