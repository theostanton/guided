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
    console.log('isTouch', this.props.device.isTouch)
    if (this.props.device.isTouch) {
      return <MobileGuideContent/>
    } else {
      return <DesktopGuideContent/>
    }
  }
}