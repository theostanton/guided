import TabScreen from "./screens/TabScreen"
import "react-native-gesture-handler"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { SCREENS } from "./screens"
import { inject, observer, Provider } from "mobx-react"
import AuthStore, { authStore } from "./model/AuthStore"
import { StatusBar } from "react-native"

const Stack = createStackNavigator()

type Props = {
  authStore?: AuthStore
}

@inject("authStore")
@observer
class App extends React.Component<Props> {

  render() {

    const isLoggedIn = this.props.authStore?.isLoggedIn

    if (isLoggedIn) {
      return <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae"/>

        <Stack.Navigator
          initialRouteName="Tabs">
          <Stack.Screen name={"Tabs"} options={{ headerShown: false }} component={TabScreen}/>
          {Object.entries(SCREENS.Screens).map(
            ([screenName, config]) => <Stack.Screen
              name={screenName}
              key={screenName}
              component={config!.component}
              options={config!.options}/>,
          )}

        </Stack.Navigator>
      </NavigationContainer>
    } else {
      return <NavigationContainer>
        <Stack.Navigator initialRouteName={"Login"}>
          {Object.entries(SCREENS.PreAuth).map(
            ([screenName, config]) => <Stack.Screen
              name={screenName}
              key={screenName}
              component={config!.component}
              options={config!.options}/>,
          )}
        </Stack.Navigator>
      </NavigationContainer>
    }
  }
}

export default function() {
  return <Provider authStore={authStore}>
    <App/>
  </Provider>
}
