import React from "react";
import {Store} from "../../../stores/Store";
import {
    Grid,
    GridColumn,
    GridRow,
    Header, Icon, Checkbox, Form, Segment, Button,
} from "semantic-ui-react";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";
import {Stay} from "@guided/common";
import {updateStay} from "../../../data/graphql";
import {sleep} from "../../../../../../backend/api/src/utils";

type Props = {
    store: Store
}

type State = {
    stay?: Stay
    loading: boolean
}

export class StayDetailRail extends React.Component<Props, State> {

    componentDidMount(): void {
        this.setState({
            stay: this.props.store.selectedStay,
            loading: false
        })
    }

    componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
        if (this.state?.stay?.id !== this.props.store.selectedStay?.id) {
            this.setState({
                stay: this.props.store.selectedStay,
                loading: false
            })
        }
    }

    toggleLocked = () => this.setState((prev) => ({
        stay: {
            ...prev.stay,
            locked: !prev.stay.locked
        }
    }));

    onLabelChange = (value: string) => this.setState((prev) => ({
        stay: {
            ...prev.stay,
            location: {
                ...prev.stay.location,
                label: value
            }
        }
    }));

    onNightsChange = (value: string) => this.setState((prev) => ({
        stay: {
            ...prev.stay,
            nights: parseInt(value)
        }
    }));

    hasChanges(): boolean {
        return this.props.store.selectedStay !== this.state.stay
    }

    async onSubmit(): Promise<void> {
        const stay = this.state.stay;
        this.setState({
            loading: false
        });
        await updateStay({
            id: stay.id,
            nights: stay.nights,
            locked: stay.locked,
            label: stay.location.label
        });
    }

    render(): React.ReactElement {

        if (!this.state) {
            return <Segment loading/>
        }

        const stay = this.state.stay;


        const date = new Date(stay.arrivalDate);

        const formattedDate = date.toISOString().substring(0,10);
        console.log('formattedDate', formattedDate);

        return (
            <Grid padded={false}>
                <GridRow stretched>
                    <GridColumn width={12}>
                        <Header>Stay</Header>
                    </GridColumn>
                    <GridColumn width={2}>
                        <Icon name={'close'} onClick={() => {
                            this.props.store.selectStay(undefined);
                        }}/>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn>
                        <Form>
                            <Form.Field>
                                <label>Label</label>
                                <textarea rows={2} value={stay.location.label} onChange={(event) => {
                                    this.onLabelChange(event.target.value)
                                }}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Locked</label>
                                <Checkbox checked={stay.locked} onChange={this.toggleLocked}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Nights</label>
                                <input value={stay.nights.toString()} type={'number'} onChange={(event) => {
                                    this.onNightsChange(event.target.value)
                                }}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Date</label>
                                <input value={formattedDate} type={'date'} disabled/>
                            </Form.Field>
                            <Button type='submit' loading={this.state.loading} disabled={!this.hasChanges()}
                                    onClick={this.onSubmit.bind(this)}>Submit</Button>
                        </Form>
                    </GridColumn>
                </GridRow>
            </Grid>
        )
    }

}