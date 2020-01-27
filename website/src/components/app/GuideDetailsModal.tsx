import * as React from "react"
import { Modal, Button, Form } from "semantic-ui-react"
import sleep from "utils/sleep"

import { API, graphqlOperation } from "aws-amplify"
import { CreateGuideInput, CreateGuideMutation } from "api/generated"
import { CreateGuide } from "api/mutations"
import slugify from "slugify"

type Props = {
  onClose: () => void
}

type State = {
  stage: "valid" | "invalid" | "creating" | "error"
  open: boolean
  guideInfo: Partial<CreateGuideInput>
}

function isValid(guideInfo: Partial<CreateGuideInput>): boolean {
  return guideInfo.title !== undefined && guideInfo.title.length > 0
}

export default class GuideDetailsModalComponent extends React.Component<Props, State> {

  state: State = {
    stage: "invalid",
    guideInfo: {},
    open: true,
  }

  update(key: "title", value: string) {
    const guideInfo: Partial<CreateGuideInput> = {
      ...this.state.guideInfo,
      [key]: value,
    }
    this.setState({
      guideInfo,
      stage: isValid(guideInfo) ? "valid" : "invalid",
    })
  }

  async create(): Promise<void> {
    this.setState({ stage: "creating" })

    let title = this.state.guideInfo.title!
    const input: CreateGuideInput = {
      title,
      slug: slugify(title, {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
      }),
    }
    const { data }: { data: CreateGuideMutation } = await API.graphql(graphqlOperation(CreateGuide, { input }))
    console.log(data)

    await sleep(1000)
    this.close()
  }

  close() {
    this.setState({ open: false })
    this.props.onClose()
  }

  render(): React.ReactElement {
    const { stage, open } = this.state
    return <Modal open={open} centered={false}>
      <Modal.Header>Create Guide</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label='Title'
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