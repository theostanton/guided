"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
class RideItem extends react_1.default.Component {
    render() {
        try {
            const date = new Date(this.props.store.getStay(this.props.ride.end.id).arrivalDate);
            const formattedDate = new Intl.DateTimeFormat('en-GB', {
                month: 'short',
                day: '2-digit'
            }).format(date);
            return (<semantic_ui_react_1.ListItem active={this.props.isSelected} onClick={() => {
                this.props.selectRide(this.props.ride);
            }} onMouseEnter={() => {
                this.props.store.highlightRide(this.props.ride);
            }}>
                    <semantic_ui_react_1.List.Content>
                        <semantic_ui_react_1.Grid columns={3}>
                            <semantic_ui_react_1.GridColumn textAlign='center'>
                                <semantic_ui_react_1.GridColumn>
                                    <semantic_ui_react_1.Icon name={'road'}><h5>{Math.floor(1 / 1000)}km</h5></semantic_ui_react_1.Icon>
                                </semantic_ui_react_1.GridColumn>
                            </semantic_ui_react_1.GridColumn>
                            <semantic_ui_react_1.GridColumn textAlign='center'>
                                <semantic_ui_react_1.Icon name={'clock'}><h5>{Math.floor(this.props.ride.durationMinutes / 60)}h</h5></semantic_ui_react_1.Icon>
                            </semantic_ui_react_1.GridColumn>
                            <semantic_ui_react_1.GridColumn>
                                <semantic_ui_react_1.Icon textAlign='center' name={'calendar'} style={{ 'white-space': 'nowrap' }}>
                                    <h5>{formattedDate}</h5>
                                </semantic_ui_react_1.Icon>
                            </semantic_ui_react_1.GridColumn>
                        </semantic_ui_react_1.Grid>
                    </semantic_ui_react_1.List.Content>
                </semantic_ui_react_1.ListItem>);
        }
        catch (e) {
            return <semantic_ui_react_1.Segment loading/>;
        }
    }
}
exports.default = RideItem;
