"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const graphql_1 = require("../../data/graphql");
const react_map_gl_1 = require("react-map-gl");
const pin_1 = __importDefault(require("./pin"));
const semantic_ui_react_1 = require("semantic-ui-react");
class Markers extends react_1.default.Component {
    async onDragEnd({ lngLat }, locationId) {
        console.log('lngLat', lngLat, 'locationId', locationId);
        await graphql_1.moveStay(locationId, lngLat[1], lngLat[0]);
    }
    render() {
        const { guide } = this.props;
        if (!guide) {
            return react_1.default.createElement("div", null);
        }
        const stays = guide?.stays;
        return (stays && stays.map((stay, index) => {
            return (react_1.default.createElement(react_map_gl_1.Marker, { key: `marker-${index}`, longitude: stay.location.long, latitude: stay.location.lat, draggable: true, onDragEnd: async (args) => {
                    await this.onDragEnd(args, stay.location.id);
                } },
                react_1.default.createElement(semantic_ui_react_1.Popup, { content: stay.location.label, trigger: react_1.default.createElement(pin_1.default, { size: 20, onClick: () => {
                            console.log("click");
                        } }) })));
        }));
    }
}
exports.Markers = Markers;
//# sourceMappingURL=Markers.js.map