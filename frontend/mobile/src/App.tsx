import TabScreen from "./screens/TabScreen"
import "react-native-gesture-handler"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { SCREENS } from "./screens"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs">
        <Stack.Screen name={"Tabs"} options={{ headerShown: false }} component={TabScreen}/>
        {Object.entries(SCREENS).map(
          ([screenName, config]) => <Stack.Screen
            name={screenName}
            key={screenName}
            component={config.component}
            options={config.options}/>,
        )}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

