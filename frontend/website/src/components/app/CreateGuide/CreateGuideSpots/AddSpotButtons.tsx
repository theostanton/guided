import { Position } from "./CreateGuideSpotsListItem"
import { Button } from "semantic-ui-react"
import * as React from "react"
import CreateGuideStore from "model/CreateGuideStore"
import { inject, observer } from "mobx-react"

type Props = {
  spotIndex: number
  position: Position
  createGuideStore?: CreateGuideStore
}

type State = {
  updatingIsCircular: boolean
  addingSpot: boolean
}

@inject("createGuideStore")
@observer
export default class AddSpotButtons extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      updatingIsCircular: false,
      addingSpot: false,
    }
  }

  render(): React.ReactElement {

    const { position, spotIndex, createGuideStore } = this.props

    const isCircular = createGuideStore!.guide && createGuideStore!.guide.isCircular

    if (this.props.position !== "firstLast") {
      return <div
        key={`add_${spotIndex}`}
        style={{
          width: "min-content",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "1em",
          paddingBottom: "1em",
          marginTop: "1em",
          marginBottom: "1em",
          display: "flex",
          flexDirection: "row",
        }}>
        <Button style={{ display: "flex", flexDirection: "column" }}
                loading={this.state.addingSpot}
                circular
                basic
                icon={"plus"}
                onClick={async () => {
                  this.setState({
                    addingSpot: true,
                  })
                  await createGuideStore.addSpot(spotIndex)
                  this.setState({
                    addingSpot: false,
                  })
                }}/>
        {!isCircular && position === "last" &&
        <Button style={{ display: "flex", flexDirection: "column" }}
                circular
                basic
                icon={"retweet"}
                loading={this.state.updatingIsCircular}
                onClick={async () => {
                  this.setState({
                    updatingIsCircular: true,
                  })
                  await createGuideStore.updateIsCircular(true)
                  this.setState({
                    updatingIsCircular: false,
                  })
                }
                }/>}
      </div>
    } else {
      return null
    }
  }
}