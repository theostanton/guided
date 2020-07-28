import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import AuthStore from 'stores/AuthStore';
import {inject} from 'mobx-react';
import LabelledTextInput from 'components/LabelledTextInput';
import {RouterProp} from '../../utils/router/RouterProp';
import {h4} from '../../styles/text';

type Props =RouterProp &  {
  authStore?: AuthStore;
};
type State = {
  email: string;
  username: string;
  password: string;
  loading: boolean;
  error: any | undefined;
};

@inject('authStore')
export default class Signup extends React.Component<Props, State> {
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
    console.log('password',password)
    console.log('username',username)
    console.log('email',email)
    try {
      const result = await this.props.authStore.signUp(
        username,
        email,
        password,
      );
      console.log('result',result)
      if (result.success) {
        await this.props.router.goHome()
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
              await this.props.router.goToLogin()
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