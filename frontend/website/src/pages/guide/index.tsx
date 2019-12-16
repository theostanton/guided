import * as React from "react";
import {
    Segment,
    Rail,
    Button,
    Icon
} from "semantic-ui-react";
import {Query} from "@apollo/react-components";
import {Store} from "../../stores/Store";
import LeftRail from "./LeftRail";
import {QUERY} from "./queries";
import RightRail from "./RightRail";
import Layout from "../../components/Layout";
import Map from "../../components/Map";
import {observer} from "mobx-react";
import {ReactComponentElement} from "react";
import {Guide, Ride} from "@guided/common";

type Props = {
    store: Store
    location: any
}

function extractSlug(pathName: string): string {
    return pathName.split('/')[2]
}

type Data = {
    guide: Guide,
    rides: Ride[]
}

type Response = {
    error?: any,
    loading: boolean,
    data?: Data,
    refetch: () => void
}

@observer
class GuideComponent extends React.Component<Props> {

    get slug(): string {
        return this.props.location.pathname.split('/')[2]
    }

    getLeftRailSegment(response: Response): React.ReactElement {

        if (response.error) {
            return <Segment>{response.error.message}</Segment>
        }

        if (response.loading) {
            return <Segment loading/>
        }

        return <Segment style={{height: '100%', 'overflowY': 'scroll'}}>
            <LeftRail store={this.props.store}/>
        </Segment>;

    }

    render(): React.ReactElement {

        const store = this.props.store;
        const slug = this.slug;
        return <Query<Data> query={QUERY} variables={{slug}} pollInterval={2000}>

            {(response: Response) => {

                if (response.data) {
                    store.update({...response.data, refetch: response.refetch});
                }

                return (
                    <div>
                        <Segment style={{height: '100vh', width: '100%', padding: 0, margin: 0}}>
                            <Map store={store}/>
                            <Rail internal attached position={'left'} style={{height: '100%', padding: '2em'}}>
                                {this.getLeftRailSegment(response)}
                            </Rail>
                            <Rail internal position={'right'} style={{height: '100%', padding: '2em'}}>
                                <RightRail store={store}/>
                            </Rail>
                        </Segment>
                    </div>
                )
            }}
        </Query>;
    }
}


export default function (props: any) {
    return (<Layout location={props.location}>
        <GuideComponent store={new Store()} {...props} />
    </Layout>)
};
