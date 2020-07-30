import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {inject} from 'mobx-react';
import {h4} from 'styles/text';
import {ScreenProps} from 'utils/router/ScreenProps';

type Props = ScreenProps<'Home'>

@inject('authStore','router')
export default class HomeScreen extends React.Component<Props> {

  render() {
    return (
      <View>
        <Text>Welcome {this.props.authStore.user?.username}</Text>
        <Button title={'My Profile'} onPress={async () => {
          await this.props.router.goToProfile(this.props.authStore.user.username)
        }}/>
        <Button title={'Create'} onPress={async () => {
          await this.props.router.goToCreate()
        }}/>
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
