import {client} from "../index";
import {gql} from "apollo-boost";
import {Address} from "../../../types";

const QUERY = gql`
    mutation AddStay($guideId:ID!,$address:AddressInput!,$label:String,$locked:Boolean){
        addStayFromAddress(guideId:$guideId,address:$address,label:$label,locked:$locked){
            id
        }
    }
`;

export default async function (guideId: number, address: Address, label: string | undefined = undefined, locked: boolean = false): Promise<number> {
    const result = await client.query({
        query: QUERY,
        variables: {
            guideId,
            address,
            label,
            locked,
        },
    });
    return -1;
}