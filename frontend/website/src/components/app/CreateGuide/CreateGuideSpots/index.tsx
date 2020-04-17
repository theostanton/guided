import { inject, observer } from "mobx-react"
import * as React from "react"
import CreateGuideStore, { CreateGuideSpot } from "model/CreateGuideStore"
import {
  Button,
  ButtonGroup,
  Card,
  Flag,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Input,
  Segment,
} from "semantic-ui-react"
import { CSSProperties, ReactElement } from "react"
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader"
import AddSpotForm from "./AddSpotForm"
import CreateGuideSpotsList from "./CreateGuideSpotsList"


type Props = {
  createGuideStore?: CreateGuideStore
}

@inject("createGuideStore")
@observer
export default class CreateGuideSpots extends React.Component<Props> {

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
      <Header>
        Add locations
        <HeaderSubHeader>Add some locations to get you started. You can add, edit or move these on a map later</HeaderSubHeader>
      </Header>
      {<CreateGuideSpotsList/>}
      <div style={{
        bottom: "2em",
        position: "absolute",
        maxWidth: "600px",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <ButtonGroup
          style={{
            bottom: 0,
            right: 0,
            position: "absolute",
          }}>
          <Button
            color='blue'
            onClick={() => {
              if (this.createGuideStore.validateSpots()) {
                this.createGuideStore.goToStage("members")
              } else {
                this.createGuideStore.showSpotsErrors = true
              }
            }}>
            {this.createGuideStore.spots.length > 0 ? "Continue" : "Skip"}
          </Button>
        </ButtonGroup>
      </div>
    </div>
  }
}