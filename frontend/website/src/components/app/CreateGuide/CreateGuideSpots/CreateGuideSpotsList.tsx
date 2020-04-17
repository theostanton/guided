import CreateGuideStore, { CreateGuideStoreSpot } from "model/CreateGuideStore"
import { inject, observer } from "mobx-react"
import * as React from "react"
import { ReactElement } from "react"
import { Button, ButtonGroup, List } from "semantic-ui-react"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import CreateGuideSpotsListItem, { Position } from "./CreateGuideSpotsListItem"
import { CreateGuideWithSpotInput } from "../../../../api/generated"

type Props = {
  createGuideStore?: CreateGuideStore
}

@inject("createGuideStore")
@observer
export default class CreateGuideSpotsList extends React.Component<Props> {

  constructor(props) {
    super(props)
    this.state = {
      spots: [],
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

    let items: ReactElement[] = []
    const spotsLength = this.createGuideStore.spots.length
    const isCircular = this.createGuideStore.isCircular

    const createGuideStore = this.createGuideStore

    function addSpotButton(spotIndex: number, position: Position): React.ReactElement {
      if (position !== "firstLast") {
        return <div style={{
          width: "min-content",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "1em",
          marginTop: "1em",
        }}>
          <ButtonGroup basic>
            <Button circular icon={"plus"} onClick={() => {
              createGuideStore.addSpot(spotIndex + 1)
            }}/>
            {!isCircular && position === "last" && <Button icon={'retweet'} onClick={() => {
              createGuideStore.updateIsCircular(true)
            }
            }/>}
          </ButtonGroup>
        </div>
      }
    }

    function addSpot(spot: CreateGuideStoreSpot, spotIndex: number, position: Position) {
      items.push(<Draggable
        key={position === "firstLast" ? position : spot.key}
        draggableId={position === "middle" && spot.key}
        index={spotIndex}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CreateGuideSpotsListItem spotIndex={spotIndex} position={position}/>
            {addSpotButton(spotIndex, position)}
          </div>
        )}
      </Draggable>)
    }

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