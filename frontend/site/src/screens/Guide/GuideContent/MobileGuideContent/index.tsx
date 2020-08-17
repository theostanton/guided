import React from 'react';
import {StyleSheet, View} from 'react-native';
import {inject, observer} from "mobx-react";
import {NavigationProps} from "utils/navigation/ScreenProps";
import {hairline, half, whole} from "styles/dimensions";
import {border} from "styles/colors";
import GuideStore from "screens/Guide/GuideStore";
import AddSpotContent from "./AddSpotContent";
import OverviewContent from "./OverviewContent";
import SelectSpotContent from "./SelectSpotContent";
import GuideHeader from "./GuideHeader";
import {autoPointerEvents, noPointerEvents} from "styles/touch";
import RouteContent from "./RouteContent";
import CameraStore from "components/Map/CameraStore";
import {assertMaybes} from "../../../../utils";

type Props = NavigationProps & {
  guideStore?: GuideStore
  cameraStore?: CameraStore
};
type State = {};

@inject('navigation', 'guideStore', 'cameraStore')
@observer
export default class MobileGuideContent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    props.cameraStore!.updatePadding({
      bottom: 200 + 2 * whole,
      top: 200 + 2 * whole,
    })
  }

  renderContent() {

    let Content: React.ReactElement
    switch (this.props.guideStore!.mode) {
      case "AddSpot":
        Content = <AddSpotContent
          onDismiss={() => {
            this.props.guideStore!.clearMode()
          }}
          params={this.props.guideStore!.getModeParams('AddSpot')}
          guide={this.props.guideStore!.guide!}/>
        break
      case "Route":
        Content = <RouteContent
          spots={this.props.guideStore!.guide!.spots.nodes.map(assertMaybes())}
          selectSpot={spotId => this.props.guideStore!.selectSpot(spotId)}
        />
        break
      case "SelectSpot":
        Content = <SelectSpotContent
          params={this.props.guideStore!.getModeParams('SelectSpot')}
          onDismiss={() => {
            this.props.guideStore!.updateMode('Route', {})
          }
          }/>
        break
      default:
        Content = <OverviewContent guide={this.props.guideStore!.guide!}/>
    }

    return <View style={styles.content} {...autoPointerEvents()}>
      {Content}
    </View>
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.header} {...autoPointerEvents()}>
          {/*<ReactResizeDetector>*/}
          {/*  {({_, height}) => {*/}
          {/*    if (height) {*/}
          {/*      this.props.cameraStore.updatePadding({*/}
          {/*        top: height + 2 * whole + icon*/}
          {/*      })*/}
          {/*    }*/}
          {/*    return <GuideHeader/>*/}
          {/*  }}*/}
          {/*</ReactResizeDetector>*/}
          <GuideHeader/>

        </View>
        <View style={styles.contentContainer} {...noPointerEvents()}>
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
    flex: 0,
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
    maxWidth: 800,
    borderRadius: half,
    borderWidth: hairline,
    borderColor: border,
    overflow: 'hidden'
  }
});
