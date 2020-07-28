import {NavigationProp, RouteProp} from '@react-navigation/core';
import AuthStore from 'stores/AuthStore';

export type ScreenProp<RouteName extends keyof ParamList> =RouteProp<ParamList,RouteName> & {
  navigation:NavigationProp<ParamList,RouteName>
  authStore?:AuthStore
}