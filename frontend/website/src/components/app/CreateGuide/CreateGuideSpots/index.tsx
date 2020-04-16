import { inject, observer } from "mobx-react"
import * as React from "react"
import CreateGuideStore, { CreateGuideSpot } from "model/CreateGuideStore"
import {
  Button,
  ButtonGroup,
  Card,
  Flag,
  Form,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Input,
  List, Segment, SegmentGroup,
} from "semantic-ui-react"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { CSSProperties, ReactElement } from "react"
import { SpotFragment } from "../../../api/generated"
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader"
import AddSpotForm from "./AddSpotForm"
import NightsForm from "../../Guide/RightRail/SpotDetail/NightsForm"


type Props = {
  createGuideStore?: CreateGuideStore
}

@inject("createGuideStore")
@observer
export default class CreateGuideSpots extends React.Component<Props> {

  get createGuideStore(): CreateGuideStore {
    return this.props.createGuideStore!
  }

  renderNights(nights: number, index: number): ReactElement {
    const styleLeft: CSSProperties = {
      borderTopRightRadius: "0px",
      borderBottomRightRadius: "0px",
      margin: "0px",
    }

    const styleInput: CSSProperties = {
      borderRadius: "0px",
      width: "7em",
      textAlign: "center",
    }

    const styleRight: CSSProperties = {
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
    }

    const store = this.props.createGuideStore

    const label = nights === 0 ? "Ride by" : `${nights} nights`

    return <Input>
      <Button icon='minus' size='tiny' style={styleLeft} disabled={nights === 0}
              onClick={() => {
                store.updateNights(index, nights - 1)
              }}/>
      <input style={styleInput} value={label} autoFocus={false}/>
      <Button icon='plus' size='tiny' style={styleRight}
              onClick={() => {
                store.updateNights(index, nights + 1)
              }}/>
    </Input>
  }

  renderSpotItem(spot: CreateGuideSpot, index: number): ReactElement {
    return <Card fluid style={{ marginBottom: "1em" }}>
      <Grid>
        <GridRow style={{ marginLeft: "1em" }} verticalAlign={"middle"}>
          <GridColumn width={1} textAlign={"center"}>
            <Icon name={"bars"}/>
          </GridColumn>
          <GridColumn width={6} style={{ paddingTop: "1em", paddingBottom: "1em" }}>
            <Header>
              {spot.title}
              <HeaderSubHeader><Flag name={spot.country?.toLowerCase()}/>{spot.location}</HeaderSubHeader>
            </Header>
          </GridColumn>
          <GridColumn>
            {this.renderNights(spot.nights, index)}
          </GridColumn>
          <GridColumn floated={"right"} style={{ marginRight: "1em" }}>
            <Button floated={"right"} onClick={() => {
              this.createGuideStore.removeSpot(index)
            }}>Remove</Button>
          </GridColumn>
        </GridRow>
      </Grid>
    </Card>
  }

  renderSpots(): ReactElement {

    let items: ReactElement[] = []
    this.createGuideStore.spots.forEach((spot, index) => {
      items.push(<Draggable
        key={spot.title}
        draggableId={spot.title}
        index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {this.renderSpotItem(spot, index)}
          </div>
        )}
      </Draggable>)
    })

    return <div style={{ paddingTop: "2em" }}>

      <Header>
        Locations
      </Header>
      <DragDropContext onDragEnd={this.onDragEnd.bind(this)}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    this.createGuideStore.reorderSpots(result.source.index, result.destination.index)
  }

  renderSearch(): ReactElement {
    return <Segment style={{ marginBottom: "2em", paddingBottom: "4em" }}>
      <AddSpotForm/>
    </Segment>
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
      {this.renderSearch()}
      {this.renderSpots()}
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
              this.createGuideStore.goToStage("members")
            }}>
            {this.createGuideStore.spots.length > 0 ? "Continue" : "Skip"}
          </Button>
        </ButtonGroup>
      </div>
    </div>
  }
}