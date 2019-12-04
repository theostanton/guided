import ReactMapGL, {FlyToInterpolator} from "react-map-gl";

import React, {Component} from "react";
import {addStayFromLatLong} from "../../data/graphql";
import {Markers} from "./Markers";
import {Data} from "../../pages/index/types";
import Rides from "./Rides";
import {Store} from "../../stores/Store";
import {observer} from "mobx-react";
import WebMercatorViewport from 'viewport-mercator-project';


type State = {
    viewport: {
        width: number,
        height: number,
        latitude: number,
        longitude: number,
        zoom: number,
    }
};

type Props = {
    store: Store
}

@observer
export default class Map extends Component<Props, State> {

    state: State = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 51.5007,
            longitude: -0.1246,
            zoom: 8,
        }
    };

    render(): React.ReactElement {

        let viewport: any;
        if (this.props.store.selectedRide) {
            const startLat = this.props.store.selectedRide.start.location.lat;
            const startLong = this.props.store.selectedRide.start.location.long;
            const endLat = this.props.store.selectedRide.end.location.lat;
            const endLong = this.props.store.selectedRide.end.location.long;
            console.log('startLat', startLat, 'startLong', startLong)
            const {longitude, latitude, zoom} = new WebMercatorViewport(this.state.viewport)
                .fitBounds([[startLong, startLat], [endLong, endLat]], {
                    padding: 20,
                    offset: [0, -100]
                });

            viewport = {
                ...this.state.viewport,
                longitude,
                latitude,
                zoom,
                transitionDuration: 5000,
                transitionInterpolator: new FlyToInterpolator()
            }
        } else {
            viewport = this.state.viewport;
        }

        return (
            <ReactMapGL
                mapboxApiAccessToken={"pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazNscGM2djAwdHYwM29vN3l6NWdyY2QxIn0.L4-DzQEX16suphipPXgDmw"}
                {...viewport}
                // onClick={async (event) => {
                //     console.log('event',event)
                //     // if (guide) {
                //     //     await addStayFromLatLong(guide.id, event.lngLat[1], event.lngLat[0], "On click");
                //     //     this.props.store.refetch()
                //     // }
                //
                // }}
                height={"100%"}
                width={"100%"}
                // onViewportChange={(viewport) => this.setState({viewport})}
            >

                <Markers guide={this.props.store.guide}/>
                <Rides rides={this.props.store.rides} selectedRide={this.props.store.selectedRide}/>
            </ReactMapGL>
        );
    }
}
