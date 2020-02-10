import * as React from "react"
import {
  Button,
  Grid,
  GridColumn,
  Statistic,
  GridRow,
  Header,
  StatisticGroup, Divider, Segment,
} from "semantic-ui-react"
import { client } from "api"
import { navigate } from "gatsby"
import { DeleteGuideDocument, DeleteGuideMutationVariables } from "api/generated"
import { inject, observer } from "mobx-react"
import GuideStore from "model/GuideStore"
import SpotList from "./SpotList"

type Props = {
  guideStore?: GuideStore
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
export default class LeftRailComponent extends React.Component<Props> {

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
              <Statistic label='Rides' value={guide.ridesByGuide.totalCount}/>
              <Statistic label='Spots' value={guide.spotsByGuide.totalCount}/>
            </StatisticGroup>
          </GridColumn>
        </GridRow>
        {guide.startDate &&
        <GridRow>
          <GridColumn>
            <StatisticGroup widths='1' size={"small"}>
              <Statistic label='Starts' value={guide.startDate}/>
            </StatisticGroup>
          </GridColumn>
        </GridRow>
        }

        <Divider/>
        <SpotList
          selectSpot={(spotId: string) => {
            this.guideStore.selectSpot(spotId)
          }}
          spots={guide?.spotsByGuide!.nodes!.map(spot => {
            return spot!
          })}/>
      </Grid>
    </div>
  }
}