import App, {Container} from 'next/app';

import {Provider} from 'mobx-react';
import AuthStore from 'stores/AuthStore';
import {webRouter} from "utils/router/WebRouter";
import {ApolloProvider} from "@apollo/client";
import client from "api/client";
import React from "react";
import Head from 'next/head';

type Props = {}
type State = {
  authStore?: AuthStore
}

let authStore: AuthStore

class Wrapper extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {}
  }

  async componentDidMount() {
    console.log('App.componentDidMount()')
    const authStore = await AuthStore.init()
    this.setState({
      authStore
    })
  }

  render() {
    if (this.state.authStore === undefined) {
      return null
    }
    return <Provider authStore={this.state.authStore} router={webRouter}>
      <ApolloProvider client={client}>
        {this.props.children}
      </ApolloProvider>
    </Provider>;
  }
}

export default class GuidedApp extends App {


  render() {
    const {Component} = this.props;

    return (
      <Container>
        <Head>
          <title>Guided</title>
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <Wrapper>
          <Component {...this.props}/>
        </Wrapper>
      </Container>
    );
  }
}
