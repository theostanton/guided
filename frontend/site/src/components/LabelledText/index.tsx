import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {h4, h5} from 'styles/text';
import {half} from 'styles/dimensions';

type Props = {
  label: string;
};
export default class LabelledText extends React.Component<Props> {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.label}>{this.props.label}</Text>
        <Text style={styles.input}> {this.props.children}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    padding: half,
  },
  label: {
    ...h5,
  },
  input: {
    ...h4,
    padding: half,
  },
});
