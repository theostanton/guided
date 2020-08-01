import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GuideListItemFragment} from "api/generated";
import {h2} from "styles/text";
import {hairline, half} from "styles/dimensions";
import {border} from "styles/colors";
import Clickable from "components/Pressable";
import Stats, {Stat} from "../../Stats";

type Props = {
  guide: GuideListItemFragment,
};
type State = {};

export default class GuideListItem extends React.Component<Props, State> {

  render() {

    const stats: Stat[] = [{
      label: 'Distance',
      value: '5m'
    },
      {
        label: 'Duration',
        value: '2h'
      }]
    return (
      <Clickable
        onPress={async () => {
          console.log('this.props.guide', this.props.guide)
          //TODO
          // await this.props.router.goToGuide(this.props.guide.owner, this.props.guide.slug)
        }}>
        <View style={styles.root}>
          <Text style={styles.header}>{this.props.guide.title}</Text>
          <Stats stats={stats}/>
        </View>
      </Clickable>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    padding: half,
    borderColor: border,
    borderWidth: hairline
  },
  header: {
    ...h2
  }
});
