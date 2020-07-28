import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import AuthStore from 'stores/AuthStore';
import {inject} from 'mobx-react';
import LabelledTextInput from 'components/LabelledTextInput';
import {RouterProp} from '../../utils/router/RouterProp';
import {h4} from '../../styles/text';

type Props = RouterProp & {
  authStore?: AuthStore;
};
type State = {
  email: string;
  password: string;
  loading: boolean;
  error: any | undefined;
};

@inject('authStore')
export default class Login extends React.Component<Props, State> {
  state: State = {
    email: '',
    password: '',
    error: undefined,
    loading: false,
  };

  get buttonDisabled(): boolean {
    console.log('buttonDisabled()');
    return (
      this.state.email.length === 0 ||
      this.state.password.length === 0 ||
      this.state.loading === true
    );
  }

  async logIn(): Promise<void> {
    const {password, email} = this.state;
    this.setState({loading: true});
    try {
      const result = await this.props.authStore.login(email, password);
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
        <View style={styles.textInput}>
          <LabelledTextInput
            label={'Email'}
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
        </Text> }
        <View style={styles.button}>
          <Button
            title={'Log in'}
            disabled={this.buttonDisabled}
            onPress={async () => {
              await this.logIn();
            }}
          />
        </View>
        <View >
          <Text
            style={styles.already}
            onPress={async () => {
              await this.props.router.goToSignup()
            }}
          >
            Not a member? Click to sign up
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
  error: {
    ...h4,
    color:'red'
  },
  button: {},
  already: {
    ...h4
  },
});