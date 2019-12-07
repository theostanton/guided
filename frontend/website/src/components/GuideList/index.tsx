import React from "react";
import {Segment, List, Transition} from "semantic-ui-react";
import {observer} from "mobx-react";
import {Ride} from '@guided/common'
import {Store} from "../../stores/Store";
import StayItem from "./StayItem";
import RideItem from "./RideItem";

type Props = {
    store: Store
}

export default class GuideList extends React.Component<Props> {
    render(): React.ReactElement {
        if (this.props.store.hasData()) {

            const items: any = [];

            this.props.store.rides.forEach((ride: Ride, index: number) => {
                if (index === 0) {
                    items.push(
                        <StayItem key={ride.start.id} stay={ride.start} isSelected={false}
                                  selectStay={(stay) => {

                                  }}/>
                    );
                }
                items.push(
                    <RideItem ride={ride} isSelected={ride.id === this.props.store.selectedRide?.id} selectRide={() => {
                        this.props.store.selectRide(ride);
                    }}/>
                );
                items.push(
                    <StayItem key={ride.end.id} stay={ride.end} isSelected={false}
                              selectStay={(stay) => {

                              }}/>
                );
            });


            return <Transition.Group
                as={List}
                duration={200}
                divided
                size='huge'
                verticalAlign='middle'
                selection relaxed
                children={items}
                style={{'height': '100%', 'overflowY': 'scroll', 'backgroundColour': '#00ff00'}}/>
        } else {
            return <Segment style={{height: '100%'}} loading/>
        }
    }
}