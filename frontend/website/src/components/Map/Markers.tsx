import React from "react";
import {moveStay} from "../../data/graphql";
import {Marker} from "react-map-gl";
import Pin from "./pin";
import {Popup} from "semantic-ui-react";
import {Guide, Stay} from "@guided/common";

type MarkersProps = {
    guide?: Guide
};

export class Markers extends React.Component<MarkersProps> {

    async onDragEnd({lngLat}: any, locationId: string) {
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
                        longitude={stay.location.long}
                        latitude={stay.location.lat}
                        draggable
                        onDragEnd={async (args) => {
                            await this.onDragEnd(args, stay.location.id)
                        }}
                >
                    <Popup
                        content={stay.location.label}
                        trigger={<Pin size={20}
                                      onClick={() => {
                                          console.log("click");
                                      }}
                        />}/>


                </Marker>);
        }));
    }
}