import {client} from "../index";
import {gql} from "apollo-boost";
import {MutationToDeleteStayArgs} from "@guided/common";

const MUTATION = gql`
    mutation DeleteStay($stayId:ID!){
        deleteStay(stayId: $stayId){
            id
        }
    }
`;

export default async function (variables: MutationToDeleteStayArgs): Promise<void> {
    const result = await client.mutate({
        mutation: MUTATION,
        variables,
    });
    console.log("result", result);
}