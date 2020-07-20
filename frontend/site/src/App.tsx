import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import SomeComponent from 'components/SomeComponent';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.root}>
            <Text>Jello World</Text>
          </View>
          <SomeComponent />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  root: {
    display: 'flex',
  },
  content: {
    alignSelf: 'center',
  },
});

export default App;
