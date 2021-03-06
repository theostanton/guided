import * as React from 'react'
import {useEffect, useState} from 'react'
import AuthStore from "stores/AuthStore";
import {Dimensions, ScaledSize} from "react-native";
import Desktop from "./Desktop";
import {Provider} from "mobx-react";
import Mobile from "./Mobile";
import {Helmet} from "react-helmet";
import {autorun, IReactionDisposer} from "mobx";
import FollowingStore from "../stores/FollowingStore";
import {AppContext, Context} from "./Context";

type ScaledSizes = { window: ScaledSize, screen: ScaledSize }
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

function DimensionsWrapper(props: { children: (dimensions: ScaledSizes) => React.ReactNode }): JSX.Element {
  const [dimensions, setDimensions] = useState({window, screen});

  const onChange = (dimensions: ScaledSizes) => {
    setDimensions(dimensions);
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  return <>{props.children(dimensions)}</>
}

export default class App extends React.Component {

  authStore: AuthStore = new AuthStore()
  followingStore: FollowingStore = new FollowingStore()
  disposer: IReactionDisposer | undefined

  async componentDidMount() {
    await this.authStore.init()
    this.disposer = autorun(() => {
      if (this.authStore.user) {
        this.followingStore.subscribe()
      } else {
        this.followingStore.unsubscribe()
      }
    })

  }

  componentWillUnmount() {
    if (this.disposer) {
      this.disposer()
    }
    this.followingStore.unsubscribe()
  }

  render() {
    return <>
      <Helmet>
        <meta charSet="utf-8"/>
        <link rel="apple-touch-icon" sizes="180x180" href="../../web/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="../../web/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../../web/favicon-16x16.png"/>
        <link rel="manifest" href="../../web/site.webmanifest"/>
      </Helmet>
      <DimensionsWrapper>
        {({screen, window}) => {
          const appContext = new AppContext(window)
          if (appContext.isLandscape()) {
            return <Context.Provider value={appContext}>
              <Provider
                authStore={this.authStore}
                followingStore={this.followingStore}>
                <Desktop/>
              </Provider>
            </Context.Provider>
          } else {
            return <Context.Provider value={appContext}>
              <Provider
                authStore={this.authStore}
                followingStore={this.followingStore}>
                <Mobile/>
              </Provider>
            </Context.Provider>
          }
        }}
      </DimensionsWrapper>
    </>
  }
}