import React from "react";
import {moveStay} from "../../data/graphql";
import {Marker, Popup} from "react-map-gl";
import {Guide, Stay} from "@guided/common";
import {Icon} from "semantic-ui-react";

type Props = {
    guide?: Guide
}

type State = {
    showPopupForId: string | undefined
}


function createPopup(stay: Stay, showPopupForId: string | undefined) {
    return (showPopupForId === stay.id &&
        <Popup key={`popup-${stay.id}`} latitude={stay.location.lat} longitude={stay.location.long}><h1>{stay.location.label}</h1>
        </Popup>)

}

export class Markers extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            showPopupForId: undefined
        }
    }

    createMarker(stay: Stay, index: number, onDragEnd: any): React.ReactElement {

        const pinStyle = {
            cursor: 'pointer',
            fill: '#000',
            stroke: 'none'
        };

        return <Marker key={`marker-${index}`}
                       longitude={stay.location.long}
                       latitude={stay.location.lat}
                       draggable
                       onDragEnd={async (args) => {
                           await onDragEnd(args, stay.location.id)
                       }}

        >

            <Icon name={'marker'}
                  color={stay.locked ? 'black' : 'grey'}
                // onMouseEnter={() => {
                //     console.log('onMouseEnter')
                // }}
                  style={{
                      ...pinStyle
                  }}

                  onMouseEnter={() => {
                      this.setState({
                          showPopupForId: stay.id
                      })
                  }}
                  onMouseLeave={() => {
                      this.setState({
                          showPopupForId: undefined
                      })
                  }}
            />
        </Marker>
    }

    async onDragEnd({lngLat}: any, locationId: string) {
        await moveStay(locationId, lngLat[1], lngLat[0])
    }

    render() {

        const {guide} = this.props;
        if (!guide) {
            return <div/>;
        }
        const stays: Stay[] = guide?.stays;
        return (stays && stays.map((stay, index) => {
            return ([this.createMarker(stay, index, this.onDragEnd), createPopup(stay, this.state.showPopupForId)]);
        }));
    }
}