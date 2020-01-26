import * as React from "react"
import { Button, Container, Header, List, Segment } from "semantic-ui-react"
import GuideDetailsModalComponent from "components/GuideDetailsModal"

import { API, graphqlOperation } from "aws-amplify"
import * as queries from "gql/queries"
import { ListGuidesQuery } from "gql/API"
import { randomBytes } from "crypto"
import randomKey from "../../utils/randomKey"

type Props = {}

type State = {
  showCreateModal: boolean
  guides: any[] | undefined
}

export default class GuidesComponent extends React.Component<Props, State> {

  state: State = {
    showCreateModal: false,
    guides: undefined,
  }

  async fetchGuides(): Promise<void> {
    let guides: undefined
    try {
      const response: { data: ListGuidesQuery } = await API.graphql(graphqlOperation(queries.listGuides))
      console.log(response)
      guides = response.data.listGuides?.items!
    } catch (response) {
      console.error("Error!?")
      console.error(response)
      guides = response.data.listGuides?.items!
    }
    this.setState({ guides })
  }

  componentDidMount(): void {
    this.fetchGuides().then()
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
        <List.Item key={key}>
          <List.Header>{guide ? guide.title : "Error"}</List.Header>
        </List.Item>
      )
    })
    return <List items={items}/>
  }

  render(): React.ReactElement | undefined {

    return <Container>
      <Header>My guides</Header>
      <Button
        content='Create new'
        onClick={() => {
          this.setState({ showCreateModal: true })
        }}/>

      {this.state.showCreateModal && <GuideDetailsModalComponent onClose={() => {
        this.setState({ showCreateModal: false })
      }}/>}

      {this.guidesList()}
    </Container>
  }

}