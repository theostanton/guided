import {Store} from "../../../stores/Store";
import React from "react";
import {observer} from "mobx-react";
import RideList from "../RideList";

type Props = {
    store: Store
}

@observer
export default class LeftRail extends React.Component<Props> {

    render(): React.ReactElement {
        if (this.props.store.hasData()) {
            return <RideList store={this.props.store}/>
        }
        return <div/>
    }

}