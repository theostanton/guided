import {Store} from "../../../stores/Store";
import React from "react";
import {observer} from "mobx-react";
import RideList from "../RideList";
import Grid from "semantic-ui-react/dist/commonjs/collections/Grid";
import GridColumn from "semantic-ui-react/dist/commonjs/collections/Grid/GridColumn";
import {Segment} from "semantic-ui-react";
import LeftDetailPane from "./LeftDetailPane";

type Props = {
    store: Store
}

@observer
export default class LeftRail extends React.Component<Props> {

    render(): React.ReactElement {

        return <Grid>
            <GridColumn>
                {this.props.store.hasData() ? <RideList store={this.props.store}/> : <Segment loading/>}
            </GridColumn>
            {this.props.store.leftDetailPane && <GridColumn><LeftDetailPane store={this.props.store}/></GridColumn>}
        </Grid>
    }

}