import AuthStore from 'stores/AuthStore';
import {NavigationProp} from "@react-navigation/core";
import {ParamList, TabParamList} from "./ParamList";
import {StackNavigationOptions} from "@react-navigation/stack";
import {NavigationState} from "@react-navigation/routers";

export type NavigationProps = {
  navigation?: NavigationProp<ParamList, never, never, StackNavigationOptions>
}

export type UnauthedProps = NavigationProps & {
  authStore?: AuthStore
}

export type TabProps = {
  navigation: NavigationProp<TabParamList>
  authStore?: AuthStore
}

export type ScreenProps<RouteName extends keyof ParamList> = {
  params: ParamList[RouteName]
  navigation: NavigationProp<ParamList, RouteName, NavigationState, StackNavigationOptions>
  authStore?: AuthStore
}