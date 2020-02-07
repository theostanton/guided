"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const graphql_1 = require("../../data/graphql");
class StayItem extends react_1.default.Component {
    render() {
        let stay = this.props.stay;
        return (<semantic_ui_react_1.ListItem active={this.props.isSelected} onClick={() => {
            this.props.store.selectStay(stay);
        }} onMouseEnter={() => {
            this.props.store.highlightStay(this.props.stay);
        }}>
                <semantic_ui_react_1.Grid>
                    <semantic_ui_react_1.GridRow>
                        <semantic_ui_react_1.GridColumn width={1}>
                            <semantic_ui_react_1.Icon name={'marker'} color={stay.locked === true ? 'black' : 'grey'}/>
                        </semantic_ui_react_1.GridColumn>
                        <semantic_ui_react_1.GridColumn width={11}>
                            <semantic_ui_react_1.Header key={stay.id} as='h5' textAlign={'left'}>
                                {stay.location.label}
                            </semantic_ui_react_1.Header>
                        </semantic_ui_react_1.GridColumn>
                    </semantic_ui_react_1.GridRow>
                    <semantic_ui_react_1.GridRow>
                        <semantic_ui_react_1.GridColumn textAlign='center'>
                            <semantic_ui_react_1.GridColumn>
                                <semantic_ui_react_1.Icon name={'moon'}><h5>{stay.nights}</h5></semantic_ui_react_1.Icon>
                            </semantic_ui_react_1.GridColumn>
                        </semantic_ui_react_1.GridColumn>
                        {stay.locked &&
            <semantic_ui_react_1.GridColumn textAlign='center'>
                            <semantic_ui_react_1.Icon name={'trash'} onClick={async () => {
                await this.deleteStay();
                this.props.store.refetch();
            }}/>
                        </semantic_ui_react_1.GridColumn>}
                    </semantic_ui_react_1.GridRow>
                </semantic_ui_react_1.Grid>
            </semantic_ui_react_1.ListItem>);
    }
    async deleteStay() {
        await graphql_1.deleteStay({ stayId: this.props.stay.id });
    }
}
exports.default = StayItem;
//# sourceMappingURL=StayItem.jsx.map