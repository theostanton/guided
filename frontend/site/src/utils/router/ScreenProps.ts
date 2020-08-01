import AuthStore from 'stores/AuthStore';
import {NavigationProp} from "@react-navigation/core";

export type UnauthedProps = {
  navigation: NavigationProp<UnauthedParamList>
  authStore?: AuthStore
}

export type TabProps = {
  navigation: NavigationProp<TabParamList>
  authStore?: AuthStore
}

export type ScreenProps<RouteName extends keyof ParamList> = {
  params: ParamList[RouteName]
  navigation: NavigationProp<ParamList, RouteName>
  authStore?: AuthStore
}