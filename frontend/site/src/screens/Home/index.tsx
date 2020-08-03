import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {inject} from 'mobx-react';
import {h4} from 'styles/text';
import {half} from "styles/dimensions";
import {ScreenProps} from "utils/navigation/ScreenProps";
import Link from "components/Link";

type Props = ScreenProps<'Root'>

@inject('authStore')
export default class HomeScreen extends React.Component<Props> {

  render() {
    return (
      <View style={styles.root}>
        <Text>Welcome {this.props.authStore.user?.username}</Text>
        <Link href={`/${this.props.authStore.user.username}`} textStyle={styles.button}>My profile</Link>
        <Link href={'/create'} textStyle={styles.button}>Create</Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    flexDirection: 'column'
  },
  textInput: {},
  error: {
    ...h4,
    color: 'red'
  },
  button: {
    marginBottom: half
  },
  already: {
    ...h4
  },
  map: {
    width: '100%',
    flex: 1
  }
});
