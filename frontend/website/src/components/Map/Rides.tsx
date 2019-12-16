import React from "react";
import {pathToGeoJson, polylineToGeoJson} from "../../data/maps/polyline";
// @ts-ignore
import {Layer, Source} from "react-map-gl";
import {Ride} from "@guided/common";

type Props = {
    rides?: Ride[]
    selectedRide: Ride|undefined
    highLightedRide: Ride|undefined
}

export default class Rides extends React.Component<Props> {
    render(): React.ReactElement {
        const {rides} = this.props;
        if (!rides) {
            return <div/>;
        }

        const dataLayer = {
            paint: {
                'line-width': 1,
                'line-color': '#444444'
            }
        };
        const selectedDataLayer = {
            paint: {
                'line-width': 1,
                'line-color': '#000000'
            }
        };
        const highlightedDataLayer = {
            paint: {
                'line-width': 3,
                'line-color': '#444444'
            }
        };

        return (<div>
                {rides && rides
                    .map((ride: Ride) => {
                        const geoJson = pathToGeoJson(ride.path);

                        const isSelected = this.props.selectedRide?.id === ride.id;
                        const isHighlighted = this.props.highLightedRide?.id === ride.id;

                        const layerId = `ride-layer-${ride.id}`;
                        const sourceId = `ride-source-${ride.id}`;
                        return (
                            [
                                <Source key={sourceId} type="geojson" data={geoJson} id={sourceId}/>,
                                !isSelected && !isHighlighted && <Layer key={layerId} {...dataLayer} type={'line'} source={sourceId}/>,
                                isSelected === true &&
                                <Layer key={`${layerId}-selected`} {...selectedDataLayer} source={sourceId}
                                       type={'line'}/>,
                                isHighlighted === true &&
                                <Layer key={`${layerId}-highlighted`} {...highlightedDataLayer} source={sourceId}
                                       type={'line'}/>
                            ]
                        )
                    })
                }
            </div>
        )
    }

}
