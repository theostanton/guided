import * as React from "react"
import { Button, Card, List, Segment, Message } from "semantic-ui-react"
import GuideDetailsModalComponent from "components/app/GuideDetailsModal"
import AppContainer from "components/app/Container"

import randomKey from "utils/randomKey"
import AuthStore from "../../models/AuthStore"
import { inject } from "mobx-react"
import { client } from "../../api"
import { useAllGuideTitlesForUserQuery } from "@guided/types"

type Props = {
  authStore: AuthStore
}

type State = {
  showCreateModal: boolean
}

function GuidesList({ owner }: { owner: string }) {

  const { data, loading, error } = useAllGuideTitlesForUserQuery({
    client,
    variables: {
      owner,
    },
  })

  if (loading) {
    return <Segment loading/>
  }

  if (error) {
    return <Segment>
      <Message error>{error.message}</Message>
    </Segment>
  }

  if (data!.allGuides!.nodes.length === 0) {
    return <Segment>No guides</Segment>
  }

  const items = data!.allGuides!.nodes.map(guide => {
    const key = guide!.id || randomKey()
    return (
      <Card
        key={key}
        href={`/app/guides/${guide!.slug}`}>
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

@inject("authStore")
export default class GuidesComponent extends React.Component<Props, State> {

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

      <GuidesList owner={this.props.authStore.owner}/>
    </AppContainer>
  }

}