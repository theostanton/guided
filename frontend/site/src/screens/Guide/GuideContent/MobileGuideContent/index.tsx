import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from "components/Icon";
import {inject, observer} from "mobx-react";
import {NavigationProps} from "utils/navigation/ScreenProps";
import {hairline, half, icon, whole} from "styles/dimensions";
import {border} from "styles/colors";
import GuideStore from "screens/Guide/GuideStore";
import AddSpotContent from "./AddSpotContent";
import OverviewContent from "./OverviewContent";
import SelectSpotContent from "./SelectSpotContent";

type Props = NavigationProps & {
  guideStore?: GuideStore
};
type State = {};

@inject('navigation', 'guideStore')
@observer
export default class MobileGuideContent extends React.Component<Props, State> {

  renderHeader() {
    return <View style={styles.header}>
      <View style={styles.closeIcon}>
        <Icon name={'close'} size={icon} onPress={() => {
          if (this.props.navigation.canGoBack()) {
            this.props.navigation.goBack()
          } else {
            this.props.navigation.navigate('Profile', {
              username: this.props.guideStore.guide.owner
            })
          }
        }}/>
      </View>
      <View style={styles.shareIcon}>
        <Icon name={'share'} size={icon} onPress={() => {
        }}/>
      </View>
    </View>
  }

  renderContent() {

    let Content: React.ReactElement

    switch (this.props.guideStore.mode) {
      case "AddSpot":
        Content = <AddSpotContent
          params={this.props.guideStore.getModeParams('AddSpot')}/>
        break
      case "SelectSpot":
        Content = <SelectSpotContent
          params={this.props.guideStore.getModeParams('SelectSpot')}/>
        break
      default:
        Content = <OverviewContent/>
    }

    return <View style={styles.content} pointerEvents={'auto'}>{Content}</View>
  }

  render() {
    return (
      <View style={styles.root} pointerEvents={'none'}>
        {this.renderHeader()}
        <View style={styles.contentContainer}>
          {this.renderContent()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    height: '100%'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  closeIcon: {
    width: icon + half,
    height: icon + half,
    margin: whole,
    backgroundColor: 'white',
    borderColor: border,
    borderWidth: hairline,
    borderRadius: icon + half,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareIcon: {
    width: icon + half,
    height: icon + half,
    margin: whole,
    backgroundColor: 'white',
    borderColor: border,
    borderWidth: hairline,
    borderRadius: icon + half,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignContent: 'center',
    width: '100%',
    padding: whole,
  },
  content: {
    backgroundColor: 'white',
    width: '100%',
    alignSelf: 'center',
    maxWidth: 400,
    padding: whole,
    borderRadius: half,
    borderWidth: hairline,
    borderColor: border,
  }
});
