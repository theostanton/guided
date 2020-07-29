import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {User} from "api/generated";

type Props = {
  user: Pick<User, 'colour'>
};
type State = {};

export default class ProfilePic extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection:'row',
    margin:0,
    padding:0
  },
  image:{
    flexGrow:1,
    aspectRatio:1,
    backgroundColor: 'red',
  }
});
