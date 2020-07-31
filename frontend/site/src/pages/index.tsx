import 'react-hot-loader'
import {hot} from 'react-hot-loader/root';
import {View} from 'react-native';
import Layout from 'components/Layout';
import React from 'react';
import HomeScreen from 'screens/Home';
import {webRouter} from 'utils/router/WebRouter';


function App(props) {
  return (
    <Layout>
      <View>
        <HomeScreen router={webRouter}/>
      </View>
    </Layout>
  );
}

export default hot(App)
