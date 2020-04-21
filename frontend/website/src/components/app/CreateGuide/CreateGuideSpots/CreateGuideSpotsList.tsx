import CreateGuideStore, { CreateGuideStoreSpot } from "model/CreateGuideStore"
import { inject, observer } from "mobx-react"
import * as React from "react"
import { ReactElement } from "react"
import { Button } from "semantic-ui-react"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import CreateGuideSpotsListItem, { Position } from "./CreateGuideSpotsListItem"

type Props = {
  createGuideStore?: CreateGuideStore
}

type State = {
  status: "initiating" | "none"
}

@inject("createGuideStore")
@observer
export default class CreateGuideSpotsList extends React.Component<Props, State> {

  constructor(props) {
    super(props)
    this.state = {
      status: "initiating",
    }
  }

  get createGuideStore(): CreateGuideStore {
    return this.props.createGuideStore!
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    this.createGuideStore.reorderSpots(result.source.index, result.destination.index)
  }

  renderDraggable(): React.ReactElement {

    if (!this.createGuideStore.spots) {
      return
    }

    let items: ReactElement[] = []
    const spotsLength = this.createGuideStore.spots.length
    const isCircular = this.createGuideStore.isCircular

    const createGuideStore = this.createGuideStore

    function addSpotButton(spotIndex: number, position: Position | undefined): React.ReactElement {
      if (position !== "firstLast") {
        return <div style={{
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
          <Button style={{ display: "flex", flexDirection: "column" }} circular basic icon={"plus"} onClick={() => {
            createGuideStore.addSpot(spotIndex + 1)
          }}/>
          {!isCircular && position === "last" &&
          <Button style={{ display: "flex", flexDirection: "column" }} circular basic icon={"retweet"} onClick={() => {
            createGuideStore.updateIsCircular(true)
          }
          }/>}
        </div>
      }
    }

    function addSpot(spot: CreateGuideStoreSpot, spotIndex: number, position: Position) {
      if (position !== "firstLast") {
        items.push(<Draggable
          key={spot.key}
          draggableId={spot.key}
          index={spotIndex}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <CreateGuideSpotsListItem spotIndex={spotIndex} position={position}/>
            </div>
          )}
        </Draggable>)
      } else {
        items.push(<CreateGuideSpotsListItem spotIndex={spotIndex} position={position}/>)
      }
      if (["last", "firstLast"].includes(position)) {
        items.push(addSpotButton(spotIndex, position))
      }
    }


    items.push(addSpotButton(0, undefined))

    this.createGuideStore.spots.forEach((spot, spotIndex) => {

      let position: Position
      if (spotIndex === 0) {
        position = "first"
      } else if (spotIndex === spotsLength - 1 && !isCircular) {
        position = "last"
      } else {
        position = "middle"
      }

      addSpot(spot, spotIndex, position)
    })

    if (isCircular) {
      addSpot(this.createGuideStore.spots[0], 0, "firstLast")
    } else if (spotsLength === 1) {
      items.push(addSpotButton(1, undefined))
    }

    return <div style={{ paddingTop: "2em" }}>
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

  render(): ReactElement {
    return <div>
      {this.renderDraggable()}
    </div>

  }
}