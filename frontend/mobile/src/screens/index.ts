import HomeScreen from "./HomeScreen"
import SearchScreen from "./SearchScreen"
import AccountScreen from "./AccountScreen"
import MyBibleScreen from "./MyBibleScreen"
import LoginScreen from "./LoginScreen"
import SignupScreen from "./SignupScreen"
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
  Login: undefined,
  Signup: undefined,
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

export type ScreenType = "Tabs" | "Screens" | "PreAuth"

export type TabScreen = Extract<ScreenName, "MyBible" | "Home" | "Search" | "Account">
export type ScreenScreen = Extract<ScreenName, "Guide" | "Profile">
export type PreauthScreen = Extract<ScreenName, "Login" | "Signup">

export const SCREENS: { [type in ScreenType]: { [screen in ScreenName]?: ScreenConfig<any> } } = {
  Tabs: {
    MyBible: MyBibleScreen,
    Home: HomeScreen,
    Search: SearchScreen,
    Account: AccountScreen,
  },
  Screens: {
    Guide: GuideScreen.config,
    Profile: ProfileScreen.config,
  },
  PreAuth: {
    Login: LoginScreen,
    Signup: SignupScreen,
  },
}