import React from "react";
import {Segment, Card} from "semantic-ui-react";
import RideItem from "./RideItem";
import {observer} from "mobx-react";
import {Store} from "../../../stores/Store";

type Props = {
    store: Store
}

@observer
export default class RideList extends React.Component<Props> {



    render(): React.ReactElement {
        if (this.props.store.hasData()) {
            const rides = this.props.store.rides;
            return <Card.Group style={{'height': '100%', 'overflowY': 'scroll', 'backgroundColour': '#00ff00'}}>
                {rides.map(ride => {
                    return (
                        [<Card fluid onMouseEnter={() => {
                            console.log('onEnter')
                        }} attached key={ride.id}>
                            <RideItem ride={ride} selectRide={(ride) => {
                                this.props.store.selectedRide = ride
                            }}/>
                        </Card>,<Card fluid onMouseEnter={() => {
                            console.log('onEnter')
                        }} attached key={`${ride.id}-1`}>
                            <RideItem ride={ride} selectRide={(ride) => {
                                this.props.store.selectedRide = ride
                            }}/>
                        </Card>])
                })}
            </Card.Group>
        } else {
            return <Segment style={{height: '100%'}} loading/>
        }
    }
}