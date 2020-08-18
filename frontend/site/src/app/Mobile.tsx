import {inject, observer, Provider} from "mobx-react";
import React from "react";
import AuthStore from "stores/AuthStore";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, NavigationProp} from "@react-navigation/native";
import {linking, ParamList} from "utils/navigation/ParamList";
import {Platform, SafeAreaView, Text, View} from "react-native";
import {ApolloProvider} from "@apollo/react-common";
import client from "api/client";
import Tabs from "./Tabs";
import CreateScreen from "screens/Create";
import GuideScreen from "screens/Guide";
import ProfileScreen from "screens/Profile";
import LoginScreen from "screens/Login";
import SignupScreen from "screens/Signup";

type Props = {
  authStore?: AuthStore
};
type State = {};

export function wrapped(WrappedComponent: any) {
  return class extends React.Component<{ navigation?: NavigationProp<ParamList>, route: unknown }> {
    render() {
      console.log('wrapped this.props',this.props)
      return (
        // @ts-ignore
        <ApolloProvider client={client}>
          <Provider navigation={this.props.navigation}>
            <WrappedComponent {...this.props['route']}/>
          </Provider>
        </ApolloProvider>)
    }
  }
}

@inject("authStore")
@observer
export default class Mobile extends React.Component<Props, State> {

  render() {
    if (this.props.authStore!.loading) {
      return <View><Text>Loading</Text></View>
    }

    const Stack = createStackNavigator<ParamList>();
    const isLoggedIn = this.props.authStore!.isLoggedIn
    const isNative = Platform.OS !== 'web'
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer linking={linking(false)}>
          <Stack.Navigator initialRouteName={isLoggedIn ? 'Root' : 'Login'}>
            {isLoggedIn ?
              <>
                <Stack.Screen name={'Root'} options={{headerShown: false}} component={wrapped(Tabs)}/>
                <Stack.Screen name={'Create'} options={{headerShown: isNative}} component={wrapped(CreateScreen)}/>
                <Stack.Screen name={'Guide'} options={{headerShown: false}} component={wrapped(GuideScreen)}/>
                <Stack.Screen name={'Profile'} options={{headerShown: isNative}} component={wrapped(ProfileScreen)}/>
              </>
              :
              <>
                <Stack.Screen name={'Login'} options={{headerShown: false}} component={wrapped(LoginScreen)}/>
                <Stack.Screen name={'Signup'} options={{headerShown: false}} component={wrapped(SignupScreen)}/>
              </>}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}
