import {inject, observer} from "mobx-react";
import React from "react";
import AuthStore from "stores/AuthStore";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import client from "api/client";
import GuideScreen from "screens/Guide";
import CreateScreen from "screens/Create";
import ProfileScreen from "screens/Profile";
import Tabs from "./Tabs";
import {ApolloProvider} from "@apollo/react-common";
import {linking, ParamList, wrapParams} from "utils/navigation/ParamList";
import LoginScreen from "../screens/Login";
import SignupScreen from "../screens/Signup";
import {Text, View} from "react-native";

type Props = {
  authStore?: AuthStore
};
type State = {};


@inject("authStore")
@observer
export default class Mobile extends React.Component<Props, State> {

  renderAuthed() {
    const Stack = createStackNavigator<ParamList>();
    return (
      <ApolloProvider client={client}>
        <NavigationContainer  linking={linking}>
          <Stack.Navigator initialRouteName={'Root'}>
            <Stack.Screen name={'Root'} options={{headerShown: false}} component={Tabs}/>
            <Stack.Screen name={'Create'} component={wrapParams(CreateScreen)}/>
            <Stack.Screen name={'Guide'} component={wrapParams(GuideScreen)}/>
            <Stack.Screen name={'Profile'} component={wrapParams(ProfileScreen)}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    );
  }

  renderUnauthed() {
    const Stack = createStackNavigator<ParamList>();
    return (
      // @ts-ignore
      <ApolloProvider client={client}>
        <NavigationContainer linking={linking}>
          <Stack.Navigator initialRouteName={'Login'} screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name={'Login'} component={LoginScreen}/>
            <Stack.Screen name={'Signup'} component={SignupScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    );
  }

  render() {
    if (this.props.authStore.loading) {
      return <View><Text>Loading</Text></View>
    } else if (this.props.authStore.user) {
      return this.renderAuthed();
    } else {
      return this.renderUnauthed();
    }
  }
}
