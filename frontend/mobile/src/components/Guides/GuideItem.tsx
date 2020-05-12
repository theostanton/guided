import { GuideInfoFragment } from "api/generated"
import React from "react"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Icon from "components/Icon"
import { h1, h2, h3 } from "styles/text"
import Statistic, { StatisticProps } from "components/Statistic"
import { humanDate, humanDistance } from "utils/human"
import { lightestGrey, lightGrey, white } from "styles/colors"

type Props = {
  guide: GuideInfoFragment
}

function Header({ guide }: Props) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      padding: "8pt",
      borderBottomColor: lightGrey,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    icon: {
      flexBasis: "auto",
      margin: "0.25em",
    },
    text: {
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      justifyContent: "center",
    },
    title: {
      ...h1,
    },
    subtitle: {
      ...h3,
    },
  })

  return <View style={styles.container}>
    <View style={styles.icon}>
      <Icon name={"bicycle"}/>
    </View>
    <View style={styles.text}>
      <Text style={styles.title}>{guide.title}</Text>
      {guide.isMine === false && <Text style={styles.subtitle}>by {guide.owner}</Text>}
    </View>
  </View>
}

function Statistics({ guide }: Props) {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      padding: "8pt",
    },
    item: {
      flex: 1,
      justifyContent: "space-around",
    },
  })
  const stats: StatisticProps[] = [{
    label: "Miles",
    value: humanDistance(guide.distanceMeters, false),
  }, {
    label: "Hours",
    value: Math.ceil(guide.durationSeconds / 60 / 60),
  }]
  if (guide.startDate) {
    stats.push({
      label: "Starts",
      value: humanDate(guide.startDate),
    })
  }
  if (guide.endDate) {
    stats.push({
      label: "Ends",
      value: humanDate(guide.endDate),
    })
  }

  return <View style={styles.container}>
    {stats.map(stat => {
      return <View key={stat.label} style={styles.item}><Statistic {...stat} /></View>
    })}
  </View>
}

export default function(props: Props) {

  console.log(props)
  const navigation = useNavigation()
  return <TouchableHighlight key={props.guide.id}
                             style={styles.container}
                             underlayColor="#f9f9f9"
                             onPress={() => {
                               navigation.navigate("Guide", {
                                 guideId: props.guide.id,
                               })
                             }}>
    <View style={styles.content}>
      <Header {...props}/>
      <Statistics {...props}/>
    </View>

  </TouchableHighlight>

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    margin: "8pt",
    flex: 1,
    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.2)",
    borderRadius: 2,
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
})