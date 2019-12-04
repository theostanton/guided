import {client} from "../index";
import {gql} from "apollo-boost";
import {Address, AddressInput, MutationToAddStayFromAddressArgs} from "@guided/common";

const QUERY = gql`
    mutation AddStay($guideId:ID!,$address:AddressInput!,$label:String,$locked:Boolean){
        addStayFromAddress(guideId:$guideId,address:$address,label:$label,locked:$locked){
            id
        }
    }
`;

export default async function (input: MutationToAddStayFromAddressArgs): Promise<void> {
    await client.query({
        query: QUERY,
        variables: input,
    });
}