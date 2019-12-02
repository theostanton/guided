import ReactMapGL, {Marker} from "react-map-gl";
import React, {Component} from "react";
import Pin from "./pin";
import {Guide, Stay} from "../../types";
import {gql} from "apollo-boost";
import {client, addStayFromLatLong} from "../../data/graphql";
import {Query} from "react-apollo";

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
}`;

type MarkerProps = {
    guide?: Guide
};

class Markers extends React.Component<MarkerProps> {

    render() {
        const {guide} = this.props;
        if (!guide) {
            return <div/>;
        }
        const stays: Stay[] = guide?.stays;
        return (stays && stays.map((stay, index) => {
            return (
                <Marker key={`marker-${index}`} longitude={stay.spot.location.long} latitude={stay.spot.location.lat}>
                    <Pin size={20} onClick={() => {
                        console.log("click");
                    }}/>

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
                {({loading, error, data,refetch}: any) => {
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
                    </ReactMapGL>);
                }}
            </Query>
        );
    }
}
