"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const graphql_1 = require("../../data/graphql");
const react_map_gl_1 = require("react-map-gl");
const semantic_ui_react_1 = require("semantic-ui-react");
function createPopup(stay, showPopupForId) {
    const date = new Date(stay.arrivalDate);
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        month: 'short',
        day: '2-digit'
    }).format(date);
    if (stay.locked) {
        return (<react_map_gl_1.Popup closeButton={false} key={`popup-${stay.id}`} latitude={stay.location.lat} longitude={stay.location.long}>
            <semantic_ui_react_1.Segment.Inline>
                {stay.position}
            </semantic_ui_react_1.Segment.Inline>
        </react_map_gl_1.Popup>);
    }
    return (showPopupForId === stay.id &&
        <react_map_gl_1.Popup closeButton={false} key={`popup-${stay.id}`} latitude={stay.location.lat} longitude={stay.location.long}>
            <semantic_ui_react_1.Segment.Inline>
                <semantic_ui_react_1.Grid>
                    <semantic_ui_react_1.GridRow>
                        <semantic_ui_react_1.GridColumn>
                            <semantic_ui_react_1.Header>{stay.location.label}</semantic_ui_react_1.Header>
                        </semantic_ui_react_1.GridColumn>
                    </semantic_ui_react_1.GridRow>
                    <semantic_ui_react_1.GridRow columns={12}>
                        <semantic_ui_react_1.GridColumn>
                            <semantic_ui_react_1.Icon name={'moon'}>
                                <h5>{stay.nights}</h5>
                            </semantic_ui_react_1.Icon>
                        </semantic_ui_react_1.GridColumn>
                        <semantic_ui_react_1.GridColumn>
                            <semantic_ui_react_1.Icon name={'lock'}>
                                <h5>{stay.locked ? 'Locked' : 'Unlocked'}</h5>
                            </semantic_ui_react_1.Icon>
                        </semantic_ui_react_1.GridColumn>
                        <semantic_ui_react_1.GridColumn>
                            <semantic_ui_react_1.Icon textAlign='center' name={'calendar'} style={{ 'white-space': 'nowrap' }}>
                                <h5>{formattedDate}</h5>
                            </semantic_ui_react_1.Icon>
                        </semantic_ui_react_1.GridColumn>
                    </semantic_ui_react_1.GridRow>
                </semantic_ui_react_1.Grid>
            </semantic_ui_react_1.Segment.Inline>
        </react_map_gl_1.Popup>);
}
class Markers extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopupForId: undefined
        };
    }
    createMarker(stay, index, onDragEnd) {
        const pinStyle = {
            cursor: 'pointer',
            fill: '#000',
            stroke: 'none'
        };
        let color;
        if (this.props.highlightedId === stay.id) {
            color = 'red';
        }
        else if (stay.locked === true) {
            color = 'black';
        }
        else {
            color = 'grey';
        }
        return <react_map_gl_1.Marker key={`marker-${index}`} longitude={stay.location.long} latitude={stay.location.lat} draggable onDragEnd={async (args) => {
            await onDragEnd(args, stay.location.id);
        }}>

            <semantic_ui_react_1.Icon name={'marker'} color={color} style={{
            ...pinStyle
        }} onMouseEnter={() => {
            this.setState({
                showPopupForId: stay.id
            });
        }} onMouseLeave={() => {
            this.setState({
                showPopupForId: undefined
            });
        }}/>
        </react_map_gl_1.Marker>;
    }
    async onDragEnd({ lngLat }, locationId) {
        await graphql_1.moveStay(locationId, lngLat[1], lngLat[0]);
    }
    render() {
        const { guide } = this.props;
        if (!guide) {
            return <div />;
        }
        const stays = guide?.stays;
        return (stays && stays.map((stay, index) => {
            return ([this.createMarker(stay, index, this.onDragEnd), createPopup(stay, this.state.showPopupForId)]);
        }));
    }
}
exports.Markers = Markers;
