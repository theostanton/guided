"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_map_gl_1 = __importDefault(require("react-map-gl"));
const react_1 = __importStar(require("react"));
class Map extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            viewport: {
                width: 400,
                height: 400,
                latitude: 51.5007,
                longitude: -0.1246,
                zoom: 8,
            },
        };
    }
    render() {
        return (<react_map_gl_1.default mapboxApiAccessToken="pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazYwanNzZGYwODZvM2xvYXFpdWswY2Y4In0.zcDbr2DXsYXS3p54swmrYg" {...this.state.viewport} height={"100%"} width={"100%"} onViewportChange={(viewport) => {
            this.setState({ viewport });
        }}>
      </react_map_gl_1.default>);
    }
}
exports.default = Map;
//# sourceMappingURL=Map.jsx.map