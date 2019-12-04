"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
class RideItem extends react_1.default.Component {
    render() {
        let distanceMeters = 0;
        let durationSeconds = 0;
        this.props.ride.route.legs.forEach(leg => {
            if (leg.distance) {
                distanceMeters += leg.distance.value;
            }
            if (leg.duration) {
                durationSeconds += leg.duration.value;
            }
        });
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(semantic_ui_react_1.Card.Content, null,
                react_1.default.createElement(semantic_ui_react_1.Card.Header, { key: this.props.ride.id, as: 'h5' }, this.props.ride.route.summary),
                react_1.default.createElement(semantic_ui_react_1.Grid, { columns: 2 },
                    react_1.default.createElement(semantic_ui_react_1.GridColumn, { floated: 'left', textAlign: 'center' },
                        react_1.default.createElement(semantic_ui_react_1.Card.Meta, null,
                            Math.floor(distanceMeters / 1000),
                            "km")),
                    react_1.default.createElement(semantic_ui_react_1.GridColumn, { floated: 'right', textAlign: 'center' },
                        react_1.default.createElement(semantic_ui_react_1.Card.Meta, null,
                            Math.floor(durationSeconds / 60),
                            " mins")))),
            react_1.default.createElement(semantic_ui_react_1.Card.Content, null,
                react_1.default.createElement("div", { className: 'ui two buttons' },
                    react_1.default.createElement(semantic_ui_react_1.Button, { onClick: () => {
                        } }, "Waze"),
                    react_1.default.createElement(semantic_ui_react_1.Button, { onClick: () => {
                            this.props.selectRide(this.props.ride);
                        } }, "Details")))));
    }
}
exports.default = RideItem;
//# sourceMappingURL=RideItem.js.map