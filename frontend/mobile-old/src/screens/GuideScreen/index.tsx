import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { ScreenConfig, ScreenProps } from "../index"

type Props = ScreenProps<"Guide">

export type Params = {
  guideId: string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})

class GuideScreenComponent extends React.Component<Props> {

  render() {
    return <View style={styles.container}>
      <Text>Guide Screen</Text>
      <Text style={{
        fontStyle: "italic",
      }}>{this.props.route.params.guideId}</Text>
      <Button
        title="Go Home"
        onPress={() => this.props.navigation.popToTop()}
      />
    </View>
  }

}

export const config: ScreenConfig<"Guide"> = {
  component: GuideScreenComponent,
  options: (props: Props) => {
    return {
      title: props.route.params.guideId,
    }
  },
}