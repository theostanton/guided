import React from "react";
import {Segment, List, Transition, ListItem} from "semantic-ui-react";
import {observer} from "mobx-react";
import {Ride, Stay} from '@guided/common'
import {Store} from "../../stores/Store";
import StayItem from "./StayItem";
import RideItem from "./RideItem";
import {store} from "../../../../usersite/src/store";

type Props = {
    store: Store
}

export default class GuideList extends React.Component<Props> {
    render(): React.ReactElement {
        if (this.props.store.hasData()) {

            const items: any = [];


            const stays = this.props.store.guide.stays;
            const rides = this.props.store.rides;
            for (let i = 0; i < stays.length; i++) {
                const stay = stays[i];
                const next = stays.length > i ? stays[i] : null
                console.log('stay.position', stay.position)
                console.log('next.position', next?.position)
                items.push(
                    <StayItem key={stay.id}
                              store={this.props.store}
                              stay={stay}
                              isSelected={false}/>
                );

                if (next && i < stays.length - 1) {
                    const ride = rides.find(ride => {
                        return ride.start.id === stay.id;
                    });

                    if (ride) {
                        items.push(
                            <RideItem ride={ride}
                                      isSelected={ride.id === this.props.store.selectedRide?.id}
                                      store={this.props.store}
                                      selectRide={() => {
                                          this.props.store.selectRide(ride);
                                      }}/>
                        );
                    } else {
                        items.push(
                            <ListItem><Segment loading attached/></ListItem>
                        )
                    }
                }

            }

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