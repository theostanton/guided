import React from 'react';
import {Button as ReactNativeButton, StyleSheet} from 'react-native';
import Link from "components/Link";

type Props = {
  label: string
  href?: string
  onPress?: () => Promise<void>
};
type State = {};

export default class Button extends React.Component<Props, State> {
  render() {
    return (
      <Link href={this.props.href}>
        <ReactNativeButton title={this.props.label} onPress={(this.props.onPress || (() => {
        }))}/>
      </Link>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
