import { GuideInfoFragment } from "api/generated"
import React from "react"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

type Props = {
  guide: GuideInfoFragment
}

export default function(props: Props) {

  console.log(props)
  const navigation = useNavigation()
  return <View key={props.guide.id}>
    <TouchableHighlight style={styles.item} underlayColor="white" onPress={() => {
      navigation.navigate("Guide", {
        guideId: props.guide.id,
      })

    }}>
      <Text>{props.guide.title}</Text>
    </TouchableHighlight>
  </View>

}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ff0000",
    padding: "8pt",
  },
})