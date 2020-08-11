import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {TabParamList} from "utils/navigation/ParamList";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "screens/Home";
import AccountScreen from "screens/Account";
import Icon from "../components/Icon";
import {primary, secondary} from "../styles/colors";

type Props = {};
type State = {};

export default class Tabs extends React.Component<Props, State> {
  render() {
    const Tab = createBottomTabNavigator<TabParamList>();
    return (
      <View style={styles.root}>
        <Tab.Navigator tabBarOptions={{
          activeTintColor: primary
        }}>
          <Tab.Screen name={'Home'}
                      component={HomeScreen}
                      options={{
                        tabBarIcon: ({size, color}) => {
                          return <Icon name={'home'} size={size} color={color}/>
                        }
                      }}/>
          <Tab.Screen name={'Account'}
                      component={AccountScreen}
                      options={{
                        tabBarIcon: ({size, color}) => {
                          return <Icon name={'account-circle'} size={size} color={color}/>
                        }
                      }}/>
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
