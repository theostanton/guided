import React from 'react';
import {StyleSheet} from 'react-native';
import {ViewPagerProps} from "../types";
import ViewPager from "@react-native-community/viewpager";

type State = {};

export default class NativeViewPager extends React.Component<ViewPagerProps, State> {
  render() {
    return (
      <ViewPager style={styles.root}
                 onPageSelected={(event) => {
                   this.props.onChange(event.nativeEvent.position)
                 }}>
        {this.props.pages}
      </ViewPager>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'green'
  },
});
