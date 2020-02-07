"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const StayItem_1 = __importDefault(require("./StayItem"));
const RideItem_1 = __importDefault(require("./RideItem"));
class GuideList extends react_1.default.Component {
    render() {
        if (this.props.store.hasData()) {
            const items = [];
            const stays = this.props.store.guide.stays.sort((a, b) => {
                return a.arrivalDate - b.arrivalDate;
            });
            const rides = this.props.store.rides;
            for (let i = 0; i < stays.length; i++) {
                const stay = stays[i];
                const next = stays.length > i ? stays[i] : null;
                items.push(<StayItem_1.default key={stay.id} store={this.props.store} stay={stay} isSelected={false}/>);
                if (next && i < stays.length - 1) {
                    const ride = rides.find(ride => {
                        return ride.start.id === stay.id;
                    });
                    if (ride) {
                        items.push(<RideItem_1.default ride={ride} isSelected={ride.id === this.props.store.selectedRide?.id} store={this.props.store} selectRide={() => {
                            this.props.store.selectRide(ride);
                        }}/>);
                    }
                    else {
                        items.push(<semantic_ui_react_1.ListItem><semantic_ui_react_1.Segment loading attached/></semantic_ui_react_1.ListItem>);
                    }
                }
            }
            return <semantic_ui_react_1.Transition.Group as={semantic_ui_react_1.List} duration={200} divided size='huge' verticalAlign='middle' selection relaxed children={items} style={{ 'height': '100%', 'overflowY': 'scroll', 'backgroundColour': '#00ff00' }}/>;
        }
        else {
            return <semantic_ui_react_1.Segment style={{ height: '100%' }} loading/>;
        }
    }
}
exports.default = GuideList;
//# sourceMappingURL=index.jsx.map