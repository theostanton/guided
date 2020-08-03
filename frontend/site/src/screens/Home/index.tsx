import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {inject} from 'mobx-react';
import {h4} from 'styles/text';
import {half} from "styles/dimensions";
import {ScreenProps} from "utils/navigation/ScreenProps";
import Link from "components/Link";
import ViewPager from "components/ViewPager";

type Props = ScreenProps<'Root'>

@inject('authStore')
export default class HomeScreen extends React.Component<Props> {

  render() {

    const pages: React.ReactElement[] = [
      <View key="1" style={{width: '100%'}}>
        <Text>First page</Text>
      </View>,
      <View key="2" style={{width: '100%'}}>
        <Text>Second page</Text>
      </View>
    ]
    return (
      <View style={styles.root}>
        <Text>Welcome {this.props.authStore.user?.username}</Text>
        <Link href={`/${this.props.authStore.user.username}`} textStyle={styles.button}>My profile</Link>
        <Link href={'/create'} textStyle={styles.button}>Create</Link>
        <View style={styles.viewPager}>
          <ViewPager pages={pages}
                     onChange={(current) => {
                       console.log('current->', current)
                     }}/>
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
  }
});
