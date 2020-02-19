import {
  RemoveSpotDocument,
  RemoveSpotMutationVariables,
  SpotByGuideFragment,
} from "api/generated"
import * as React from "react"
import { Button, Flag, FlagNameValues, Form, Grid, GridColumn, Header, Icon, Input, Segment } from "semantic-ui-react"
import { client } from "api"
import { log, logJson } from "@guided/logger"

type Props = {
  spot: SpotByGuideFragment
  close: () => void
}

type State = {
  editMode: boolean
}

export default class SpotDetail extends React.Component<Props, State> {


  state: State = {
    editMode: false,
  }

  async removeSpot(): Promise<void> {
    const variables: RemoveSpotMutationVariables = {
      spotId: this.props.spot.id,
    }
    const result = await client.mutate({
      mutation: RemoveSpotDocument,
      variables,
    })
    logJson(result.data, "result")
    this.props.close()
  }

  toggleEditMode(): void {
    this.setState({
      editMode: !this.state.editMode,
    })
  }

  render(): React.ReactElement {
    const spot = this.props.spot
    return <Grid padded={true}>
      <Grid.Row columns='equal' stretched verticalAlign='bottom'>
        <GridColumn>
          <Header as='h1'>{spot.label}</Header>
        </GridColumn>
        <GridColumn width={"6"} floated={"right"}>
          <Button.Group icon size={"tiny"}>
            <Button icon={this.state.editMode ? "edit outline" : "edit"} onClick={() => {
              this.toggleEditMode()
            }}>
            </Button>
            <Button icon='trash' onClick={async () => {
              await this.removeSpot()
            }}/>
          </Button.Group>
        </GridColumn>
      </Grid.Row>
      <Flag name={spot.country!.toLowerCase() as FlagNameValues}/>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Button.Group icon>
            <Button size={"tiny"}>
              <Icon name='minus'/>
            </Button>
            <Button>
              <Icon name='plus'/>
            </Button>
          </Button.Group>
        </Grid.Column>
        <Grid.Column verticalAlign={"middle"} stretched={true}>
          <Header textAlign={"left"}>5 nights</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Input type='text' placeholder='Search...' action onSubmit={() => {
          console.log("onSubmit@")
        }}>
          <input/>
          <Button type='submit' onClick={() => {
            log("onSubmit!")
          }
          }>Search</Button>
        </Input>
      </Grid.Row>
    </Grid>
  }
}

