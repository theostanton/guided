import * as React from "react"
import AuthStore from "model/AuthStore"
import { inject } from "mobx-react"
import GuideStore from "model/GuideStore"
import Map from "components/Map"
import LeftRail from "./LeftRail"
import RightRail from "./RightRail"

type Props = {
  guideStore?: GuideStore
  authStore?: AuthStore
  close: () => void
}

@inject("authStore", "guideStore")
export default class GuideComponent extends React.Component<Props> {

  render(): React.ReactElement | undefined {
    return (
      <div>
        <div style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
        }}>
          <Map/>
        </div>

        <div style={{
          position: "fixed",
          height: "100%",
          width: "25%",
          overflowY: "scroll",
          paddingTop: "1em",
          paddingLeft: "1em",
          paddingBottom: "2em",
          margin: 0,
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 3,
        }}>
          <LeftRail close={this.props.close}/>
        </div>


        <div style={{
          position: "fixed",
          height: "auto",
          width: "25%",
          paddingTop: "1em",
          paddingRight: "1em",
          paddingBottom: "2em",
          margin: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 3,
        }}>
          <RightRail/>
        </div>


      </div>
    )
  }

}