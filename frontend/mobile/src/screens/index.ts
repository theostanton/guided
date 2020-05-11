import HomeScreen from "./HomeScreen"
import SearchScreen from "./SearchScreen"
import AccountScreen from "./AccountScreen"
import MyBibleScreen from "./MyBibleScreen"
import * as GuideScreen from "./GuideScreen"
import * as ProfileScreen from "./ProfileScreen"
import { StackNavigationOptions, StackScreenProps } from "@react-navigation/stack"
import { StackNavigationProp } from "@react-navigation/stack/src/types"
import { ComponentType } from "react"
import { RouteProp } from "@react-navigation/core/lib/typescript/src/types"
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"

export type Navigation = StackNavigationProp<ScreenParams, any>

export type ScreenParams = {
  Home: undefined,
  Guide: GuideScreen.Params,
  Search: undefined,
  Profile: ProfileScreen.Params,
  Account: undefined,
  MyBible: undefined
}

export type ScreenName = keyof ScreenParams

export type ScreenConfig<RouteName extends ScreenName> = {
  component: ComponentType<any>
  options?: (props: {
    route: RouteProp<ScreenParams, RouteName>;
    navigation: Navigation;
  }) => StackNavigationOptions | BottomTabNavigationOptions
}

export type ScreenProps<RouteName extends ScreenName> = StackScreenProps<ScreenParams, RouteName>

export type TabName = Extract<ScreenName, "Home" | "Search" | "Account" | "MyBible">

export const TABS: Record<TabName, ScreenConfig<any>> = {
  MyBible: MyBibleScreen,
  Home: HomeScreen,
  Search: SearchScreen,
  Account: AccountScreen,
}
export const SCREENS: Record<Exclude<ScreenName, TabName>, ScreenConfig<any>> = {
  Guide: GuideScreen.config,
  Profile: ProfileScreen.config,
}