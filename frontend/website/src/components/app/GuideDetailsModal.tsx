import * as React from "react"
import { Modal, Button, Form } from "semantic-ui-react"

import slugify from "slugify"
import {
  GuideInput,
  CreateGuideMutationVariables, CreateGuideMutationResult, CreateGuideDocument, CreateGuideMutation,
} from "api/generated"
import { generateId } from "api"
import { client } from "api"

type Props = {
  owner: string
  onClose: (guideSlug: string | undefined) => void
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

    const variables: CreateGuideMutationVariables = {
      guide: {
        id: generateId("guide"),
        title,
        owner: this.props.owner,
        slug: slugify(title, {
          lower: true,
          remove: /[*+~.()'"!:@]/g,
        }),
        created: new Date().toISOString(),
        updated: null,
      },
    }

    const response = await client.mutate<CreateGuideMutation>({
      mutation: CreateGuideDocument,
      variables,
    })

    const data = response.data!
    console.log(data)

    this.close(data.createGuide.guide.slug)
  }

  close(guideSlug: string | undefined) {
    this.setState({ open: false })
    this.props.onClose(guideSlug)
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
            this.close(undefined)
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