import {Store} from "../../../stores/Store";
import React from "react";
import {observer} from "mobx-react";
import {Segment, Grid, GridRow, GridColumn, Button, Icon} from "semantic-ui-react";
import {RideDetailRail} from "../../../components/rails/RideDetailRail";
import {deleteAllStays} from "../../../data/graphql";
import {StayDetailRail} from "../../../components/rails/StayDetailRail";

type Props = {
    store: Store
}

@observer
export default class RightRail extends React.Component<Props> {

    render(): React.ReactElement {
        if (this.props.store.selectedRide) {
            return <Segment style={{height: '100%', backgroundColor: '#ffffff', overflowY: 'scroll'}}>
                <RideDetailRail store={this.props.store}/>
            </Segment>
        } else if (this.props.store.selectedStay) {
            return <Segment style={{height: '100%', backgroundColor: '#ffffff', overflowY: 'scroll'}}>
                <StayDetailRail store={this.props.store}/>
            </Segment>
        } else {
            return (
                <Grid celled style={{backgroundColor: '#ffffff', overflowY: 'scroll'}}>
                    <GridRow>
                        <GridColumn>
                            <Button icon labelPosition='left' onClick={async () => {
                                await deleteAllStays({guideId: this.props.store.guide.id})
                                this.props.store.refetch()
                            }}>
                                Clear
                                <Icon name={'trash'}/>
                            </Button>
                        </GridColumn>
                    </GridRow>
                </Grid>
            )

        }
    }

}