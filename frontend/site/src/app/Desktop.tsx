import {inject, observer} from "mobx-react";
import React from "react";
import AuthStore from "stores/AuthStore";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import client from "api/client";
import GuideScreen from "screens/Guide";
import CreateScreen from "screens/Create";
import ProfileScreen from "screens/Profile";
import HomeScreen from "../screens/Home";
import Layout from "../components/Layout";
import {StyleSheet, Text, View} from "react-native";
import {linking, ParamList, wrapParams} from "utils/navigation/ParamList";
import {ApolloProvider} from "@apollo/client";
import LoginScreen from "screens/Login";
import SignupScreen from "screens/Signup";

type Props = {
  authStore?: AuthStore
};
type State = {};

function wrapped(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <Layout>
          <View style={styles.root}>
            <WrappedComponent {...this.props['route']}/>
          </View>
        </Layout>)
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
                <Stack.Screen name={'Guide'} component={wrapParams(GuideScreen)}/>
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
  root: {
    width: '100%',
    height: '100vh',
    flexDirection: 'column'
  },
  content: {
    width: '100%',
    flex: 1,
    backgroundColor: 'yellow'
  }
})


