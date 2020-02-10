"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_map_gl_1 = __importStar(require("react-map-gl"));
const react_1 = __importStar(require("react"));
const graphql_1 = require("../../data/graphql");
const Markers_1 = require("./Markers");
const Rides_1 = __importDefault(require("./Rides"));
const viewport_mercator_project_1 = __importDefault(require("viewport-mercator-project"));
const common_1 = require("@guided/common");
const logger = new common_1.Logger('Map');
class Map extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            viewport: {
                width: 400,
                height: 400,
                latitude: 51.5007,
                longitude: -0.1246,
                zoom: 8
            }
        };
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.props.store.mapCallback = () => {
            console.log('callback selectedRide', this.props.store.selectedRide);
            if (this.props.store.selectedRide) {
                const startStay = this.props.store.getStay(this.props.store.selectedRide.start.id);
                const endStay = this.props.store.getStay(this.props.store.selectedRide.end.id);
                const startLat = startStay.location.lat;
                const startLong = startStay.location.long;
                const endLat = endStay.location.lat;
                const endLong = endStay.location.long;
                const { longitude, latitude, zoom } = new viewport_mercator_project_1.default(this.state.viewport)
                    .fitBounds([[startLong, startLat], [endLong, endLat]], {
                    padding: 20,
                    offset: [0, -100]
                });
                this.setState({
                    viewport: {
                        height: this.state.viewport.height,
                        width: this.state.viewport.width,
                        longitude,
                        latitude,
                        zoom,
                        transitionDuration: 1000,
                        transitionInterpolator: new react_map_gl_1.FlyToInterpolator()
                    }
                });
            }
            else {
                this.setState({});
            }
        };
    }
    render() {
        return (<react_map_gl_1.default mapboxApiAccessToken={"pk.eyJ1IjoidGhlb2RldiIsImEiOiJjazNscGM2djAwdHYwM29vN3l6NWdyY2QxIn0.L4-DzQEX16suphipPXgDmw"} {...this.state.viewport} onClick={async (event) => {
            if (this.props.store.hasData()) {
                const guide = this.props.store.guide;
                await graphql_1.addStayFromLatLong({
                    guideId: guide.id,
                    nights: 1,
                    lat: event.lngLat[1],
                    long: event.lngLat[0],
                    locked: true
                });
                this.props.store.refetch();
            }
        }} onHover={(event) => {
            if (event.type === 'pointermove') {
            }
        }} height={"100%"} width={"100%"} onViewportChange={(viewport) => {
            this.setState({ viewport });
        }}>
                <Markers_1.Markers guide={this.props.store.guide} highlightedId={this.props.store.highlightedStay?.id}/>
                <Rides_1.default rides={this.props.store.rides} highLightedRide={this.props.store.highlightedRide} selectedRide={this.props.store.selectedRide}/>
            </react_map_gl_1.default>);
    }
}
exports.default = Map;
