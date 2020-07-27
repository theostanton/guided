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
import {Provider} from 'mobx-react';
import SomeStore from './stores/SomeStore';

const App = () => {
  const someStore = new SomeStore();
  return (
    <Provider someStore={someStore}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.root}>
            <Text>Jello World value = {someStore.value}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
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
