import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GuideListItemFragment} from "api/generated";
import {h2} from "styles/text";
import {hairline, whole} from "styles/dimensions";
import {border} from "styles/colors";
import Clickable from "components/Pressable";
import {inject} from "mobx-react";
import Router from "utils/router";

type Props = {
  guide: GuideListItemFragment,
  router?: Router
};
type State = {};

@inject("router")
export default class GuideListItem extends React.Component<Props, State> {

  render() {
    return (
      <Clickable
        onPress={async () => {
          console.log('this.props.guide',this.props.guide)
          await this.props.router.goToGuide(this.props.guide.owner, this.props.guide.slug)
        }}>
        <View style={styles.root}>
          <Text style={styles.header}>{this.props.guide.title}</Text>
        </View>
      </Clickable>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    padding: whole,
    borderColor: border,
    borderWidth: hairline
  },
  header: {
    ...h2
  }
});
