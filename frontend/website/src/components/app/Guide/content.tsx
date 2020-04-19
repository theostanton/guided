import * as React from "react"
import AuthStore from "model/AuthStore"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"
import Map from "components/Map"
import LeftRail from "./LeftRail"
import RightRail from "./RightRail"
import GuideHeader from "./Header"
import { Helmet } from "react-helmet"

type Props = {
  guideStore?: GuideStore
  authStore?: AuthStore
}

@inject("authStore", "guideStore")
@observer
export default class GuideComponent extends React.Component<Props> {

  render(): React.ReactElement | undefined {
    const title = this.props.guideStore.guide ? `${this.props.guideStore.guide.title} by ${this.props.guideStore.guide.owner} - ` : ""
    return (
      <div>
        <Helmet title={`${title}Riders Bible`} defer={true}/>
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
          height: "min-content",
          top: 0,
          left: "25%",
          right: "25%",
          marginLeft: "1em",
          marginTop: "1em",
          marginRight: "2em",
          bottom: 0,
          zIndex: 2,
        }}>
          <GuideHeader/>
        </div>

        <div style={{
          position: "fixed",
          height: "min-content",
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
          <LeftRail/>
        </div>


        <div style={{
          position: "fixed",
          height: "200",
          width: "25%",
          paddingTop: "1em",
          paddingBottom: "2em",
          margin: 0,
          marginBottom: "5em",
          top: 0,
          right: "1em",
          zIndex: 3,
        }}>
          <RightRail/>
        </div>


      </div>
    )
  }

}