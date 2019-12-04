import {Ride} from "../../../types";
import React, {ReactElement} from "react";
import {Grid, Header, Segment, Card, GridColumn, Button} from "semantic-ui-react";
import {observable} from "mobx";
import {Store} from "../../../stores/Store";

type Props = {
    ride: Ride
    selectRide: (ride: Ride) => void
}


export default class RideItem extends React.Component<Props> {

    render(): ReactElement {
        let distanceMeters: number = 0;
        let durationSeconds: number = 0;
        this.props.ride.route.legs.forEach(leg => {
            if (leg.distance) {
                distanceMeters += leg.distance.value;
            }
            if (leg.duration) {
                durationSeconds += leg.duration.value;
            }
        });
        return (
            <>
                <Card.Content>
                    <Card.Header key={this.props.ride.id} as='h5'>
                        {this.props.ride.route.summary}
                    </Card.Header>
                    <Grid columns={2}>
                        <GridColumn floated='left' textAlign='center'>
                            <Card.Meta>
                                {Math.floor(distanceMeters / 1000)}km
                            </Card.Meta>
                        </GridColumn>
                        <GridColumn floated='right' textAlign='center'>
                            <Card.Meta>
                                {Math.floor(durationSeconds / 60)} mins
                            </Card.Meta>
                        </GridColumn>
                    </Grid>
                </Card.Content>
                <Card.Content>
                    <div className='ui two buttons'>
                        <Button onClick={() => {

                        }}>
                            Waze
                        </Button>
                        <Button onClick={() => {
                            this.props.selectRide(this.props.ride)
                        }}>
                            Details
                        </Button>
                    </div>
                </Card.Content>
            </>)
    }

}