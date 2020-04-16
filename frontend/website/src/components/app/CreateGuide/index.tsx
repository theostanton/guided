import { inject, Provider } from "mobx-react"
import * as React from "react"
import { GuideInfoFragment, GuideInput, TransportType } from "api/generated"
import AuthStore from "model/AuthStore"
import { Icon, Segment, Step } from "semantic-ui-react"
import CreateGuideStore from "../../../model/CreateGuideStore"
import { RouteComponentProps } from "@reach/router"
import CreateGuideSteps from "./CreateGuideSteps"
import CreateGuideContent from "./CreateGuideContent"


type TransportOption = {
  key: TransportType,
  text: string,
  value: TransportType
  image?: React.ReactElement
}


const TRANSPORT_OPTIONS: TransportOption[] = [
  {
    value: TransportType.Motorcycle,
    text: "Motorbike",
    key: TransportType.Motorcycle,
    image: <Icon name='motorcycle'/>,
  },
  {
    value: TransportType.Bicycle,
    text: "Bicycle",
    key: TransportType.Bicycle,
    image: <Icon name='bicycle'/>,
  },
  {
    value: TransportType.Car,
    text: "Car",
    key: TransportType.Car,
    image: <Icon name='car'/>,
  },
]

interface Props extends RouteComponentProps {
  authStore?: AuthStore
}

type State = {
  stage: "valid" | "invalid" | "creating" | "error"
  guideInfo: Partial<GuideInput>
}


@inject("authStore")
export default class CreateGuide extends React.Component<Props, State> {

  createGuideStore: CreateGuideStore

  constructor(props) {
    super(props)
    this.createGuideStore = new CreateGuideStore()
  }

  render(): React.ReactElement {
    return <Provider createGuideStore={this.createGuideStore}>
      <Segment padded={false} style={{ padding: 0, minHeight: "800px" }}>
        <CreateGuideSteps/>
        <CreateGuideContent/>
      </Segment>
    </Provider>
  }
}