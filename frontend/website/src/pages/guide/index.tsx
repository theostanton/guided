import * as React from "react";
import {
    Segment,
    Rail
} from "semantic-ui-react";
import {Query} from "@apollo/react-components";
import {Store} from "../../stores/Store";
import LeftRail from "./LeftRail";
import {QUERY} from "./queries";
import RightRail from "./RightRail";
import Layout from "../../components/Layout";
import Map from "../../components/Map";
import {observer} from "mobx-react";

type Props = {
    store: Store
    location: any
}

function extractSlug(pathName: string): string {
    return pathName.split('/')[2]
}

@observer
class GuideComponent extends React.Component<Props> {

    get slug(): string {
        return this.props.location.pathname.split('/')[2]
    }

    render(): React.ReactElement {

        const store = this.props.store;
        console.log('store', store);
        const slug = this.slug;
        return <Query query={QUERY} variables={{slug}} pollInterval={2000}>

            {({loading, error, data, refetch}: any) => {

                console.log('data', data);
                if (data) {
                    store.update({...data, refetch});
                }

                return (
                    <div>
                        <Segment style={{height: '100vh', width: '100%', padding: 0, margin: 0}}>
                            <Map store={store}/>
                            <Rail internal attached position={'left'} style={{height: '100%', padding: '2em'}}>
                                <Segment style={{height: '100%', 'overflowY': 'scroll'}}>
                                    <LeftRail store={store}/>
                                </Segment>
                            </Rail>
                            <Rail internal position='right' style={{height: '100%', padding: '2em'}}>
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
