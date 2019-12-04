import React from "react";
import {Store} from "../../../stores/Store";
import {
    Divider,
    Grid,
    GridColumn,
    GridRow,
    Header, Icon, Segment,
} from "semantic-ui-react";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

type Props = {
    store: Store
}

export class RideDetailRail extends React.Component<Props> {

    render(): React.ReactElement {
        const ride = this.props.store.selectedRide;
        return (
            <Grid padded={false}>
                <GridRow stretched>
                    <GridColumn width={12}>
                        <Header>Ride</Header>
                    </GridColumn>
                    <GridColumn width={2}>
                        <Icon name={'close'} onClick={() => {
                            this.props.store.selectedRide = undefined
                        }}/>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <Header style={{width: '100%'}} attached>{ride.route.summary}</Header>
                </GridRow>
                <GridRow>
                    <GridColumn width={'8'} textAlign={'center'} attached>
                        <Header>50km</Header>
                        <HeaderSubHeader>Distance</HeaderSubHeader>
                    </GridColumn>
                    <GridColumn width={'8'} textAlign={'center'} attached>
                        <Header>50km</Header>
                        <HeaderSubHeader>Distance</HeaderSubHeader>
                    </GridColumn>
                </GridRow>
                {ride.route.legs.map(leg=>{
                    return <GridRow>
                        <HeaderSubHeader>Lol</HeaderSubHeader>
                        <HeaderSubHeader>{leg.start_location}</HeaderSubHeader>
                    </GridRow>
                })}
            </Grid>
        )
    }

}