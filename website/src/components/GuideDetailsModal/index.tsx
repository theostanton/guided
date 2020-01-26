import * as React from "react"
import { Header, Modal, Button, Form } from "semantic-ui-react"
import sleep from "../../utils/sleep"

type GuideInfo = {
  title?: string
}

type Props = {
  onClose: () => void
}

type State = {
  stage: "valid" | "invalid" | "creating" | "error"
  open: boolean
  guideInfo: GuideInfo
}

function isValid(guideInfo: GuideInfo): boolean {
  return guideInfo.title !== undefined && guideInfo.title.length > 0
}

export default class GuideDetailsModalComponent extends React.Component<Props, State> {

  state: State = {
    stage: "invalid",
    guideInfo: {},
    open: true,
  }

  update(key: "title", value: string) {
    const guideInfo: GuideInfo = {
      ...this.state.guideInfo,
      [key]: value,
    }
    this.setState({
      guideInfo,
      stage: isValid(guideInfo) ? "valid" : "invalid",
    })
  }

  async create(): Promise<void> {
    console.log(JSON.stringify(this.state, null, 4))
    this.setState({ stage: "creating" })
    await sleep(5000)
    this.close()
  }

  close() {
    this.setState({ open: false })
    this.props.onClose()
  }

  render(): React.ReactElement {
    const { stage, guideInfo, open } = this.state
    return <Modal open={open} centered={false}>
      <Modal.Header>Create Guide</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
        <Form>
          <Form.Input
            label='Title'
            value={guideInfo.title}
            onChange={(e, { value }) => {
              this.update("title", value)
            }}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          negative
          onClick={() => {
            this.close()
          }}
        >Cancel</Button>
        <Button
          positive
          icon='checkmark'
          labelPosition='right'
          content='Create'
          enabled={stage === "valid"}
          loading={stage === "creating"}
          onClick={async () => {
            await this.create()
          }}
        />
      </Modal.Actions>
    </Modal>
  }

}