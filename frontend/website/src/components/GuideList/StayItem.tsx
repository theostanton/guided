import React, {ReactElement} from "react";
import {Icon, ListItem, Grid, GridColumn, Header, List, GridRow} from "semantic-ui-react";
import {Ride, Stay} from "@guided/common";
import {deleteStay} from "../../data/graphql";
import {Store} from "../../stores/Store";

type Props = {
    stay: Stay
    store: Store
    isSelected: boolean
}


export default class StayItem extends React.Component<Props> {

    render(): ReactElement {
        let stay = this.props.stay;
        return (
            <ListItem active={this.props.isSelected}
                      onClick={() => {
                          this.props.store.selectStay(stay)
                      }}
                      onMouseEnter={() => {
                          this.props.store.highlightStay(this.props.stay)
                      }}>
                <Grid>
                    <GridRow>
                        <GridColumn width={1}>
                            <Icon name={'marker'} color={stay.locked === true ? 'black' : 'grey'}/>
                        </GridColumn>
                        <GridColumn width={11}>
                            <Header key={stay.id} as='h5' textAlign={'left'}>
                                {stay.location.label}
                            </Header>
                        </GridColumn>
                    </GridRow>
                    <GridRow>
                        <GridColumn textAlign='center'>
                            <GridColumn>
                                <Icon name={'moon'}><h5>{stay.nights}</h5></Icon>
                            </GridColumn>
                        </GridColumn>
                        {stay.locked &&
                        <GridColumn textAlign='center'>
                            <Icon name={'trash'} onClick={async () => {
                                await this.deleteStay();
                                this.props.store.refetch()
                            }}/>
                        </GridColumn>
                        }
                    </GridRow>
                </Grid>
            </ListItem>
        )
    }

    private async deleteStay(): Promise<void> {
        await deleteStay({stayId: this.props.stay.id})
    }
}