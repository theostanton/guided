import * as React from 'react'
import {useEffect, useState} from 'react'
import AuthStore from "stores/AuthStore";
import {Dimensions, ScaledSize} from "react-native";
import Desktop from "./Desktop";
import Device from "../stores/Device";
import {Provider} from "mobx-react";
import Mobile from "./Mobile";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

function DimensionsWrapper(props: { children: (dimensions: { screen: ScaledSize, window: ScaledSize }) => React.ReactNode }): JSX.Element {
  const [dimensions, setDimensions] = useState({window, screen});

  const onChange = ({window, screen}) => {
    setDimensions({window, screen});
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
  device: Device = new Device()

  async componentDidMount() {
    await this.authStore.init()
  }

  render() {
    return <DimensionsWrapper>
      {({screen, window}) => {
        this.device.update(window)
        if (this.device.isLandscape()) {
          return <Provider authStore={this.authStore} device={this.device}><Desktop/></Provider>
        } else {
          return <Provider authStore={this.authStore} device={this.device}><Mobile/></Provider>
        }
      }}
    </DimensionsWrapper>
  }
}