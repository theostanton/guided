import React from 'react';
import {inject, observer} from "mobx-react";
import {NavigationProps} from "utils/navigation/ScreenProps";
import GuideStore from "screens/Guide/GuideStore";
import LeftRailContent from "./LeftRailContent";

type Props = NavigationProps & {
  guideStore?: GuideStore
};
type State = {};

@inject('guideStore', 'navigation')
@observer
export default class LeftRail extends React.Component<Props, State> {

  render() {
    let selectedSpotId: string | undefined
    if (this.props.guideStore?.mode === "SelectSpot") {
      selectedSpotId = this.props.guideStore.getModeParams('SelectSpot').spot.id
    }
    return <LeftRailContent
      guide={this.props.guideStore!.guide!}
      selectSpot={(spotId) => {
        this.props.guideStore!.selectSpot(spotId)
      }
      }
      selectedSpotId={selectedSpotId}
      goBack={() => {
        if (this.props.navigation!.canGoBack()) {
          this.props.navigation!.goBack()
        } else {
          this.props.navigation!.navigate('Profile', {
            username: this.props.guideStore!.guide!.owner
          })
        }
      }}
    />
  }
}
