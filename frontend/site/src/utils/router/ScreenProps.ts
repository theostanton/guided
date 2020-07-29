import {NavigationProp, RouteProp} from '@react-navigation/core';
import AuthStore from 'stores/AuthStore';
import Router from '.';

export type ScreenProps<RouteName extends keyof ParamList> =  {
  params:ParamList[RouteName]
  router?:Router
  authStore?: AuthStore
}