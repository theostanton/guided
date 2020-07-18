import CreateGuideStore, { CreateGuideStoreSpot } from "model/CreateGuideStore"
import { inject, observer } from "mobx-react"
import * as React from "react"
import { ReactElement } from "react"
import { Button, Card, Form, FormGroup, Grid, GridColumn, GridRow, Header } from "semantic-ui-react"
import { AddSpotInput, Geocode, UpdateSpotResult } from "api/generated"
import { humanDate } from "utils/human"
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader"
import SpotsListItemLabelForm from "./SpotsListItemLabelForm"
import SpotsListItemLocationForm from "./SpotsListItemLocationForm"
import SpotsListItemStage from "./SpotsListItemStage"
import SpotsListItemContextualForm from "./SpotsListItemContextualForm"
import { GeocodesStore } from "../GeocodesStore"

type Result = {
  query?: string
  error?: string
  status: "loading" | "error" | "success" | "clear" | "updating" | "deleting"
  geocodes?: Geocode[]
}

export type Position = "first" | "middle" | "last" | "firstLast"

export type Props = {
  position: Position
  createGuideStore?: CreateGuideStore
  geocodeStore?: GeocodesStore
  spotIndex: number
}

export type State = {
  result: Result
  updatingStartDate: boolean
  updatingIsCircular: boolean
}

export type SubProps = {
    state: State,
    spot: Partial<CreateGuideStoreSpot>,
    setState: (state: Partial<State>) => void,
    updateSpot: (fields: Partial<AddSpotInput>) => Promise<UpdateSpotResult>
  }
  & Props

@inject("createGuideStore", "geocodeStore")
@observer
export default class CreateGuideSpotsListItem extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      result: {
        status: "clear",
      },
      updatingIsCircular: false,
      updatingStartDate: false,
    }
  }

  get createGuideStore(): CreateGuideStore {
    return this.props.createGuideStore!
  }

  get geocodeStore(): GeocodesStore {
    return this.props.geocodeStore!
  }

  get subProps(): SubProps {
    return {
      ...this.props,
      spot: this.spot,
      state: this.state,
      updateSpot: this.updateSpot.bind(this),
      setState: ((state: Partial<State>) => {
        this.setState({
          ...this.state,
          ...state,
        })
      }).bind(this),
    }
  }

  get isOnly(): boolean {
    return this.createGuideStore.spots.length === 1
  }

  get spot(): Partial<CreateGuideStoreSpot> {
    return this.createGuideStore.spots[this.props.spotIndex]
  }


  async updateSpot(fields: Partial<AddSpotInput>): Promise<UpdateSpotResult> {
    return this.createGuideStore.updateSpot(this.props.spotIndex, fields)
  }

  renderLeft(): React.ReactElement {

    let title: string
    switch (this.props.position) {
      case "first":
        title = `Start`
        break
      case "middle":
        title = `${this.props.spotIndex}.`
        break
      case "last":
        title = `End`
        break
      case "firstLast":
        title = `Back to start`
        break
    }

    return <Header as={"h5"} color={"grey"}>{title}</Header>
  }

  renderHeader(): React.ReactElement {

    let right: ReactElement
    switch (this.props.position) {
      case "first":
        break
      case "last":
      case "middle":
        right = <Button basic
                        compact
                        circular
                        floated={"right"}
                        icon={"trash"}
                        loading={this.state.result.status === "deleting"}
                        onClick={async () => {
                          await this.removeSelf()
                        }
                        }/>
        break
      case "firstLast":
        right = <Button basic
                        compact
                        icon={"close"}
                        floated={"right"}
                        circular
                        loading={this.state.updatingIsCircular}
                        onClick={async () => {
                          this.setState({
                            updatingIsCircular: true,
                          })
                          await this.createGuideStore.updateIsCircular(false)
                          this.setState({
                            updatingIsCircular: true,
                          })
                        }
                        }/>

    }

    let title: string
    switch (this.props.position) {
      case "first":
        title = `Start`
        break
      case "middle":
        title = `${this.props.spotIndex}.`
        break
      case "last":
        title = `End`
        break
      case "firstLast":
        title = `Back to start`
        break
    }

    return <Grid>
      <GridColumn width={14}>
        <Header as={"h3"}>{title}{this.spot.date && this.props.position !== "first" &&
        <HeaderSubHeader>{humanDate(this.spot.date, true)}</HeaderSubHeader>}</Header>
      </GridColumn>
      <GridColumn width={2} floated={"right"}>
        {right}
      </GridColumn>
    </Grid>
  }

  renderCenter(): React.ReactElement {

    return <Card fluid
                 style={{
                   paddingLeft: "2em",
                   paddingRight: "2em",
                   paddingTop: "2em",
                   paddingBottom: "1em",
                 }}>
      {this.renderHeader()}
      <Form>
        <FormGroup>
          <SpotsListItemLabelForm {...this.subProps}/>
          <SpotsListItemLocationForm {...this.subProps}/>
          <SpotsListItemContextualForm {...this.subProps}/>
        </FormGroup>
      </Form>
    </Card>
  }

  async removeSelf() {
    this.setState({
      result: {
        status: "deleting",
      },
    })
    const result = await this.createGuideStore.removeSpot(this.props.spotIndex)
    if (!result.success) {
      this.setState({
        result: {
          status: "error",
        },
      })
    }
  }

  renderRight(): React.ReactElement | undefined {
    switch (this.props.position) {
      case "first":
        return
      case "last":
      case "middle":
        return <Button basic compact icon={"trash"} loading={this.state.result.status === "deleting"} circular
                       style={{ padding: "0.5em" }}
                       onClick={async () => {
                         await this.removeSelf()
                       }
                       }/>
      case "firstLast":
        return <Button basic compact icon={"close"} circular style={{ padding: "0.5em" }}
                       onClick={() => {
                         this.createGuideStore.updateIsCircular(false)
                       }
                       }/>
    }
  }

  renderRightStage(): React.ReactElement | undefined {
    switch (this.props.position) {
      case "first":
      case "firstLast":
        return
      case "last":
      case "middle":
        return <Button compact circular basic icon={"plus"} loading={this.state.result.status === "deleting"}
                       style={{ padding: "0.5em" }}
                       onClick={async () => {
                         await this.createGuideStore.addSpot(this.props.spotIndex)
                       }
                       }/>
    }
  }

  render(): React.ReactElement {
    return <Grid columns={16} key={this.spot.key}>
      <GridRow style={{ padding: 0, zIndex: 5 }} width={16}>
        {this.renderCenter()}
      </GridRow>
      {["first", "middle"].includes(this.props.position) && !this.isOnly &&
      <GridRow style={{
        paddingBottom: "1em",
        paddingTop: 0,
      }}>
        <GridColumn width={16} style={{
          padding: 0,
          zIndex: 0,
        }}>
          <SpotsListItemStage {...this.subProps}/>
        </GridColumn>
      </GridRow>}
    </Grid>
  }
}