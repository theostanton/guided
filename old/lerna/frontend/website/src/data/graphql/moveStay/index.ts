import {client} from "../index";
import {gql} from "apollo-boost";

const MUTATION = gql`
    mutation MoveStay($locationId:ID!,$lat:Float!,$long:Float!){
        moveStay(locationId:$locationId,lat:$lat,long:$long){
            id
        }
    }
`;

export default async function (locationId: string, lat: number, long: number): Promise<void> {
    const result = await client.mutate({
        mutation: MUTATION,
        variables: {
            locationId,
            lat,
            long,
        },
    });
    console.log("result", result);
}