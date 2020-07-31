import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'mobx-react';
import AuthStore from 'stores/AuthStore';
import Content from "./Content";
import AppRouter from "../utils/router/AppRouter";

export default class App extends React.Component {

  router: AppRouter = new AppRouter()
  authStore: AuthStore = new AuthStore(undefined)

  async componentDidMount() {
    await this.authStore.init()
  }

  render() {
    return <Provider authStore={this.authStore} router={this.router}>
      <Content/>
    </Provider>
  }

}

