import React from 'react';
import {StyleSheet} from 'react-native';
import {h4} from 'styles/text';
import {UnauthedProps} from "../../utils/navigation/ScreenProps";
import {inject} from "mobx-react";
import Login from "components/Login";

type Props = UnauthedProps

type State = {}

@inject('authStore')
export default class LoginScreen extends React.Component<Props, State> {

  render() {
    return <Login login={this.props.authStore!.login}/>;
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
