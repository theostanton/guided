import React from 'react';
import {UnauthedProps} from "utils/navigation/ScreenProps";
import {inject} from "mobx-react";
import Signup from "components/Signup";

export type Props = UnauthedProps

export type State = {};

@inject('authStore')
export default class SignupScreen extends React.Component<Props, State> {

  render() {
    return <Signup signup={this.props.authStore!.signUp}/>
  }

}

