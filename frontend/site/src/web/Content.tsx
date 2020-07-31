import {inject, observer, Provider} from "mobx-react";
import React from "react";
import AuthStore from "stores/AuthStore";
import {Text, View} from "react-native";
import AppRouter from "utils/router/AppRouter";
import {ApolloProvider} from "@apollo/client";
import client from "../api/client";
import {NavigationContainer, RouteProp} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import AccountScreen from "../screens/Account";
import CreateScreen from "../screens/Create";
import ProfileScreen from "../screens/Profile";
import GuideStore from "../screens/Guide/store";
import GuideScreen from "../screens/Guide";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

type Props = {
  authStore?: AuthStore
  router?: AppRouter
};
type State = {};


@inject("authStore", "router")
@observer
export default class Content extends React.Component<Props, State> {


  renderAuthed() {
    const Tab = createBottomTabNavigator<TabParamList>();
    const Stack = createStackNavigator<ParamList>();
    type Props<RouteName extends keyof ParamList> = { navigation: any, route: RouteProp<ParamList, RouteName> }
    return (
      // @ts-ignore
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Root'}>
            <Stack.Screen name={'Root'} options={{
              headerShown: false
            }}>
              {(props) => {
                this.props.router.updateNavigation(props.navigation)
                return (<Tab.Navigator>
                  <Tab.Screen name={'Home'} component={HomeScreen}/>
                  <Tab.Screen name={'Account'} component={AccountScreen}/>
                </Tab.Navigator>)
              }
              }
            </Stack.Screen>
            <Stack.Screen name={'Create'}>
              {(props: Props<'Create'>) => {
                this.props.router.updateNavigation(props.navigation)
                return <CreateScreen params={props.route.params}/>
              }}
            </Stack.Screen>
            <Stack.Screen name={'Profile'}>
              {(props: Props<'Profile'>) => {
                this.props.router.updateNavigation(props.navigation)
                return <ProfileScreen params={props.route.params}/>
              }}
            </Stack.Screen>
            <Stack.Screen name={'Guide'}>
              {(props: Props<'Guide'>) => {
                this.props.router.updateNavigation(props.navigation)
                let guideStore = new GuideStore();
                return <Provider guideStore={guideStore}>
                  <GuideScreen params={props.route.params}/>
                </Provider>
              }}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    );
  }

  renderUnAuthed() {
    return (
      <View><Text>UnAuthed</Text></View>
    );
  }


  render() {

    if (this.props.authStore === undefined) {
      return <View><Text>Loading</Text></View>
    }

    if (this.props.authStore.user === undefined) {
      return this.renderUnAuthed()
    }

    return this.renderAuthed()
  }
}
