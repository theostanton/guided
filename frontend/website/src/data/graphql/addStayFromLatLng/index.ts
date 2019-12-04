import {client} from "../index";
import {gql} from "apollo-boost";

const MUTATION = gql`
    mutation AddStay($guideId:ID!,$lat:Float!,$long:Float,$label:String,$locked:Boolean){
        addStayFromLagLng(guideId:$guideId,lat:$lat,long:$long,label:$label,locked:$locked){
            id
        }
    }
`;

export default async function (guideId: number, lat: number, long: number, label: string | undefined = undefined, locked: boolean = false): Promise<void> {
    const result = await client.mutate({
        mutation: MUTATION,
        variables: {
            guideId,
            lat,
            long,
            label,
            locked,
        },
    });
    console.log("result", result);
}