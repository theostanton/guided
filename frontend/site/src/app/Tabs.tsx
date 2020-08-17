import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {TabParamList} from "utils/navigation/ParamList";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AccountScreen from "screens/Account";
import Icon from "../components/Icon";
import {primary} from "../styles/colors";
import FeedScreen from "../screens/Feed";
import ProfileScreen from "../screens/Profile";
import {inject, observer} from "mobx-react";
import AuthStore from "../stores/AuthStore";
import {wrapped} from "./Mobile";

type Props = {
  authStore?: AuthStore
};
type State = {};

@inject('authStore')
@observer
export default class Tabs extends React.Component<Props, State> {
  render() {
    let isLoggedIn = this.props.authStore?.isLoggedIn;
    console.log('Tabs.render isLoggedIn=', isLoggedIn)
    if (!isLoggedIn) {
      return null
    }
    const Tab = createBottomTabNavigator<TabParamList>();
    return (
      <View style={styles.root}>
        <Tab.Navigator tabBarOptions={{
          activeTintColor: primary
        }}>
          <Tab.Screen name={'Feed'}
                      component={FeedScreen}
                      options={{
                        tabBarIcon: ({size, color}) => {
                          return <Icon name={'home'} size={size} color={color}/>
                        }
                      }}/>
          <Tab.Screen name={'Profile'}
                      component={wrapped(ProfileScreen)}
                      initialParams={{
                        username: this.props.authStore!.user!.username
                      }}
                      options={{
                        tabBarIcon: ({size, color}) => {
                          return <Icon name={'account-circle'} size={size} color={color}/>
                        }
                      }}/>
          <Tab.Screen name={'Account'}
                      component={AccountScreen}
                      options={{
                        tabBarIcon: ({size, color}) => {
                          return <Icon name={'settings'} size={size} color={color}/>
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
    width: '100%'
  },
});
