import React from 'react';
import {inject, observer} from "mobx-react";
import DesktopGuideContent from "./DesktopGuideContent";
import MobileGuideContent from "./MobileGuideContent";
import GuideStore from "../GuideStore";
import {Context} from "app/Context";

type Props = {
  guideStore?: GuideStore
};
type State = {};

@inject('guideStore')
@observer
export default class GuideContent extends React.Component<Props, State> {

  render() {
    if (this.props.guideStore!.guide === undefined) {
      return null
    }

    return <Context.Consumer>
      {({orientation}) => {
        if (orientation === 'landscape') {
          return <DesktopGuideContent/>
        } else {
          return <MobileGuideContent/>
        }
      }}
    </Context.Consumer>
  }
}