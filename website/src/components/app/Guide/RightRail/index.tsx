import { inject, observer } from "mobx-react"
import * as React from "react"
import GuideStore from "../../../../model/GuideStore"
import { Grid, GridColumn, Header, Segment } from "semantic-ui-react"


type Props = {
  guideStore?: GuideStore
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
            <Header as='h1'>{guide.title}</Header>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  }
}