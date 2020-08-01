import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {inject} from 'mobx-react';
import LabelledTextInput from 'components/LabelledTextInput';
import {h4} from 'styles/text';
import {UnauthedProps} from "utils/navigation/ScreenProps";
import Link from "components/Link";

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
    const {password, username, email} = this.state;
    this.setState({loading: true});
    try {
      const result = await this.props.authStore.signUp(
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
        <Link
          textStyle={styles.already}
          href={'login'}>
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
  button: {},
  already: {
    ...h4
  },
});
