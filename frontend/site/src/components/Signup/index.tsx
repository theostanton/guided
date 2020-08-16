import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LabelledTextInput from "components/LabelledTextInput";
import Button from "components/Button";
import Link from "components/Link";
import {h4} from "styles/text";
import {half} from "../../styles/dimensions";


export type Props = {
  initialState?: State
  signup: (username: string, email: string, password: string) => Promise<{ success: boolean, message?: string }>
}

export type State = {
  email: string;
  username: string;
  password: string;
  loading: boolean;
  error: any | undefined;
};


export default class Signup extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = this.props.initialState || {
      email: '',
      username: '',
      password: '',
      error: undefined,
      loading: false,
    }
  }

  get buttonDisabled(): boolean {
    return (
      this.state.email.length === 0 ||
      this.state.username.length === 0 ||
      this.state.password.length === 0 ||
      this.state.loading
    );
  }

  async signUp(): Promise<void> {
    const {password, username, email} = this.state;
    this.setState({loading: true});
    try {
      const result = await this.props.signup(
        username,
        email,
        password,
      );
      if (result.success) {
        //
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
        <LabelledTextInput
          label={'Username'}
          inputType={'username'}
          initialText={this.state.username}
          onChange={(text) => {
            this.setState({
              username: text,
            });
          }}>
          Login component
        </LabelledTextInput>
        <LabelledTextInput
          label={'Email'}
          initialText={this.state.email}
          onChange={(text) => {
            this.setState({
              email: text,
            });
          }}>
          Login component
        </LabelledTextInput>
        <LabelledTextInput
          label={'Password'}
          inputType={'password'}
          initialText={this.state.password}
          onChange={(text) => {
            this.setState({
              password: text,
            });
          }}>
          Login component
        </LabelledTextInput>
        {this.state.error && <Text style={styles.error}>
          {this.state.error.toString()}
        </Text>}
        <View style={styles.button}>
          <Button
            label={'Sign up'}
            loading={this.state.loading}
            disabled={this.buttonDisabled}
            onPress={async () => {
              await this.signUp();
            }}
          />
        </View>
        <Link
          textStyle={styles.already}
          href={'/login'}>
          Already a member? Click to log in
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
