import * as React from "react"
import { Button, Container, Header, List } from "semantic-ui-react"
import GuideDetailsModalComponent from "components/GuideDetailsModal"

type Props = {}

type State = {
  showCreateModal: boolean
}

export default class GuidesComponent extends React.Component<Props, State> {

  state: State = {
    showCreateModal: false,
  }

  render(): React.ReactElement | undefined {


    const guides = [1, 2, 3].map(guide => {
      return (<List.Item>
        <List.Header>{guide}</List.Header>
      </List.Item>)
    })
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
      <List items={guides}/>
    </Container>
  }

}