import * as React from "react";
import Layout from "../components/Layout";
import {QUERY} from './index/queries'
import {Query} from "@apollo/react-components";
import {Store} from "../stores/Store";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import List from "semantic-ui-react/dist/commonjs/elements/List";
import {Guide, Logger} from "@guided/common";
import {ListItem, Grid, GridColumn} from "semantic-ui-react";
import {Link} from "gatsby";

const logger = new Logger('HomePage');

class IndexComponent extends React.Component {


    render(): React.ReactElement {

        return <Query query={QUERY}>

            {({loading, error, data, refetch}: any) => {

                if (loading) {
                    logger.debug('Loading');
                    return <Segment loading/>
                }

                if (error) {
                    logger.json(error)
                    return <Segment>{error.message}</Segment>
                }

                return (
                    <Grid>
                        <GridColumn width={4}>
                            <List divided relaxed style={{padding: '1em'}} celled>
                                {data.allGuides.map((guide: Guide) => {
                                    return <Link key={guide.id} to={`/guide/${guide.slug}`}>
                                        <ListItem style={{backgroundColor: '#eeeeee', padding: '1em'}}>
                                            <List.Content>
                                                <List.Header as='h1'>{guide.title}</List.Header>
                                                <List.Description>Updated 22 mins ago</List.Description>
                                            </List.Content>
                                        </ListItem>
                                    </Link>

                                })}
                            </List>
                        </GridColumn>
                    </Grid>
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
