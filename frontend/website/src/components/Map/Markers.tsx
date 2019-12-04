import {Guide, Stay} from "../../types";
import React from "react";
import {moveStay} from "../../data/graphql";
import {Marker} from "react-map-gl";
import Pin from "./pin";
import {Popup} from "semantic-ui-react";

type MarkersProps = {
    guide?: Guide
};

export class Markers extends React.Component<MarkersProps> {

    async onDragEnd({lngLat}: any, locationId: number) {
        console.log('lngLat', lngLat, 'locationId', locationId)
        await moveStay(locationId, lngLat[1], lngLat[0])
    }

    render() {
        const {guide} = this.props;
        if (!guide) {
            return <div/>;
        }
        const stays: Stay[] = guide?.stays;
        return (stays && stays.map((stay, index) => {
            return (
                <Marker key={`marker-${index}`}
                        longitude={stay.spot.location.long}
                        latitude={stay.spot.location.lat}
                        draggable
                        onDragEnd={async (args) => {
                            await this.onDragEnd(args, stay.spot.location.id)
                        }}
                >
                    <Popup
                        content={stay.spot.location.label}
                        trigger={<Pin size={20}
                                      onClick={() => {
                                          console.log("click");
                                      }}
                        />}/>


                </Marker>);
        }));
    }
}