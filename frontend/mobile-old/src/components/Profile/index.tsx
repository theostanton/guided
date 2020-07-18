import { User } from "api/generated"
import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { eight, four, gutter, whole } from "../../utils/dimensions"
import { observer } from "mobx-react"
import ProfileStore from "model/ProfileStore"
import Icon from "../Icon"
import Statistic, { StatisticProps } from "../Statistic"
import { humanDistance, humanDuration } from "../../utils/human"
import GuidesList from "../Guides/GuidesList"
import Guides from "../Guides"

type Props = {
  profileStore: ProfileStore
}

@observer
export default class Profile extends React.Component<Props> {

  statistics(): React.ReactElement[] {
    const user = this.props.profileStore.user!
    const stats: StatisticProps[] = [
      {
        value: user.guides.totalCount,
        label: "Guides",
      },
      {
        label: "Distance",
        value: humanDistance(user.distanceMeters, false),
      },
      {
        label: "Countries",
        value: user.countries!.length,
      },
    ]
    return stats.map(stat => {
      return <View style={styles.statistic}><Statistic  {...stat}/></View>
    })
  }

  render() {
    const user = this.props.profileStore.user

    if (!user) {
      return <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    }

    return <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon}>
          <Icon name={"user"} size={48}/>
        </View>
        <View style={styles.statistics}>
          {this.statistics()}
        </View>
      </View>
      <View>
        <Guides owner={this.props.profileStore.username}/>
      </View>
    </View>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingBottom: whole,
  },
  header: {
    height: eight,
    flexDirection: "row",
  },
  icon: {
    width: eight,
    justifyContent: "center",
    alignItems: "center",
  },
  statistics: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  statistic: {
    flex: 1,
    alignSelf: "center",
  },
  guides: {
    flex: 1,
  },
})
