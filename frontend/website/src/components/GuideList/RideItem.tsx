import React, {ReactElement} from "react";
import {Grid, Card, GridColumn, Button, ListItem, List} from "semantic-ui-react";
import {Ride} from "@guided/common";

type Props = {
    ride: Ride
    isSelected: boolean
    selectRide: (ride: Ride) => void
}


export default class RideItem extends React.Component<Props> {

    render(): ReactElement {
        let distanceMeters: number = 0;
        let durationSeconds: number = 0;
        this.props.ride.route?.legs.forEach(leg => {
            if (leg.distance) {
                distanceMeters += leg.distance.value;
            }
            if (leg.duration) {
                durationSeconds += leg.duration.value;
            }
        });
        return (
            <ListItem active={this.props.isSelected} onClick={() => {
                this.props.selectRide(this.props.ride)
            }}>
                <List.Content>
                    <List.Header key={this.props.ride.id} as='h5'>
                        {this.props.ride.route?.summary || 'No route'}
                    </List.Header>
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
                </List.Content>
            </ListItem>
        )
    }

}