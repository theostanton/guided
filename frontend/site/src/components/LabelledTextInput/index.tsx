import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {h4, h5} from 'styles/text';
import {hairline, half, quarter, whole} from 'styles/dimensions';
import {border} from "styles/colors";

type Props = {
  inputType?: InputType;
  label: string;
  initialText?: string;
  onChange?: (value: string) => void;
};
type State = {
  text: string;
};

type InputType = 'password' | 'username';

export default class LabelledTextInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      text: props.initialText || '',
    };
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.label}>{this.props.label}</Text>
        <TextInput
          style={styles.input}
          value={this.state.text}
          editable={this.props.onChange !== undefined}
          textContentType={this.props.inputType}
          secureTextEntry={this.props.inputType === 'password'}
          onChange={
            this.props.onChange &&
            ((e) => {
              const text = e.nativeEvent.text;
              this.setState({
                text,
              });
              this.props.onChange!(text);
            })
          }
        />
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
    marginTop: quarter,
    paddingLeft: whole,
    paddingRight: whole,
    paddingTop: half,
    paddingBottom: half,
    borderRadius: whole,
    borderColor: border,
    borderWidth: hairline
  },
});
