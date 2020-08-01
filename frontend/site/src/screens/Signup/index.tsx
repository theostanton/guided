import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {inject} from 'mobx-react';
import LabelledTextInput from 'components/LabelledTextInput';
import {h4} from 'styles/text';
import {UnauthedProps} from "utils/router/ScreenProps";

type Props = UnauthedProps
type State = {
  email: string;
  username: string;
  password: string;
  loading: boolean;
  error: any | undefined;
};

@inject('authStore')
export default class SignupScreen extends React.Component<Props, State> {
  state: State = {
    email: '',
    username: '',
    password: '',
    error: undefined,
    loading: false,
  };

  get buttonDisabled(): boolean {
    return (
      this.state.email.length === 0 ||
      this.state.username.length === 0 ||
      this.state.password.length === 0 ||
      this.state.loading === true
    );
  }

  async signUp(): Promise<void> {
    console.log('signUp')
    const {password, username, email} = this.state;
    this.setState({loading: true});
    console.log('password', password)
    console.log('username', username)
    console.log('email', email)
    try {
      const result = await this.props.authStore.signUp(
        username,
        email,
        password,
      );
      console.log('result', result)
      if (result.success) {
        // await this.props.router.goHome()
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
          onChange={(text) => {
            this.setState({
              username: text,
            });
          }}>
          Login component
        </LabelledTextInput>
        <LabelledTextInput
          label={'Email'}
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
          onChange={(text) => {
            this.setState({
              password: text,
            });
          }}>
          Login component
        </LabelledTextInput>
        <View style={styles.button}>
          <Button
            title={'Log in'}
            disabled={this.buttonDisabled}
            onPress={async () => {
              await this.signUp();
            }}
          />
        </View>
        <View>
          <Text
            style={styles.already}
            onPress={async () => {
              this.props.navigation.navigate('Login')
            }}
          >
            Already a member? Click to log in
          </Text>
        </View>
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
  button: {},
  already: {
    ...h4
  },
});
