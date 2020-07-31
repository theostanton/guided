import 'react-native-gesture-handler';

import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'mobx-react';
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
import GuideStore from "./screens/Guide/store";


type Props = {}

type State = {
  authStore?: AuthStore
}

const router: AppRouter = new AppRouter()

export default class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {}
  }


  async componentDidMount() {
    const authStore = await AuthStore.init()
    this.setState({
      authStore
    })
  }


  renderAuthed() {
    const Tab = createBottomTabNavigator<TabParamList>();
    const Stack = createStackNavigator<ParamList>();
    type Props<RouteName extends keyof ParamList> = { navigation: any, route: RouteProp<ParamList, RouteName> }
    return (
      <ApolloProvider client={client}>
        <Provider router={router} authStore={this.state.authStore}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={'Root'}>
              <Stack.Screen name={'Root'} options={{
                headerShown: false
              }}>
                {(props) => {
                  router.updateNavigation(props.navigation)
                  return (<Tab.Navigator>
                    <Tab.Screen name={'Home'} component={HomeScreen}/>
                    <Tab.Screen name={'Account'} component={AccountScreen}/>
                  </Tab.Navigator>)
                }
                }
              </Stack.Screen>
              <Stack.Screen name={'Create'}>
                {(props: Props<'Create'>) => {
                  router.updateNavigation(props.navigation)
                  return <CreateScreen params={props.route.params}/>
                }}
              </Stack.Screen>
              <Stack.Screen name={'Profile'}>
                {(props: Props<'Profile'>) => {
                  router.updateNavigation(props.navigation)
                  return <ProfileScreen params={props.route.params}/>
                }}
              </Stack.Screen>
              <Stack.Screen name={'Guide'}>
                {(props: Props<'Guide'>) => {
                  router.updateNavigation(props.navigation)
                  let guideStore = new GuideStore();
                  return <Provider guideStore={guideStore}>
                    <GuideScreen params={props.route.params}/>
                  </Provider>
                }}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </ApolloProvider>
    );
  }

  renderUnAuthed() {
    const Stack = createStackNavigator<UnAuthParamList>();

    return (
      <ApolloProvider client={client}>
        <Provider authStore={this.state.authStore}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name={'Login'} component={LoginScreen}/>
              <Stack.Screen name={'Signup'} component={SignupScreen}/>
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </ApolloProvider>
    );
  }


  render() {

    if (this.state === null) {
      return <View><Text>State===null</Text></View>
    }

    if (this.state.authStore === undefined) {
      return <View><Text>Loading</Text></View>
    }

    if (this.state.authStore.user === undefined) {
      return this.renderUnAuthed()
    }

    return this.renderAuthed()
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

