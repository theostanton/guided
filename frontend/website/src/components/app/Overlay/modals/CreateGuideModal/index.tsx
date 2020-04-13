import * as React from "react"
import { Modal, Button, Form, Grid, Icon } from "semantic-ui-react"

import slugify from "slugify"
import {
  GuideInput,
  CreateGuideMutationVariables, CreateGuideDocument, CreateGuideMutation,
} from "api/generated"
import { client } from "api"
import { inject } from "mobx-react"
import AuthStore from "model/AuthStore"
import OverlayStore from "model/OverlayStore"
import { navigate } from "@reach/router"
import MaxHoursPerRideForm from "./MaxHoursPerRideForm"
import StartDateForm from "../../../Guide/LeftRail/StartDateForm"
import { dateString } from "../../../../../utils/dates"
import { DateInput } from "semantic-ui-calendar-react"
import { logJson } from "../../../../../utils/logger"

type Props = {
  authStore?: AuthStore
  overlayStore?: OverlayStore
}

type State = {
  stage: "valid" | "invalid" | "creating" | "error"
  guideInfo: Partial<GuideInput>
}

function isValid(guideInfo: Partial<GuideInput>): boolean {
  return guideInfo.title !== undefined
    && guideInfo.title.length > 0
    && guideInfo.maxHoursPerRide !== undefined
    && guideInfo.maxHoursPerRide > 0
}

@inject("authStore", "overlayStore")
export default class CreateGuideModal extends React.Component<Props, State> {

  state: State = {
    stage: "invalid",
    guideInfo: {
      maxHoursPerRide: 6,
    },
  }

  update(key: "title" | "maxHoursPerRide" | "startDate", value: string | number) {
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
    const slug = slugify(title, {
      lower: true,
      remove: /[*+~.()'"!:@_]/g,
    })

    const variables: CreateGuideMutationVariables = {
      guide: {
        id: `${this.props.authStore!.owner}_${slug}`,
        title,
        owner: this.props.authStore!.owner,
        slug,
        startDate: this.state.guideInfo.startDate,
        maxHoursPerRide: this.state.guideInfo.maxHoursPerRide,
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

  async close(guideSlug: string | undefined) {
    this.props.overlayStore!.closeModal()
    if (guideSlug) {
      await navigate(`/${this.props.authStore!.owner}/${guideSlug}`)
    }
  }

  render(): React.ReactElement {
    const { stage } = this.state
    return <Modal open={true}
                  closeOnDimmerClick
                  closeOnEscape
                  centered={false}
                  onClose={() => {
                    this.close(undefined)
                  }}>
      <Modal.Header>Create Guide</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label='Title'
            onChange={(e, { value }) => {
              this.update("title", value)
            }}
          />
          <Form.Group>
            <Form.Field width={4}>
              <label>Max ride duration</label>
              <Form.Input>
                <MaxHoursPerRideForm hours={this.state.guideInfo.maxHoursPerRide} onChange={(hours) => {
                  this.update("maxHoursPerRide", hours)
                }}/>
              </Form.Input>
            </Form.Field>

            <Form.Field >
              <label>Start date</label>
              <DateInput
                closeOnMouseLeave={true}
                popupPosition='bottom right'
                name='date'
                closable
                dateFormat={"YYYY-MM-DD"}
                initialDate={dateString(new Date())}
                inlineLabel={true}
                clearIcon={(<Icon name='remove' color='red'/>)}
                clearable={true}
                animation='fade'
                duration={200}
                hideMobileKeyboard
                value={this.state.guideInfo.startDate}
                iconPosition='right'
                preserveViewMode={false}
                autoComplete='off'
                onChange={(_, { value }) => {
                  logJson(value, "value")
                  this.update("startDate", value)
                }}

              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Circular</label>
            <Form.Checkbox label={'Guide ends at same place it begins'} checked={true} disabled={true}/>
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
          negative
          onClick={async () => {
            await this.close(undefined)
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