import React, {ReactElement} from "react";
import {Icon, ListItem, Grid, GridColumn, Header, List} from "semantic-ui-react";
import {Ride, Stay} from "@guided/common";
import {deleteStay} from "../../data/graphql";

type Props = {
    stay: Ride
    isSelected: boolean
    selectStay: (stay: Stay) => void
}


export default class StayItem extends React.Component<Props> {

    render(): ReactElement {
        return (
            <ListItem active={this.props.isSelected} onClick={() => {
                this.props.selectStay(this.props.stay)
            }}>
                <Grid>
                    <GridColumn width={1}>
                        <Icon name={'marker'}/>
                    </GridColumn>
                    <GridColumn width={10}>
                        <Header key={this.props.stay.id} as='h5'>
                            {this.props.stay.id}
                        </Header>
                    </GridColumn>
                    <GridColumn width={1}>
                        <Icon name={'trash'} onClick={async () => {
                            await this.deleteStay()
                        }}/>
                    </GridColumn>
                </Grid>
            </ListItem>
        )
    }

    private async deleteStay(): Promise<void> {
        await deleteStay({stayId: this.props.stay.id})
    }
}