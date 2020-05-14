import { GuideInfoFragment } from "api/generated"
import React from "react"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { h1, h2, h3 } from "styles/text"
import Icon from "components/Icon"
import Statistic, { StatisticProps } from "components/Statistic"
import Map from "components/Map"
import { humanDate, humanDistance } from "utils/human"
import { lightGrey, white } from "styles/colors"
import { half, quarter, whole } from "utils/dimensions"

export type ListPosition = "first" | "middle" | "last"
type Props = {
  guide: GuideInfoFragment
  position: ListPosition
}

function Header({ guide }: Props) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      padding: half,
      borderBottomColor: lightGrey,
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    icon: {
      flexBasis: "auto",
      margin: quarter,
    },
    text: {
      flex: 1,
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
    flags: {
      justifyContent: "center",
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
    <View style={styles.flags}>
      {guide.countries!.map(country => {
        return <Text key={country!}>{country!}</Text>
      })}
    </View>
  </View>
}

function Center({ guide }: Props) {
  return <Map guide={guide}/>
}

function Statistics({ guide }: Props) {
  const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      padding: half,
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

function marginTop(position: ListPosition) {
  switch (position) {
    case "first":
      return whole
    case "middle":
      return half
    case "last":
      return half
  }
}

function marginBottom(position: ListPosition) {
  switch (position) {
    case "first":
      return half
    case "middle":
      return half
    case "last":
      return whole
  }
}

export default function(props: Props) {


  const styles = StyleSheet.create({
    container: {
      backgroundColor: white,
      marginTop: marginTop(props.position),
      marginLeft: whole,
      marginRight: whole,
      marginBottom: marginBottom(props.position),
      flex: 1,
      shadowColor: "#000",
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      borderRadius: 2,
    },
    content: {
      display: "flex",
      flexDirection: "column",
    },
  })

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
      {/*<Center {...props}/>*/}
      <Statistics {...props}/>
    </View>

  </TouchableHighlight>

}