import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
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
    switch (this.props.guideStore.mode) {
      case "AddSpot":
        return <View style={styles.content}>
          <AddSpotContent
            params={this.props.guideStore.getModeParams('AddSpot')}/>
        </View>
      case "SelectSpot":
        return <View style={styles.content}>
          <SelectSpotContent
            params={this.props.guideStore.getModeParams('SelectSpot')}/>
        </View>
      default:
        return <View style={styles.content}><OverviewContent/></View>
    }
  }

  render() {
    return (
      <View style={styles.root}>
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
    ...Platform.select({
      web: {
        pointerEvents: 'none'
      },
    }),
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
    ...Platform.select({
      web: {
        pointerEvents: 'auto'
      },
    }),
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
    ...Platform.select({
      web: {
        pointerEvents: 'auto'
      },
    }),
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
    ...Platform.select({
      web: {
        pointerEvents: 'auto'
      },
    }),
  }
});
