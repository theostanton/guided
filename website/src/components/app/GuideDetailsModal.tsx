import * as React from "react"
import { Modal, Button, Form } from "semantic-ui-react"
import sleep from "utils/sleep"

import slugify from "slugify"
import {
  GuideInput,
  MyCreateGuideDocument,
  MyCreateGuideMutationResult,
  MyCreateGuideMutationVariables,
} from "@guided/types"
import { generateId } from "../../api"

import { client } from "api"

type Props = {
  onClose: () => void
}

type State = {
  stage: "valid" | "invalid" | "creating" | "error"
  open: boolean
  guideInfo: Partial<GuideInput>
}

function isValid(guideInfo: Partial<GuideInput>): boolean {
  return guideInfo.title !== undefined && guideInfo.title.length > 0
}

export default class GuideDetailsModalComponent extends React.Component<Props, State> {

  state: State = {
    stage: "invalid",
    guideInfo: {},
    open: true,
  }

  update(key: "title", value: string) {
    const guideInfo: Partial<GuideInput> = {
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

    const variables: MyCreateGuideMutationVariables = {
      guide: {
        id: generateId("guide"),
        title,
        slug: slugify(title, {
          lower: true,
          remove: /[*+~.()'"!:@]/g,
        }),
      },
    }

    const response = await client.mutate<MyCreateGuideMutationResult>({
      mutation: MyCreateGuideDocument,
      variables,
    })

    const data = response.data!
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