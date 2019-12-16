import React, {ReactElement} from "react";
import {Icon, ListItem, Grid, GridColumn, Header, List} from "semantic-ui-react";
import {Ride, Stay} from "@guided/common";
import {deleteStay} from "../../data/graphql";
import {Store} from "../../stores/Store";

type Props = {
    stay: Stay
    store: Store
    isSelected: boolean
    selectStay: (stay: Stay) => void
}


export default class StayItem extends React.Component<Props> {

    render(): ReactElement {
        let stay = this.props.stay;
        return (
            <ListItem active={this.props.isSelected}
                      onClick={() => {
                          this.props.selectStay(this.props.stay)
                      }}
                      onMouseEnter={() => {
                          this.props.store.highlightStay(this.props.stay)
                      }}>
                <Grid>
                    <GridColumn width={1}>
                        <Icon name={'marker'} color={stay.locked === true ? 'red' : 'blue'}/>
                    </GridColumn>
                    <GridColumn width={10}>
                        <Header key={stay.id} as='h5'>
                            {stay.location.label}
                        </Header>
                        <Header.Subheader>Position: {stay.position}</Header.Subheader>
                    </GridColumn>
                    {stay.locked &&
                    <GridColumn width={1}>
                        <Icon name={'trash'} onClick={async () => {
                            await this.deleteStay()
                        }}/>
                    </GridColumn>
                    }
                </Grid>
            </ListItem>
        )
    }

    private async deleteStay(): Promise<void> {
        await deleteStay({stayId: this.props.stay.id})
    }
}