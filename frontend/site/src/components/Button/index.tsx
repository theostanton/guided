import React from 'react';
import {Button as ReactNativeButton, StyleSheet} from 'react-native';
import {NavigationProps} from "utils/navigation/ScreenProps";

type Props = {
  label: string
  onPress: () => Promise<void> | void
} & NavigationProps
type State = {};

export default class Button extends React.Component<Props, State> {
  render() {
    return (
      <ReactNativeButton title={this.props.label} onPress={(this.props.onPress)}/>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
