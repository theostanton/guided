import React from 'react';
import {inject, observer} from "mobx-react";
import Device from "stores/Device";
import DesktopGuideContent from "./DesktopGuideContent";
import MobileGuideContent from "./MobileGuideContent";
import GuideStore from "../GuideStore";

type Props = {
  device?: Device
  guideStore?: GuideStore
};
type State = {};

@inject('device', 'guideStore')
@observer
export default class GuideContent extends React.Component<Props, State> {
  render() {
    if (this.props.guideStore.guide === undefined) {
      return null
    }
    if (this.props.device.isLandscape()) {
      return <DesktopGuideContent/>
    } else {
      return <MobileGuideContent/>
    }
  }
}