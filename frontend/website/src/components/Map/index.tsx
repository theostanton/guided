import ReactMapGL, {Marker} from "react-map-gl";

// @ts-ignore
import MapGL, {Source, Layer} from 'react-map-gl';

import React, {Component} from "react";
import Pin from "./pin";
import {Guide, Ride, Stay} from "../../types";
import {gql} from "apollo-boost";
import {client, addStayFromLatLong} from "../../data/graphql";
import {Query} from "react-apollo";
import {polylineToGeoJson} from "../../data/maps/polyline";

type State = {
    viewport: {
        width: number,
        height: number,
        latitude: number,
        longitude: number,
        zoom: number,
    },
};

const QUERY = gql`{
    guide(id:1){
        id
        stays{
            spot{
                location{
                    label
                    lat
                    long
                }
            }
        }
    }
    rides:allRides{
        route{
            overview_polyline{
                points
            }
            legs{
                distance{
                    text
                }
            }
        }
    }
}`;

type RidesProps = {
    rides?: Ride[]
}

class Rides extends React.Component<RidesProps> {
    render() {
        const {rides} = this.props;
        if (!rides) {
            return <div/>;
        }

        const geoJson = polylineToGeoJson(rides[0].route.overview_polyline.points);

        // For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
        const dataLayer = {
            id: 'data',
            type: 'line',
            paint: {
                'line-color': '#ff00ff'
            }
        };

        return (<Source type="geojson" data={geoJson}>
            <Layer {...dataLayer} />
        </Source>)

    }

}

type MarkersProps = {
    guide?: Guide
};

class Markers extends React.Component<MarkersProps> {

    render() {
        const {guide} = this.props;
        if (!guide) {
            return <div/>;
        }
        const stays: Stay[] = guide?.stays;
        return (stays && stays.map((stay, index) => {
            return (
                <Marker key={`marker-${index}`} longitude={stay.spot.location.long} latitude={stay.spot.location.lat}>
                    <Pin size={20}
                         onClick={() => {
                             console.log("click");
                         }}
                    />

                </Marker>);
        }));
    }
};

export default class Map extends Component<{}, State> {

    state: State = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 51.5007,
            longitude: -0.1246,
            zoom: 8,
        },
    };

    render() {
        return (
            <Query<Guide> query={QUERY} pollInterval={2000}>
                {({loading, error, data, refetch}: any) => {
                    const guide: Guide | undefined = data && data.guide;

                    return (<ReactMapGL
                        mapboxApiAccessToken={"pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazNscGM2djAwdHYwM29vN3l6NWdyY2QxIn0.L4-DzQEX16suphipPXgDmw"}
                        {...this.state.viewport}
                        onClick={async (event) => {
                            if (guide) {
                                await addStayFromLatLong(guide.id, event.lngLat[1], event.lngLat[0], "On click");
                                refetch()
                            }

                        }}
                        height={"40em"}
                        width={"100%"}
                        onViewportChange={(viewport) => this.setState({viewport})}>

                        <Markers guide={data?.guide}/>
                        <Rides rides={data?.rides}/>
                    </ReactMapGL>);
                }}
            </Query>
        );
    }
}
