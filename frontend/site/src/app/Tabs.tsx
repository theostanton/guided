import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {TabParamList} from "../utils/navigation/ParamList";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import AccountScreen from "../screens/Account";

type Props = {};
type State = {};

export default class Tabs extends React.Component<Props, State> {
  render() {
    const Tab = createBottomTabNavigator<TabParamList>();
    return (
      <View style={styles.root}>
        <Tab.Navigator>
          <Tab.Screen name={'Home'} component={HomeScreen}/>
          <Tab.Screen name={'Account'} component={AccountScreen}/>
        </Tab.Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: Platform.OS === 'web' ? '100vh' : '100%',
  },
});
