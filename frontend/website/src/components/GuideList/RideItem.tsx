import React, {ReactElement} from "react";
import {Grid, Card, GridColumn, Button, ListItem, List} from "semantic-ui-react";
import {Ride} from "@guided/common";
import {Store} from "../../stores/Store";

type Props = {
    ride: Ride
    store: Store
    isSelected: boolean
    selectRide: (ride: Ride) => void
}


export default class RideItem extends React.Component<Props> {

    render(): ReactElement {
        return (
            <ListItem active={this.props.isSelected}
                      onClick={() => {
                          this.props.selectRide(this.props.ride)
                      }}
                      onMouseEnter={() => {
                          this.props.store.highlightRide(this.props.ride)
                      }}

            >
                <List.Content>
                    <List.Header key={this.props.ride.id} as='h5'>
                        {this.props.ride.route?.summary || 'No route'}
                    </List.Header>
                    <Grid columns={2}>
                        <GridColumn floated='left' textAlign='center'>
                            <Card.Meta>
                                {Math.floor(1 / 1000)}km
                            </Card.Meta>
                        </GridColumn>
                        <GridColumn floated='right' textAlign='center'>
                            <Card.Meta>
                                {Math.floor(this.props.ride.durationMinutes / 60)} hours
                            </Card.Meta>
                        </GridColumn>
                    </Grid>
                </List.Content>
            </ListItem>
        )
    }

}