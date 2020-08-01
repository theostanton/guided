import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {inject} from 'mobx-react';
import LabelledTextInput from 'components/LabelledTextInput';
import {h4} from 'styles/text';
import {UnauthedProps} from "utils/navigation/ScreenProps";
import Link from "../../components/Link";

type Props = UnauthedProps

type State = {
  email: string;
  password: string;
  loading: boolean;
  error: any | undefined;
};

@inject('authStore')
export default class LoginScreen extends React.Component<Props, State> {
  state: State = {
    email: '',
    password: '',
    error: undefined,
    loading: false,
  };

  get buttonDisabled(): boolean {
    return (
      this.state.email.length === 0 ||
      this.state.password.length === 0 ||
      this.state.loading === true
    );
  }

  async logIn(): Promise<void> {
    const {password, email} = this.state;
    console.log('email',email)
    console.log('password',password)
    this.setState({loading: true});
    try {
      const result = await this.props.authStore.login(email, password);
      if (result.success) {
        // this.props.navigation.navigate('Root')
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
        </Text>}
        <View style={styles.button}>
          <Button
            title={'Log in'}
            disabled={this.buttonDisabled}
            onPress={async () => {
              await this.logIn();
            }}
          />
        </View>
        <Link
          textStyle={styles.already}
          href={'signup'}>
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
    color: 'red'
  },
  button: {},
  already: {
    ...h4
  },
});
