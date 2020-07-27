import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import AuthStore from 'stores/AuthStore';
import {inject} from 'mobx-react';
import LabelledTextInput from 'components/LabelledTextInput';

type Props = {
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
    console.log('buttonDisabled()');
    return (
      this.state.email.length === 0 ||
      this.state.username.length === 0 ||
      this.state.password.length === 0 ||
      this.state.loading === true
    );
  }

  async signUp(): Promise<void> {
    const {password, username, email} = this.state;
    this.setState({loading: true});
    try {
      const result = await this.props.authStore.signUp(
        username,
        email,
        password,
      );
      if (result.success) {
        // await navigate(`/`)
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
});
