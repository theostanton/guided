import ReactMapGL, {Marker} from "react-map-gl";
import React, {Component} from "react";
import Pin from "./pin";
import {Guide, Stay} from "../../types";
import {gql} from "apollo-boost";
import {client, addStayFromLatLong} from "../../data/graphql";
import {useLazyQuery, useQuery} from "@apollo/react-hooks";
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

const SUBSCRIPTION = gql`
    subscription OnGuideUpdate {
        guide{
            stays{
                id
                spot{
                    location{
                        label
                        lat
                        long
                    }
                }
            }
        }
    }
`;

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
    data?: { guide: Guide }
    subscribeToMore: any,
};

class Markers extends React.Component<MarkerProps> {

    componentDidUpdate(prevProps: Readonly<MarkerProps>, prevState: Readonly<{}>, snapshot?: any): void {
        this.props.subscribeToMore();
    }

    componentDidMount(): void {
        this.props.subscribeToMore();
    }

    render() {
        console.log("props", this.props);
        const {data} = this.props;
        if (!data) {
            return "lol";
        }
        const stays: Stay[] = data && data.guide?.stays;
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
            <Query<Guide> query={QUERY} pollInterval={200}>
                {({loading, error, data, subscribeToMore}: any) => {
                    console.log("data", data);
                    const guide: Guide | undefined = data && data.guide;

                    const more = () => subscribeToMore({
                        document: SUBSCRIPTION,

                        updateQuery: (prev: any, {subscriptionData}: any) => {
                            console.log("subscriptionData", subscriptionData);
                            if (!subscriptionData.data) { return prev; }
                            return {
                                id: 1,
                                guide: {
                                    id: 1,
                                    stays: [],
                                },
                            };
                        },
                    });

                    return (<ReactMapGL
                        mapboxApiAccessToken={"pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazNscGM2djAwdHYwM29vN3l6NWdyY2QxIn0.L4-DzQEX16suphipPXgDmw"}
                        {...this.state.viewport}
                        onClick={async (event) => {
                            if (guide) {
                                await addStayFromLatLong(guide.id, event.lngLat[1], event.lngLat[0], "On click");
                            }

                        }}
                        height={"40em"}
                        width={"100%"}
                        onViewportChange={(viewport) => this.setState({viewport})}>

                        <Markers subscribeToMore={more} data={data}/>
                    </ReactMapGL>);
                }}
            </Query>
        );
    }
}
