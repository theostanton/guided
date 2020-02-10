"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const HeaderSubheader_1 = __importDefault(require("semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader"));
class RideDetailRail extends react_1.default.Component {
    render() {
        const ride = this.props.store.selectedRide;
        return (<semantic_ui_react_1.Grid padded={false}>
                <semantic_ui_react_1.GridRow stretched>
                    <semantic_ui_react_1.GridColumn width={12}>
                        <semantic_ui_react_1.Header>Ride</semantic_ui_react_1.Header>
                    </semantic_ui_react_1.GridColumn>
                    <semantic_ui_react_1.GridColumn width={2}>
                        <semantic_ui_react_1.Icon name={'close'} onClick={() => {
            this.props.store.selectedRide = undefined;
        }}/>
                    </semantic_ui_react_1.GridColumn>
                </semantic_ui_react_1.GridRow>
                <semantic_ui_react_1.GridRow>
                    <semantic_ui_react_1.Header style={{ width: '100%' }} attached>{ride.route?.summary || 'No route'}</semantic_ui_react_1.Header>
                </semantic_ui_react_1.GridRow>
                <semantic_ui_react_1.GridRow>
                    <semantic_ui_react_1.GridColumn width={'8'} textAlign={'center'} attached>
                        <semantic_ui_react_1.Header>50km</semantic_ui_react_1.Header>
                        <HeaderSubheader_1.default>Distance</HeaderSubheader_1.default>
                    </semantic_ui_react_1.GridColumn>
                    <semantic_ui_react_1.GridColumn width={'8'} textAlign={'center'} attached>
                        <semantic_ui_react_1.Header>50km</semantic_ui_react_1.Header>
                        <HeaderSubheader_1.default>Distance</HeaderSubheader_1.default>
                    </semantic_ui_react_1.GridColumn>
                </semantic_ui_react_1.GridRow>
            </semantic_ui_react_1.Grid>);
    }
}
exports.RideDetailRail = RideDetailRail;
