import {inject, observer, Provider} from "mobx-react";
import React from "react";
import AuthStore from "stores/AuthStore";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, NavigationProp} from "@react-navigation/native";
import client from "api/client";
import GuideScreen from "screens/Guide";
import CreateScreen from "screens/Create";
import ProfileScreen from "screens/Profile";
import HomeScreen from "screens/Home";
import Layout from "components/Layout";
import {StyleSheet, Text, View} from "react-native";
import {linking, ParamList} from "utils/navigation/ParamList";
import {ApolloProvider} from "@apollo/client";
import LoginScreen from "screens/Login";
import SignupScreen from "screens/Signup";

type Props = {
  authStore?: AuthStore
};
type State = {};

function wrapped(WrappedComponent, inLayout: boolean = true) {
  return class extends React.Component<{ navigation: NavigationProp<ParamList> }> {
    render() {
      return (
        <Provider navigation={this.props.navigation}>
          {inLayout ?
            <Layout>
              <View style={styles.content}>
                <WrappedComponent {...this.props['route']}/>
              </View>
            </Layout> :
            <WrappedComponent {...this.props['route']}/>
          }
        </Provider>)
    }
  }
}

@inject("authStore")
@observer
export default class Desktop extends React.Component<Props, State> {

  render() {
    if (this.props.authStore.loading) {
      return <View><Text>Loading</Text></View>
    }

    const Stack = createStackNavigator<ParamList>();
    const isLoggedIn = this.props.authStore.isLoggedIn
    return (
      // @ts-ignore
      <ApolloProvider client={client}>
        <NavigationContainer linking={linking}>
          <Stack.Navigator initialRouteName={isLoggedIn ? 'Root' : 'Login'} screenOptions={{
            headerShown: false
          }}>
            {isLoggedIn ?
              <>
                <Stack.Screen name={'Root'} component={wrapped(HomeScreen)}/>
                <Stack.Screen name={'Create'} component={wrapped(CreateScreen)}/>
                <Stack.Screen name={'Guide'} component={wrapped(GuideScreen, false)}/>
                <Stack.Screen name={'Profile'} component={wrapped(ProfileScreen)}/>
              </>
              :
              <>
                <Stack.Screen name={'Login'} component={wrapped(LoginScreen)}/>
                <Stack.Screen name={'Signup'} component={wrapped(SignupScreen)}/>
              </>
            }
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    );
  }
}


const styles = StyleSheet.create({
  content: {
    width: '100%',
    flex: 1,
  }
})


