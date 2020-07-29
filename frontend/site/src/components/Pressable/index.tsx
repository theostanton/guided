import {TouchableHighlight} from "react-native";
import React from "react";

type Props = {
  onPress: () => Promise<void> | void
}

type State = {
  hovering: boolean
}
export default class Pressable extends React.Component<Props, State> {
  state:State = {
    hovering:false
  }

  render() {
    return <TouchableHighlight
      onPress={this.props.onPress}
      underlayColor={"#eeeeee"}
      style={{
        opacity: this.state.hovering === true ? 0.8 : 1.0
      }}
      onMouseEnter={() => {
        this.setState({
          hovering: true
        })
      }}
      onMouseLeave={() => {
        this.setState({
          hovering: false
        })
      }}
    >
      {this.props.children}
    </TouchableHighlight>;
  }
}