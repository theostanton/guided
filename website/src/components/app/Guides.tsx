import * as React from "react"
import { Button, Card, List, Segment } from "semantic-ui-react"
import GuideDetailsModalComponent from "components/app/GuideDetailsModal"
import AppContainer from "components/app/Container"

import { API, graphqlOperation } from "aws-amplify"
import * as queries from "api/queries"
import randomKey from "utils/randomKey"
import { Guide } from "utils/types"
import { OnCreateGuide } from "api/subscriptions"
import { AllGuideTitlesQuery } from "api/generated"

type Props = {}

type State = {
  showCreateModal: boolean
  guides: Guide[] | undefined
}

export default class GuidesComponent extends React.Component<Props, State> {

  state: State = {
    showCreateModal: false,
    guides: undefined,
  }
  private subscription: any | undefined

  async fetchGuides(): Promise<void> {

    let guides: Guide[] | undefined
    try {
      const response: { data: AllGuideTitlesQuery } = await API.graphql(graphqlOperation(queries.AllGuideTitles))
      console.log(response)
      guides = response.data.listGuides?.items! as Guide[]
    } catch (response) {
      console.error("Error!?")
      console.error(response)
      guides = response.data.listGuides?.items!
    }
    this.setState({ guides })
  }

  componentDidMount(): void {

    this.subscription = API.graphql(
      graphqlOperation(OnCreateGuide),
    ).subscribe({
      next: async () => {
        await this.fetchGuides()
      },
    })

    this.fetchGuides().then()
  }

  componentWillUnmount(): void {
    this.subscription?.unsubscribe()
  }

  guidesList(): React.ReactElement {
    const guides = this.state.guides
    if (!guides) {
      return <Segment loading/>
    }

    if (guides.length === 0) {
      return <Segment>No guides</Segment>
    }

    const items = guides.map(guide => {
      const key = guide?.id || randomKey()
      return (
        <Card
          key={key}
          href={`/app/guides/${guide.slug}`}>
          <Card.Content>
            <Card.Header>{guide ? guide.title : "Error"}</Card.Header>
          </Card.Content>
        </Card>
      )
    })
    return <List
      items={items}
      divided
    />
  }

  render(): React.ReactElement | undefined {

    return <AppContainer>
      <Button
        content='Create new'
        onClick={() => {
          this.setState({ showCreateModal: true })
        }}/>

      {this.state.showCreateModal && <GuideDetailsModalComponent onClose={() => {
        this.setState({ showCreateModal: false })
      }}/>}

      {this.guidesList()}
    </AppContainer>
  }

}