import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {h4, h5} from 'styles/text';
import {half} from 'styles/dimensions';

type Props = {
  label: string;
  style?: ViewStyle
};
export default class LabelledText extends React.Component<Props> {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.label}>{this.props.label}</Text>
        <Text style={styles.input}> {this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    paddingTop: half,
    paddingBottom: half,
  },
  label: {
    ...h5,
  },
  input: {
    ...h4,
    padding: half,
  },
});
