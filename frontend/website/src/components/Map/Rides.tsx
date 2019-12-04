import React from "react";
import {polylineToGeoJson} from "../../data/maps/polyline";
// @ts-ignore
import {Layer, Source} from "react-map-gl";
import {Ride} from "@guided/common";

type Props = {
    rides?: Ride[]
    selectedRide?: Ride
}

export default class Rides extends React.Component<Props> {
    render(): React.ReactElement {
        const {rides} = this.props;
        if (!rides) {
            return <div/>;
        }

        const dataLayer = {
            paint: {
                'line-color': '#ffff00'
            }
        };
        const selectedDataLayer = {
            paint: {
                'line-color': '#ff00ff'
            }
        };

        return (<div>
                {rides && rides
                    .filter(ride => {
                        return ride.route
                    })
                    .map(ride => {

                        const geoJson = polylineToGeoJson(ride.route.overview_polyline.points);

                        const isSelected = this.props.selectedRide?.id === ride.id;

                        const layerId = `ride-layer-${ride.id}`;
                        const sourceId = `ride-source-${ride.id}`;
                        return (
                            [<Source key={sourceId} type="geojson" data={geoJson} id={sourceId}/>,
                                <Layer key={layerId} {...dataLayer} type={'line'} source={sourceId}/>,
                                isSelected === true &&
                                <Layer key={`${layerId}-selected`} {...selectedDataLayer}  source={sourceId} type={'line'}/>]
                        )
                    })
                }
            </div>
        )
    }

}
