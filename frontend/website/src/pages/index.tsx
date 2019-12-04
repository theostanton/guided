import * as React from "react";
import {Link} from "gatsby";

import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import Map from "../components/Map";
import Layout, {withLayout, LayoutProps} from "../components/Layout";
import {QUERY} from './index/queries'
import {
    Segment,
    Rail
} from "semantic-ui-react";
import {Query} from "@apollo/react-components";
import {Store} from "../stores/Store";
import {observer} from "mobx-react";
import LeftRail from "./index/LeftRail";
import RightRail from "./index/RightRail";

type Props = {
    store: Store
}

@observer
class IndexComponent extends React.Component<Props> {

    render(): React.ReactElement {

        const store = this.props.store;

        return <Query query={QUERY} pollInterval={2000}>

            {({loading, error, data, refetch}: any) => {
                console.log('store!', store);

                if (data) {
                    console.log('data', Object.keys(data));
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
        <IndexComponent store={new Store()} {...props} />
    </Layout>)
};
