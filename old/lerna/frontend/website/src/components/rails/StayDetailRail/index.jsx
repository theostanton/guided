"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const semantic_ui_react_1 = require("semantic-ui-react");
const graphql_1 = require("../../../data/graphql");
class StayDetailRail extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.toggleLocked = () => this.setState((prev) => ({
            stay: {
                ...prev.stay,
                locked: !prev.stay.locked
            }
        }));
        this.onLabelChange = (value) => this.setState((prev) => ({
            stay: {
                ...prev.stay,
                location: {
                    ...prev.stay.location,
                    label: value
                }
            }
        }));
        this.onNightsChange = (value) => this.setState((prev) => ({
            stay: {
                ...prev.stay,
                nights: parseInt(value)
            }
        }));
    }
    componentDidMount() {
        this.setState({
            stay: this.props.store.selectedStay,
            loading: false
        });
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        if (this.state?.stay?.id !== this.props.store.selectedStay?.id) {
            this.setState({
                stay: this.props.store.selectedStay,
                loading: false
            });
        }
    }
    hasChanges() {
        return this.props.store.selectedStay !== this.state.stay;
    }
    async onSubmit() {
        const stay = this.state.stay;
        this.setState({
            loading: false
        });
        await graphql_1.updateStay({
            id: stay.id,
            nights: stay.nights,
            locked: stay.locked,
            label: stay.location.label
        });
    }
    render() {
        if (!this.state) {
            return <semantic_ui_react_1.Segment loading/>;
        }
        const stay = this.state.stay;
        const date = new Date(stay.arrivalDate);
        const formattedDate = date.toISOString().substring(0, 10);
        console.log('formattedDate', formattedDate);
        return (<semantic_ui_react_1.Grid padded={false}>
                <semantic_ui_react_1.GridRow stretched>
                    <semantic_ui_react_1.GridColumn width={12}>
                        <semantic_ui_react_1.Header>Stay</semantic_ui_react_1.Header>
                    </semantic_ui_react_1.GridColumn>
                    <semantic_ui_react_1.GridColumn width={2}>
                        <semantic_ui_react_1.Icon name={'close'} onClick={() => {
            this.props.store.selectStay(undefined);
        }}/>
                    </semantic_ui_react_1.GridColumn>
                </semantic_ui_react_1.GridRow>
                <semantic_ui_react_1.GridRow>
                    <semantic_ui_react_1.GridColumn>
                        <semantic_ui_react_1.Form>
                            <semantic_ui_react_1.Form.Field>
                                <label>Label</label>
                                <textarea rows={2} value={stay.location.label} onChange={(event) => {
            this.onLabelChange(event.target.value);
        }}/>
                            </semantic_ui_react_1.Form.Field>
                            <semantic_ui_react_1.Form.Field>
                                <label>Locked</label>
                                <semantic_ui_react_1.Checkbox checked={stay.locked} onChange={this.toggleLocked}/>
                            </semantic_ui_react_1.Form.Field>
                            <semantic_ui_react_1.Form.Field>
                                <label>Nights</label>
                                <input value={stay.nights.toString()} type={'number'} onChange={(event) => {
            this.onNightsChange(event.target.value);
        }}/>
                            </semantic_ui_react_1.Form.Field>
                            <semantic_ui_react_1.Form.Field>
                                <label>Date</label>
                                <input value={formattedDate} type={'date'} disabled/>
                            </semantic_ui_react_1.Form.Field>
                            <semantic_ui_react_1.Button type='submit' loading={this.state.loading} disabled={!this.hasChanges()} onClick={this.onSubmit.bind(this)}>Submit</semantic_ui_react_1.Button>
                        </semantic_ui_react_1.Form>
                    </semantic_ui_react_1.GridColumn>
                </semantic_ui_react_1.GridRow>
            </semantic_ui_react_1.Grid>);
    }
}
exports.StayDetailRail = StayDetailRail;
