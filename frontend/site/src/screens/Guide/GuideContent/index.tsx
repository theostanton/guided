import React from 'react';
import {inject} from "mobx-react";
import Device from "stores/Device";
import DesktopGuideContent from "./DesktopGuideContent";
import MobileGuideContent from "./MobileGuideContent";

type Props = {
  device?: Device
};
type State = {};

@inject('device')
export default class GuideContent extends React.Component<Props, State> {
  render() {
    if (this.props.device.isLandscape()) {
      return <DesktopGuideContent/>
    } else {
      return <MobileGuideContent/>
    }
  }
}