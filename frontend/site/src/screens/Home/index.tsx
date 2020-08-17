import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import {ScreenProps} from "utils/navigation/ScreenProps";
import Link from "components/Link";
import AllUsersList from "components/UserList/AllUsersList";
import {h2} from "styles/text";
import {half} from "styles/dimensions";
import HomeFeed from "../../components/Feed/HomeFeed";

type Props = ScreenProps<'Root'>

@inject('authStore')
export default class HomeScreen extends React.Component<Props> {

  render() {

    let self = this.props.authStore?.user?.username;
    return (
      <View style={styles.root}>
        <View style={styles.left}>
          <Text>Welcome {self}</Text>
          <Link href={`/${self}`} textStyle={styles.button}>My profile</Link>
          <Link href={'/create'} textStyle={styles.button}>Create</Link>
          {self && <AllUsersList self={self}/>}
        </View>
        <View style={styles.right}>
          <Text style={h2}>Feed</Text>
          {self && <HomeFeed self={self}/>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    flexDirection: 'row'
  },
  button: {
    marginBottom: half
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
  },
});
