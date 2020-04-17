import { inject, observer } from "mobx-react"
import * as React from "react"
import CreateGuideStore from "model/CreateGuideStore"
import { Button, ButtonGroup, Header } from "semantic-ui-react"

type Props = {
  createGuideStore?: CreateGuideStore
}

@inject("createGuideStore")
@observer
export default class CreateGuideMembers extends React.Component<Props> {

  get createGuideStore(): CreateGuideStore {
    return this.props.createGuideStore!
  }

  render(): React.ReactElement {
    return <div style={{
      marginTop: "2em",
      marginBottom: "2em",
      paddingBottom: "4em",
      height: "min-content",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
    }}>
      <div style={{
        bottom: "2em",
        position: "absolute",
        maxWidth: "600px",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <Button
          color='blue'
          floated={"right"}
          onClick={() => {
            this.createGuideStore.goToStage("save")
          }}>
          Continue
        </Button>
      </div>
    </div>
  }
}