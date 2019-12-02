import ReactMapGL, {Marker} from 'react-map-gl';
import React, {Component} from "react";
import Pin from './pin'
import {Guide} from "../../types";
import {gql} from "apollo-boost";
import {client, addStayFromLatLong} from "../../data/graphql";

type State = {
    viewport: {
        width: number,
        height: number,
        latitude: number,
        longitude: number,
        zoom: number
    },
    guide?: Guide
}

const QUERY = gql`{
    allRides{
        start{
            location{
                lat
                long
            }
        }
        end{
            location{
                lat
                long
            }
        }
    }
    guide(id:1){
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

export default class Map extends Component<{}, State> {

    state: State = {
        viewport: {
            width: 400,
            height: 400,
            latitude: 51.5007,
            longitude: -0.1246,
            zoom: 8
        }
    };

    async componentDidMount(): Promise<void> {
        // const result = await client.query<{ guide: Guide }>({
        //     query: QUERY
        // });
        // this.setState({
        //     guide: result.data.guide
        // })
    }

    renderGuideMarkers(): any {
        const stays = this.state.guide?.stays;
        return (stays && stays.map((stay, index) => {
            return (
                <Marker key={`marker-${index}`} longitude={stay.spot.location.long} latitude={stay.spot.location.lat}>
                    <Pin size={20} onClick={() => {
                        console.log('click')
                    }}/>

                </Marker>)
        }))
    }

    render() {
        console.log('render');
        return (
            <ReactMapGL
                // mapStyle={mapStyle}
                mapboxApiAccessToken={'pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazNscGM2djAwdHYwM29vN3l6NWdyY2QxIn0.L4-DzQEX16suphipPXgDmw'}
                {...this.state.viewport}
                // onClick={async (event) => {
                //     console.log('saving',event.lngLat);
                //     if (this.state.guide) {
                //         await addStayFromLatLong(this.state.guide.id, event.lngLat[1], event.lngLat[0], 'On click')
                //     }
                //
                // }}
                height={'40em'}
                width={'100%'}
                onViewportChange={(viewport) => this.setState({viewport})}>

                {this.renderGuideMarkers()}
            </ReactMapGL>
        );
    }
}
