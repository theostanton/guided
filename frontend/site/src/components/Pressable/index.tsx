import {TouchableHighlight, View, ViewStyle} from "react-native";
import React from "react";
import {Link as NavigationLink} from '@react-navigation/native'

type Props = {
  href?: string
  style?: ViewStyle | ViewStyle[]
  onPress?: () => Promise<void> | void
}

type State = {
  hovering: boolean
}
export default class Pressable extends React.Component<Props, State> {
  state: State = {
    hovering: false
  }

  render() {
    return <TouchableHighlight
      onPress={this.props.onPress}
      underlayColor={"#eeeeee"}
      style={[this.props.style, {
        opacity: this.state.hovering === true ? 0.8 : 1.0
      }]}
      // @ts-ignore
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
      <View>{this.props.href ?
        <NavigationLink to={this.props.href}> {this.props.children}</NavigationLink> : this.props.children}
      </View>
    </TouchableHighlight>;
  }
}