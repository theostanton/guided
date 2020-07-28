import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScreenProp} from 'utils/router/ScreenProp';
import {inject, observer} from 'mobx-react';
import AppRouter from '../utils/router/AppRouter';

type Props = ScreenProp<'Home'>

@inject('authStore')
@observer
export default class HomeScreen extends React.Component<Props> {
  private router: AppRouter;

  constructor(props:Props) {
    super(props);
    this.router = AppRouter.create(props.navigation)
  }

  render() {
    return (
      <View>
        <Text>Welcome {this.props.authStore.user.username}</Text>
        <Button title={'My Profile'} onPress={async () => {
          await this.router.goToProfile(this.props.authStore.user.username)
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
