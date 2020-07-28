import 'react-native-gesture-handler';

import {StyleSheet} from 'react-native';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';

import React from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {observer, Provider} from 'mobx-react';
import AuthStore from 'stores/AuthStore';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from 'screens/login';
import SignupScreen from './screens/signup';

const authStore = new AuthStore();

const linking: LinkingOptions = {
  prefixes: [],
  config: {
    screens: {
      Home: '',
      Signup: 'signup',
      Login: 'login',
    },
  },
};

const Stack = createStackNavigator<ParamList>();

@observer
export default class App extends React.Component {

  render() {
    return (
      <Provider authStore={authStore}>
        <NavigationContainer linking={linking}>
          <Stack.Navigator>
            <Stack.Screen name={'Login'} component={LoginScreen}/>
            <Stack.Screen name={'Signup'} component={SignupScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
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

