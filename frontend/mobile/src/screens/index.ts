import HomeScreen from "./HomeScreen"
import DetailsScreen from "./DetailsScreen"
import { StackScreenProps } from "@react-navigation/stack"

export type ScreenName = "Home" | "Details"

export type ScreensList = Record<ScreenName, object | undefined>

export type ScreenProps<RouteName extends ScreenName> = {} & StackScreenProps<ScreensList, RouteName>

export const SCREENS: ScreensList = {
  Home: HomeScreen,
  Details: DetailsScreen,
}