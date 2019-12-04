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
        return (react_1.default.createElement(semantic_ui_react_1.Grid, { padded: false },
            react_1.default.createElement(semantic_ui_react_1.GridRow, { stretched: true },
                react_1.default.createElement(semantic_ui_react_1.GridColumn, { width: 12 },
                    react_1.default.createElement(semantic_ui_react_1.Header, null, "Ride")),
                react_1.default.createElement(semantic_ui_react_1.GridColumn, { width: 2 },
                    react_1.default.createElement(semantic_ui_react_1.Icon, { name: 'close', onClick: () => {
                            this.props.store.selectedRide = undefined;
                        } }))),
            react_1.default.createElement(semantic_ui_react_1.GridRow, null,
                react_1.default.createElement(semantic_ui_react_1.Header, { style: { width: '100%' }, attached: true }, ride.route.summary)),
            react_1.default.createElement(semantic_ui_react_1.GridRow, null,
                react_1.default.createElement(semantic_ui_react_1.GridColumn, { width: '8', textAlign: 'center', attached: true },
                    react_1.default.createElement(semantic_ui_react_1.Header, null, "50km"),
                    react_1.default.createElement(HeaderSubheader_1.default, null, "Distance")),
                react_1.default.createElement(semantic_ui_react_1.GridColumn, { width: '8', textAlign: 'center', attached: true },
                    react_1.default.createElement(semantic_ui_react_1.Header, null, "50km"),
                    react_1.default.createElement(HeaderSubheader_1.default, null, "Distance"))),
            ride.route.legs.map(leg => {
                return react_1.default.createElement(semantic_ui_react_1.GridRow, null,
                    react_1.default.createElement(HeaderSubheader_1.default, null, "Lol"),
                    react_1.default.createElement(HeaderSubheader_1.default, null, leg.start_location));
            })));
    }
}
exports.RideDetailRail = RideDetailRail;
//# sourceMappingURL=index.js.map