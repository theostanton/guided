import {Store} from "../../../stores/Store";
import React from "react";
import {observer} from "mobx-react";
import {Segment} from "semantic-ui-react";
import {RideDetailRail} from "../../../components/rails/RideDetailRail";

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

        }
        return <div/>
    }

}