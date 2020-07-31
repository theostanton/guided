import {hot} from 'react-hot-loader/root'
import * as React from 'react'
import {Provider} from "mobx-react";
import AuthStore from "stores/AuthStore";
import Content from "./Content";
import AppRouter from "utils/router/AppRouter";


class App extends React.Component {

  authStore: AuthStore = new AuthStore(undefined)
  router: AppRouter = new AppRouter()

  async componentDidMount() {
    await this.authStore.init()
  }

  render() {
    return <Provider authStore={this.authStore} router={this.router}>
      <Content/>
    </Provider>
  }
}

export default hot(App)