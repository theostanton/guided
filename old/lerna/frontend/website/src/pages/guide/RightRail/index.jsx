"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const mobx_react_1 = require("mobx-react");
const semantic_ui_react_1 = require("semantic-ui-react");
const RideDetailRail_1 = require("../../../components/rails/RideDetailRail");
const graphql_1 = require("../../../data/graphql");
const StayDetailRail_1 = require("../../../components/rails/StayDetailRail");
let RightRail = class RightRail extends react_1.default.Component {
    render() {
        if (this.props.store.selectedRide) {
            return <semantic_ui_react_1.Segment style={{ height: '100%', backgroundColor: '#ffffff', overflowY: 'scroll' }}>
                <RideDetailRail_1.RideDetailRail store={this.props.store}/>
            </semantic_ui_react_1.Segment>;
        }
        else if (this.props.store.selectedStay) {
            return <semantic_ui_react_1.Segment style={{ height: '100%', backgroundColor: '#ffffff', overflowY: 'scroll' }}>
                <StayDetailRail_1.StayDetailRail store={this.props.store}/>
            </semantic_ui_react_1.Segment>;
        }
        else {
            return (<semantic_ui_react_1.Grid celled style={{ backgroundColor: '#ffffff', overflowY: 'scroll' }}>
                    <semantic_ui_react_1.GridRow>
                        <semantic_ui_react_1.GridColumn>
                            <semantic_ui_react_1.Button icon labelPosition='left' onClick={async () => {
                await graphql_1.deleteAllStays({ guideId: this.props.store.guide.id });
                this.props.store.refetch();
            }}>
                                Clear
                                <semantic_ui_react_1.Icon name={'trash'}/>
                            </semantic_ui_react_1.Button>
                        </semantic_ui_react_1.GridColumn>
                    </semantic_ui_react_1.GridRow>
                </semantic_ui_react_1.Grid>);
        }
    }
};
RightRail = __decorate([
    mobx_react_1.observer
], RightRail);
exports.default = RightRail;
