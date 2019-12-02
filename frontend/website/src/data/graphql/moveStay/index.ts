import {client} from "../index";
import {gql} from "apollo-boost";
import {Address} from "../../../types";

const MUTATION = gql`
    mutation MoveStay($locationId:ID!,$lat:Float!,$long:Float){
        moveStay(locationId:$locationId,lat:$lat,long:$long){
            id
        }
    }
`;

export default async function (locationId: number, lat: number, long: number): Promise<number> {
    const result = await client.mutate({
        mutation: MUTATION,
        variables: {
            locationId,
            lat,
            long,
        },
    });
    console.log("result", result);
    return -1;
}