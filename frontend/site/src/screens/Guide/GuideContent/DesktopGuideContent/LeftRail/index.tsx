import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {inject, observer} from "mobx-react";
import Icon from "react-native-vector-icons/MaterialIcons";
import {hairline, half, icon, quarter} from "styles/dimensions";
import {border, darkIcon} from "styles/colors";
import {NavigationProps} from "utils/navigation/ScreenProps";
import {h1, h3} from "styles/text";
import Stats, {Stat} from "components/Stats";
import {GuideFragment} from "api/generated";
import {duration, humanDistance} from "utils/human";
import GuideStore from "screens/Guide/GuideStore";

type Props = NavigationProps & {
  guideStore?: GuideStore
};
type State = {};

@inject('guideStore', 'navigation')
@observer
export default class LeftRail extends React.Component<Props, State> {

  get guide(): GuideFragment {
    return this.props.guideStore!.guide!
  }

  renderBackIcon() {
    return <View style={styles.icon}>
      <Icon name={'arrow-back'} size={icon} color={darkIcon} onPress={() => {
        if (this.props.navigation!.canGoBack()) {
          this.props.navigation!.goBack()
        } else {
          this.props.navigation!.navigate('Profile', {
            username: this.guide.owner
          })
        }
      }}/>
    </View>
  }

  renderStats() {

    const guideDuration = duration(this.guide.durationSeconds)
    const stats: Stat[] = [
      {
        value: humanDistance(this.guide.distanceMeters, false),
        label: 'miles'
      },
      {
        value: guideDuration.value,
        label: guideDuration.unitLong
      },
      {
        value: this.guide.rides.totalCount,
        label: 'rides',
      },
      {
        value: this.guide.spots.totalCount,
        label: 'spots',
      },
      {
        value: this.guide.countries!.length,
        label: 'countries',
      }
    ]

    return <Stats stats={stats}/>
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderBackIcon()}
        <Text style={styles.title}>{this.guide.title}</Text>
        <Text style={styles.owner}>by {this.guide.owner}</Text>
        {this.renderStats()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    padding: half,
    backgroundColor: 'white',
    borderColor: border,
    borderWidth: hairline,
    borderRadius: quarter
  },
  title: {
    ...h1,
    paddingBottom: quarter,
  },
  owner: {
    ...h3,
    paddingBottom: quarter,
  },
  icon: {
    flexGrow: 0,
    width: icon,
    height: icon,
  }
});