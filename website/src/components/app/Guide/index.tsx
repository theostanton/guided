import * as React from "react"
import AuthStore from "model/AuthStore"
import { inject } from "mobx-react"
import GuideStore from "model/GuideStore"
import Map from "components/Map"
import AppMenu from "components/app/Menu"
import LeftRail from "./LeftRail"
import RightRail from "./RightRail"
import { GuideBySlugFragment } from "api/generated"

type Props = {
  guideStore: GuideStore
  authStore: AuthStore
  slug?: string
}

type State = {}


@inject("authStore", "guideStore")
export default class GuideComponent extends React.Component<Props, State> {

  componentDidMount(): void {
    this.props.guideStore.subscribe(
      this.props.slug!,
      this.props.authStore.owner,
    )
  }

  componentWillUnmount(): void {
    this.props.guideStore.unsubscribe()
  }

  render(): React.ReactElement | undefined {
    const guide: GuideBySlugFragment | undefined = this.props.guideStore.guide
    return (
      <div>
        <div style={{
          position: "fixed", /* Sit on top of the page content */
          width: "100%", /* Full width (cover the whole page) */
          height: "100%", /* Full height (cover the whole page) */
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2, /* Specify a stack order in case you're using a different order for other elements */
        }}>
          <Map/>
        </div>

        <div style={{
          position: "fixed",
          marginLeft: "2em",
          marginRight: "2em",
          top: "1em",
          left: "25%",
          right: "25%",
          zIndex: 3,
        }}>
          <AppMenu/>
        </div>

        <div style={{
          position: "fixed",
          height: "100%",
          width: "25%",
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
          height: "100%",
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