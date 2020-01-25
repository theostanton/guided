import React from "react";
import {moveStay} from "../../data/graphql";
import {Marker, Popup} from "react-map-gl";
import {Guide, Stay} from "@guided/common";
import {Icon, SemanticCOLORS, Header, Segment, Grid, GridColumn, GridRow} from "semantic-ui-react";

type Props = {
    highlightedId: string | undefined
    guide?: Guide
}

type State = {
    showPopupForId: string | undefined
}


function createPopup(stay: Stay, showPopupForId: string | undefined) {


    const date = new Date(stay.arrivalDate);

    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        month: 'short',
        day: '2-digit'
    }).format(date);

    if (stay.locked) {

        return (<Popup closeButton={false} key={`popup-${stay.id}`} latitude={stay.location.lat}
                       longitude={stay.location.long}>
            <Segment.Inline>
                {stay.position}
            </Segment.Inline>
        </Popup>)
    }

    return (showPopupForId === stay.id &&
        <Popup closeButton={false} key={`popup-${stay.id}`} latitude={stay.location.lat} longitude={stay.location.long}>
            <Segment.Inline>
                <Grid>
                    <GridRow>
                        <GridColumn>
                            <Header>{stay.location.label}</Header>
                        </GridColumn>
                    </GridRow>
                    <GridRow columns={12}>
                        <GridColumn>
                            <Icon name={'moon'}>
                                <h5>{stay.nights}</h5>
                            </Icon>
                        </GridColumn>
                        <GridColumn>
                            <Icon name={'lock'}>
                                <h5>{stay.locked ? 'Locked' : 'Unlocked'}</h5>
                            </Icon>
                        </GridColumn>
                        <GridColumn>
                            <Icon textAlign='center' name={'calendar'} style={{'white-space': 'nowrap'}}>
                                <h5>{formattedDate}</h5>
                            </Icon>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Segment.Inline>
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

        let color: SemanticCOLORS;
        if (this.props.highlightedId === stay.id) {
            color = 'red'
        } else if (stay.locked === true) {
            color = 'black'
        } else {
            color = 'grey'
        }


        return <Marker key={`marker-${index}`}
                       longitude={stay.location.long}
                       latitude={stay.location.lat}
                       draggable
                       onDragEnd={async (args) => {
                           await onDragEnd(args, stay.location.id)
                       }}

        >

            <Icon name={'marker'}
                  color={color}
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