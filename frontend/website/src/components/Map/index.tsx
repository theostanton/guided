import ReactMapGL, {FlyToInterpolator, Popup, TransitionInterpolator} from "react-map-gl";

import React, {Component} from "react";
import {addStayFromLatLong} from "../../data/graphql";
import {Markers} from "./Markers";
import {Data} from "../../pages/index/types";
import Rides from "./Rides";
import {Store} from "../../stores/Store";
import {observer} from "mobx-react";
import WebMercatorViewport from 'viewport-mercator-project';
import {Logger} from "@guided/common";


type State = {
    viewport: {
        width: number,
        height: number,
        latitude: number,
        longitude: number,
        zoom: number
        transitionDuration?: number
        transitionInterpolator?: TransitionInterpolator
    }
};

type Props = {
    store: Store
}

const logger = new Logger('Map');

export default class Map extends Component<Props, State> {

    state: State = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 51.5007,
            longitude: -0.1246,
            zoom: 8
        }
    };

    componentDidMount(): void {
        console.log('componentDidMount')
        this.props.store.mapCallback = () => {
            console.log('callback selectedRide', this.props.store.selectedRide);
            if (this.props.store.selectedRide) {

                const startStay = this.props.store.getStay(this.props.store.selectedRide.start.id)
                const endStay = this.props.store.getStay(this.props.store.selectedRide.end.id)

                const startLat = startStay.location.lat;
                const startLong = startStay.location.long;
                const endLat = endStay.location.lat;
                const endLong = endStay.location.long;

                const {longitude, latitude, zoom} = new WebMercatorViewport(this.state.viewport)
                    .fitBounds([[startLong, startLat], [endLong, endLat]], {
                        padding: 20,
                        offset: [0, -100]
                    });


                this.setState({
                    viewport: {
                        height: this.state.viewport.height,
                        width: this.state.viewport.width,
                        longitude,
                        latitude,
                        zoom,
                        transitionDuration: 1000,
                        transitionInterpolator: new FlyToInterpolator()
                    }
                });
            } else {
                this.setState({
                    viewport: {
                        width: 400,
                        height: 400,
                        latitude: 51.5007,
                        longitude: -0.1246,
                        zoom: 8
                    }
                })
            }
        }
    }

    render(): React.ReactElement {

        return (
            <ReactMapGL
                mapboxApiAccessToken={"pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazNscGM2djAwdHYwM29vN3l6NWdyY2QxIn0.L4-DzQEX16suphipPXgDmw"}
                {...this.state.viewport}
                onClick={async (event) => {
                    if (this.props.store.hasData()) {
                        const guide = this.props.store.guide;
                        await addStayFromLatLong({
                            guideId: guide.id,
                            nights: 1,
                            lat: event.lngLat[1],
                            long: event.lngLat[0],
                            locked: true
                        });
                        this.props.store.refetch()
                    }

                }}
                onHover={(event) => {
                    if (event.type === 'pointermove') {
                        // return
                    }
                    // logger.debug('onHover');
                    // event.features
                    //     .filter(feature => {
                    //         return !feature.layer.id.startsWith('landcover_') && !feature.layer.id.startsWith('landuse_')
                    //     })
                    //     .forEach(feature => {
                    //         logger.json(feature.layer.id);
                    //     })
                    // logger.debug(event.target);
                    // logger.json(event.features);
                }}
                height={"100%"}
                width={"100%"}
                onViewportChange={(viewport) => {
                    this.setState({viewport})
                }}
            >
                <Markers guide={this.props.store.guide}
                         highlightedId={this.props.store.highlightedStay?.id}/>
                <Rides rides={this.props.store.rides}
                       highLightedRide={this.props.store.highlightedRide}
                       selectedRide={this.props.store.selectedRide}/>
            </ReactMapGL>
        );
    }
}
