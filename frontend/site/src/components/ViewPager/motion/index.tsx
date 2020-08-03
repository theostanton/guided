import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ViewPagerProps} from "../types";
import {Page} from './Page';
import {motion} from 'framer-motion';

type State = {};

export default class MotionViewPager extends React.Component<ViewPagerProps, State> {
  render() {
    return <Page style={{width: '100vw'}}>
      {this.props.pages.map((child, index) => {
        return <motion.div key={index}>
          <View style={styles.child}>
            {child}
          </View>
        </motion.div>
      })}
    </Page>
  }
}

const styles = StyleSheet.create({
  root: {},
  child: {
    width: '100vw',
    height: '100%',
    backgroundColor: 'blue'
  }
});
