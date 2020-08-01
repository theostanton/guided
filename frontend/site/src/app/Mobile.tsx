import {inject, observer} from "mobx-react";
import React from "react";
import AuthStore from "stores/AuthStore";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, RouteProp} from "@react-navigation/native";
import client from "api/client";
import GuideScreen from "screens/Guide";
import CreateScreen from "screens/Create";
import ProfileScreen from "screens/Profile";
import Tabs from "./Tabs";
import {ApolloProvider} from "@apollo/react-common";

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
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Root'}>
            <Stack.Screen name={'Root'} options={{headerShown: false}} component={Tabs}/>
            <Stack.Screen name={'Create'} component={CreateScreen}/>
            <Stack.Screen name={'Guide'} component={GuideScreen}/>
            <Stack.Screen name={'Profile'} component={ProfileScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    );
  }

  render() {
    return this.renderAuthed();
  }
}
