import React from "react"
import { Navigation, ScreenParams, SCREENS, TabScreen } from "../index"
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { RouteProp } from "@react-navigation/core/lib/typescript/src/types"
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

function icon(name: TabScreen): string {
  switch (name) {
    case "Home":
      return "md-globe"
    case "Search":
      return "md-search"
    case "Account":
      return "md-contact"
    case "MyBible":
      return "md-book"
    default:
      throw new Error(`No icon for ${name}`)
  }
}

type TabProps = {
  route: RouteProp<ScreenParams, TabScreen>;
  navigation: Navigation;
}

export default class TabScreenComponent extends React.Component {

  options({ route }: TabProps): BottomTabNavigationOptions {
    return {
      tabBarIcon: ({ color, size }) => {
        const iconName = icon(route.name)
        return <Ionicons name={iconName} size={size} color={color}/>
      },
    }
  }


  render() {
    return <Tab.Navigator
      screenOptions={(props) => {
        return this.options(props as TabProps)
      }}
    >
      {Object.entries(SCREENS.Tabs).map(
        ([screenName, config]) => <Tab.Screen
          name={screenName}
          key={screenName}
          component={config!.component}
          options={config!.options}/>,
      )}
    </Tab.Navigator>
  }
}