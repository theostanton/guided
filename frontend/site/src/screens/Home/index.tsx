import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {inject} from 'mobx-react';
import {ScreenProps} from "utils/navigation/ScreenProps";
import Link from "components/Link";
import AllUsersList from "components/UserList/AllUsersList";
import {h2, h4} from "styles/text";
import {half, whole} from "styles/dimensions";
import HomeFeed from "../../components/Feed/HomeFeed";

type Props = ScreenProps<'Root'>

@inject('authStore')
export default class HomeScreen extends React.Component<Props> {

  render() {

    return (
      <View style={styles.root}>
        <Text>Welcome {this.props.authStore.user?.username}</Text>
        <Link href={`/${this.props.authStore.user.username}`} textStyle={styles.button}>My profile</Link>
        <Link href={'/create'} textStyle={styles.button}>Create</Link>
        <View style={styles.usersList}>
          <AllUsersList/>
        </View>
        <Text style={h2}>Feed</Text>
        <View style={styles.feed}>
          <HomeFeed/>
        </View>
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
  viewPager: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red'
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
  },
  usersList: {
    width: '100%',
    flex: 1
  },
  feed: {
    marginLeft: whole,
    marginRight: whole,
    flex: 1
  }
});
