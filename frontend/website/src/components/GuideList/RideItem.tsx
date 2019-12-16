import React, {ReactElement} from "react";
import {Grid, Card, GridColumn, Button, ListItem, List, Icon} from "semantic-ui-react";
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
                    <Grid columns={4}>
                        <GridColumn textAlign='center'>
                            <GridColumn>
                                <Icon name={'road'} ><h5>{Math.floor(1 / 1000)}km</h5></Icon>
                            </GridColumn>
                        </GridColumn>
                        <GridColumn textAlign='center'>
                            <Icon name={'clock'} ><h5>{Math.floor(this.props.ride.durationMinutes / 60)}h</h5></Icon>
                        </GridColumn>
                    </Grid>
                </List.Content>
            </ListItem>
        )
    }

}