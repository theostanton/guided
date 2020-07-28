import 'react-native-gesture-handler';

import {StyleSheet} from 'react-native';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {observer, Provider} from 'mobx-react';
import AuthStore from 'stores/AuthStore';

import LoginScreen from 'screens/Login';
import SignupScreen from 'screens/Signup';
import AppRouter from './utils/router/AppRouter';
import HomeScreen from './screens/Home';
import AccountScreen from './screens/Account';
import {createStackNavigator} from '@react-navigation/stack';

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

@observer
export default class App extends React.Component {

  renderAuthed() {
    const Tab = createBottomTabNavigator<ParamList>();
    return (
      <NavigationContainer linking={linking}>
        <Tab.Navigator><Tab.Screen name={'Home'}>
          {(props) => <HomeScreen {...props} params={{}} router={AppRouter.create(props.navigation)}/>}
        </Tab.Screen>
          <Tab.Screen name={'Account'}>
            {(props) => <AccountScreen {...props} params={{}} router={AppRouter.create(props.navigation)}/>}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  renderUnAuthed() {
    const Stack = createStackNavigator<ParamList>();

    return (

      <NavigationContainer linking={linking}>
        <Stack.Navigator><Stack.Screen name={'Login'}>
          {(props) => <LoginScreen {...props} params={{}} router={AppRouter.create(props.navigation)}/>}
        </Stack.Screen>
          <Stack.Screen name={'Signup'}>
            {(props) => <SignupScreen {...props} params={{}} router={AppRouter.create(props.navigation)}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  render() {
    return (
      <Provider authStore={authStore}>
        {authStore.isLoggedIn === true ? this.renderAuthed() : this.renderUnAuthed()}
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

