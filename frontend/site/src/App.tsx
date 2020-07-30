import 'react-native-gesture-handler';

import {StyleSheet} from 'react-native';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {inject, observer, Provider} from 'mobx-react';
import AuthStore from 'stores/AuthStore';

import LoginScreen from 'screens/Login';
import SignupScreen from 'screens/Signup';
import AppRouter from 'utils/router/AppRouter';
import HomeScreen from 'screens/Home';
import AccountScreen from 'screens/Account';
import {createStackNavigator} from '@react-navigation/stack';
import {ApolloProvider} from "@apollo/client";
import client from "api/client";
import CreateScreen from "./screens/Create";
import ProfileScreen from "./screens/Profile";
import GuideScreen from "./screens/Guide";


type Props = {
  authStore?: AuthStore
}

class RouterWrapper extends React.Component<{ navigation: any }> {
  render() {
    const router = AppRouter.create(this.props.navigation)


    return <Provider router={router}>
      {this.props.children}
    </Provider>
  }
}

@inject("authStore")
@observer
class Content extends React.Component<Props> {

  router: AppRouter = new AppRouter()

  renderAuthed() {
    const Tab = createBottomTabNavigator<TabParamList>();
    const Stack = createStackNavigator<ParamList>();
    type Props<RouteName extends keyof ParamList> = { navigation: any, route: RouteProp<ParamList, RouteName> }
    return (
      <Provider router={this.router}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Root'}>
            <Stack.Screen name={'Root'} options={{
              headerShown: false
            }}>
              {(props) => {
                this.router.updateNavigation(props.navigation)
                return (<Tab.Navigator>
                  <Tab.Screen name={'Home'} component={HomeScreen}/>
                  <Tab.Screen name={'Account'} component={AccountScreen}/>
                </Tab.Navigator>)
              }
              }
            </Stack.Screen>
            <Stack.Screen name={'Create'}>
              {(props: Props<'Create'>) => {
                this.router.updateNavigation(props.navigation)
                return <CreateScreen params={props.route.params}/>
              }}
            </Stack.Screen>
            <Stack.Screen name={'Profile'}>
              {(props: Props<'Profile'>) => {
                this.router.updateNavigation(props.navigation)
                return <ProfileScreen params={props.route.params}/>
              }}
            </Stack.Screen>
            <Stack.Screen name={'Guide'}>
              {(props: Props<'Guide'>) => {
                this.router.updateNavigation(props.navigation)
                return <GuideScreen params={props.route.params}/>
              }}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }

  renderUnAuthed() {
    const Stack = createStackNavigator<UnAuthParamList>();

    return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Login'} component={LoginScreen}/>
          <Stack.Screen name={'Signup'} component={SignupScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


  render() {
    let isLoggedIn = this.props.authStore.user !== undefined;
    return (
      <ApolloProvider client={client}>
        {isLoggedIn ? this.renderAuthed() : this.renderUnAuthed()}
      </ApolloProvider>
    )
  }
}

const authStore = new AuthStore();

export default class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('App()!')
  }

  render() {
    return (<Provider authStore={authStore}>
        <Content/>
      </Provider>
    )

  }
}


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

