import React, {ReactElement} from "react";
import {Grid, Card, GridColumn, Button, ListItem, List, Icon, Segment} from "semantic-ui-react";
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
        try {
            const date = new Date(this.props.store.getStay(this.props.ride.end.id).arrivalDate);

            const formattedDate = new Intl.DateTimeFormat('en-GB', {
                month: 'short',
                day: '2-digit'
            }).format(date);
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
                        <Grid columns={3}>
                            <GridColumn textAlign='center'>
                                <GridColumn>
                                    <Icon name={'road'}><h5>{Math.floor(1 / 1000)}km</h5></Icon>
                                </GridColumn>
                            </GridColumn>
                            <GridColumn textAlign='center'>
                                <Icon name={'clock'}><h5>{Math.floor(this.props.ride.durationMinutes / 60)}h</h5></Icon>
                            </GridColumn>
                            <GridColumn>
                                <Icon textAlign='center' name={'calendar'} style={{'white-space': 'nowrap'}}>
                                    <h5>{formattedDate}</h5>
                                </Icon>
                            </GridColumn>
                        </Grid>
                    </List.Content>
                </ListItem>
            )
        } catch (e) {
            return <Segment loading/>
        }
    }

}