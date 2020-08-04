import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {inject} from "mobx-react";
import {NavigationProps} from "utils/navigation/ScreenProps";
import GuideStore from "screens/Guide/GuideStore";
import Icon from "components/Icon";
import {eighth, hairline, half, icon, quarter, whole} from "styles/dimensions";
import {border} from "styles/colors";
import {h2, h5} from "styles/text";
import TransportTypeIcon from "../../../../../components/Icon/TransportTypeIcon";
import {TransportType} from "../../../../../api/generated";

type Props = NavigationProps & {
  guideStore?: GuideStore
};
type State = {};

@inject('guideStore', 'navigation')
export default class GuideHeader extends React.Component<Props, State> {

  renderTop() {
    const guide = this.props.guideStore.guide
    return <View style={styles.top}>
      <View style={styles.closeIcon}>
        <Icon name={'close'} size={icon} onPress={() => {
          if (this.props.navigation.canGoBack()) {
            this.props.navigation.goBack()
          } else {
            this.props.navigation.navigate('Profile', {
              username: guide.owner
            })
          }
        }}/>
      </View>
      <View style={styles.title}>
        <View style={styles.titleIcon}>
          <TransportTypeIcon type={TransportType.Motorcycle} size={icon}/>
        </View>
        <View style={styles.titleText}>
          <Text style={styles.titleTitle}>
            {guide.title}
          </Text>
          <Text style={styles.titleSub}>
            by {guide.owner}
          </Text>
        </View>
      </View>
      <View style={styles.shareIcon}>
        <Icon name={'share'} size={icon - half} onPress={() => {
        }}/>
      </View>
    </View>
  }

  renderSelector() {
    const mode = this.props.guideStore.mode
    return <View style={styles.selector}>
      <Text style={mode === undefined ? styles.selectorItemSelected : styles.selectorItem}
            onPress={() => {
              this.props.guideStore.clearMode()
            }}>
        Overview
      </Text>
      <View style={styles.selectorDivider}/>
      <Text style={mode === 'Route' ? styles.selectorItemSelected : styles.selectorItem}
            onPress={() => {
              this.props.guideStore.updateMode('Route')
            }}>Route</Text>
      <View style={styles.selectorDivider}/>
      <Text style={mode === 'SelectSpot' ? styles.selectorItemSelected : styles.selectorItem}
            onPress={() => {
              if (this.props.guideStore.guide.spots.nodes.length > 0) {
                const firstSpot = this.props.guideStore.guide.spots.nodes[0]
                this.props.guideStore.updateMode('SelectSpot', {
                  spot: firstSpot
                })
              }
            }}>Details</Text>
    </View>
  }

  render() {
    return (
      <View style={styles.root}>
        {this.renderTop()}
        {this.renderSelector()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderColor: border,
    borderWidth: hairline,
    borderRadius: half,
    margin: whole,
    overflow: 'hidden',
  },
  top: {
    flexDirection: 'row',
  },
  bottom: {},
  closeIcon: {
    width: icon + half,
    height: icon + half,
    marginLeft: half,
    marginTop: half,
    marginBottom: quarter,
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
    marginRight: half,
    marginTop: half,
    marginBottom: quarter,
    backgroundColor: 'white',
    borderColor: border,
    borderWidth: hairline,
    borderRadius: icon + half,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    paddingLeft: half,
    paddingRight: half,
    flexDirection: 'row',
  },
  titleIcon: {
    paddingRight:half,
    paddingLeft:half,
    justifyContent: 'center'
  },
  titleText: {
    flexDirection: 'column'
  },
  titleTitle: {
    ...h2,
    flex: 0,
    textAlignVertical: 'bottom',
  },
  titleSub: {
    ...h5,
    flex: 1,
    textAlignVertical: 'top'
  },
  selector: {
    flex: 0,
    flexDirection: 'row',
    borderTopColor: border,
    marginTop: quarter,
    borderTopWidth: hairline,
  },
  selectorItem: {
    flex: 1,
    ...h5,
    padding: eighth,
    textAlign: 'center'
  },
  selectorItemSelected: {
    flex: 1,
    ...h5,
    padding: eighth,
    fontWeight: 'bold',
    backgroundColor: '#eeeeee',
    textAlign: 'center'
  },
  selectorDivider: {
    height: '100%',
    borderLeftColor: border,
    borderLeftWidth: hairline
  }
});
