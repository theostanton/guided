import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LabelledTextInput from "../LabelledTextInput";
import Button from "../Button";
import Link from "../Link";
import {h4} from "styles/text";
import {half} from "styles/dimensions";


export type Props = {
  initialState?: State
  login: (email: string, password: string) => Promise<{ success: boolean, message?: string }>
}

export type State = {
  email: string;
  password: string;
  loading: boolean;
  error: any | undefined;
};


export default class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = props.initialState || {
      email: '',
      password: '',
      error: undefined,
      loading: false,
    }
  }

  get buttonDisabled(): boolean {
    return (this.state.email.length === 0 ||
      this.state.password.length === 0 || this.state.loading);
  }

  async logIn(): Promise<void> {
    const {password, email} = this.state;
    this.setState({loading: true});
    try {
      const result = await this.props.login(email, password);
      if (result.success) {
      } else {
        this.setState({
          error: result.message || 'Something went wrong',
          loading: false,
        });
      }
    } catch (e) {
      console.error(e);
      this.setState({error: e, loading: false});
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.textInput}>
          <LabelledTextInput
            label={'Email'}
            initialText={this.state.email}
            disabled={this.state.loading}
            onChange={(text) => {
              this.setState({
                email: text,
              });
            }}>
            Login component
          </LabelledTextInput>
        </View>
        <View style={styles.textInput}>
          <LabelledTextInput
            label={'Password'}
            inputType={'password'}
            disabled={this.state.loading}
            initialText={this.state.password}
            onChange={(text) => {
              this.setState({
                password: text,
              });
            }}>
            Login component
          </LabelledTextInput>
        </View>
        {this.state.error && <Text style={styles.error}>
          {this.state.error.toString()}
        </Text>}
        <View style={styles.button}>
          <Button
            label={'Log in'}
            disabled={this.buttonDisabled}
            loading={this.state.loading}
            onPress={async () => {
              await this.logIn();
            }}
          />
        </View>
        <Link
          textStyle={styles.already}
          href={'/signup'}>
          Not a member? Click to sign up
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    maxWidth: 400,
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'column',
  },
  textInput: {},
  error: {
    ...h4,
    color: 'red',
  },
  button: {
    paddingTop: half
  },
  already: {
    paddingTop:half,
    ...h4
  },
});
