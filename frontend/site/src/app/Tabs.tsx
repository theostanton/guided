import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from "../screens/Home";
import AccountScreen from "../screens/Account";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

type Props = {};
type State = {};

export default class Tabs extends React.Component<Props, State> {
  render() {
    const Tab = createBottomTabNavigator<TabParamList>();
    return (
      <Tab.Navigator>
        <Tab.Screen name={'Home'} component={HomeScreen}/>
        <Tab.Screen name={'Account'} component={AccountScreen}/>
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});
