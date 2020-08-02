import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {inject, observer} from "mobx-react";
import GuideStore from "screens/Guide/GuideStore";
import Icon from "react-native-vector-icons/MaterialIcons";
import {hairline, half, icon, quarter} from "styles/dimensions";
import {border, darkIcon} from "styles/colors";
import {NavigationProps} from "utils/navigation/ScreenProps";
import {h1, h3} from "styles/text";
import {GuideFragment} from "api/generated";
import AddSpotContent from "./AddSpotContent";
import SelectSpotContent from "./SelectSpotContent";

type Props = NavigationProps & {
  guideStore?: GuideStore
};
type State = {};

@inject('guideStore', 'navigation')
@observer
export default class RightRail extends React.Component<Props, State> {

  get guide(): GuideFragment {
    return this.props.guideStore.guide
  }

  renderCloseIcon() {
    return <View style={styles.icon}>
      <Icon name={'close'} size={icon} color={darkIcon} onPress={() => {
        this.props.guideStore.clearMode()
      }}/>
    </View>
  }

  renderContent() {
    switch (this.props.guideStore.mode) {
      case "AddSpot":
        return <AddSpotContent params={this.props.guideStore.getModeParams(this.props.guideStore.mode)}/>
      case "SelectSpot":
        return <SelectSpotContent params={this.props.guideStore.getModeParams(this.props.guideStore.mode)}/>
      default:
        return <View><Text>Error</Text></View>
    }
  }

  render() {

    if (this.props.guideStore.mode === undefined) {
      return null;
    }

    return (
      <View style={styles.root}>
        {this.renderCloseIcon()}
        {this.renderContent()}
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