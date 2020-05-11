import "react-native-gesture-handler"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack"
import { SCREENS } from "./screens"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {Object.entries(SCREENS).map(
          ([screenName, component]) => <Stack.Screen name={screenName} component={component}/>,
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

