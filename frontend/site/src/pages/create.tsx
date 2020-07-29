import Layout from 'components/Layout';
import React from 'react';
import {webRouter} from 'utils/router/WebRouter';
import CreateScreen from "screens/Create";

export default class CreatePage extends React.Component {
  render() {
    return (
      <Layout>
        <CreateScreen params={{}} router={webRouter}/>
      </Layout>
    );
  }
}