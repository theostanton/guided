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
import RideAndSpotList from "./RideAndSpotList"
import RideList from "./RideList"

type Props = {
  guideStore?: GuideStore
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
              <Statistic as='a' label='Rides' value={guide.ridesByGuide.totalCount} onClick={() => {
                this.setState({
                  selected: "rides",
                })
              }}/>
              <Statistic label='Spots' value={guide.spotsByGuide.totalCount} onClick={() => {
                this.setState({
                  selected: "spots",
                })
              }}/>
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
        <RideAndSpotList/>
        {/*{this.state.selected === "spots" && <SpotList/>}*/}
        {/*{this.state.selected === "rides" && <RideList/>}*/}
      </Grid>
    </div>
  }
}