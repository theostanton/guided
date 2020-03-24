import * as React from "react"
import {
  Button,
  Grid,
  GridColumn,
  Statistic,
  GridRow,
  Header,
  StatisticGroup, Divider, Segment, Icon,
} from "semantic-ui-react"

import { client } from "api"
import { navigate } from "gatsby"
import { DeleteGuideDocument, DeleteGuideMutationVariables } from "api/generated"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"
import StageList from "./StageList"
import StartDateForm from "./StartDateForm"

type Props = {
  guideStore?: GuideStore
  close: () => void
}

type State = {
  selected: "rides" | "spots"
}

async function deleteGuide(guideId: string): Promise<void> {
  const variables: DeleteGuideMutationVariables = {
    guideId,
  }
  const { data } = await client.mutate({
    mutation: DeleteGuideDocument,
    variables,
  })
  console.log("deleteGuide data=")
  console.log(data)
  await navigate("app/guides")
}

@inject("guideStore")
@observer
export default class LeftRailComponent extends React.Component<Props, State> {

  state: State = {
    selected: "rides",
  }

  get guideStore(): GuideStore {
    return this.props.guideStore!
  }

  render(): React.ReactElement {
    const guide = this.guideStore.guide

    if (!guide) {
      return <Segment loading/>
    }

    return <div style={{ backgroundColor: "#ffffff" }}>
      <Grid padded={true}>

        <Grid.Row columns='equal' stretched verticalAlign='bottom'>
          <GridColumn width={"4"}>
            <Button icon='close' onClick={this.props.close}/>
          </GridColumn>
          <GridColumn>
            <Header as='h1'>{guide.title} </Header>
          </GridColumn>
          <GridColumn width={"4"} floated={"right"}>
            <Button icon='trash' onClick={async () => {
              await deleteGuide(guide.id)
            }}/>
          </GridColumn>
        </Grid.Row>

        <Divider/>

        <GridRow>
          <GridColumn>
            <Header subheader={"Slug"} content={guide.slug}/>
          </GridColumn>
        </GridRow>

        <Divider/>

        <GridRow>
          <GridColumn>
            <StatisticGroup widths='2' size={"tiny"}>
              <Statistic as='a' label='Rides' value={this.guideStore.rides.length} onClick={() => {
                this.setState({
                  selected: "rides",
                })
              }}/>
              <Statistic label='Spots' value={this.guideStore.spots.length} onClick={() => {
                this.setState({
                  selected: "spots",
                })
              }}/>
            </StatisticGroup>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <StartDateForm guideId={guide.id} startDate={guide.startDate}/>
          </GridColumn>
        </GridRow>
        {/*{guide.startDate &&*/}
        {/*<GridRow>*/}
        {/*  <GridColumn>*/}
        {/*    <StatisticGroup widths='1' size={"small"}>*/}
        {/*      <Statistic label='Starts' value={guide.startDate}/>*/}
        {/*    </StatisticGroup>*/}
        {/*  </GridColumn>*/}
        {/*</GridRow>*/}
        {/*}*/}

        <Divider/>
        <StageList/>
      </Grid>
    </div>
  }
}