import React from "react"
import {
  DateInput,
} from "semantic-ui-calendar-react"
import { Form, Icon, Label } from "semantic-ui-react"
import { logObject } from "utils/logger"
import client from "api/client"
import {
  EditStartDateDocument,
  EditStartDateMutation,
  EditStartDateMutationResult,
  MutationEditStartDateArgs,
} from "api/generated"
import { dateString } from "utils/dates"

type Props = {
  guideId: string
  startDate: string | null
}

type State = {
  loading: boolean
  error: string | undefined
}

export default class StartDateForm extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      loading: false,
      error: undefined,
    }
  }

  async handleChange(event, { name, value }) {
    const variables: MutationEditStartDateArgs = {
      guideId: this.props.guideId,
      date: value,
    }
    this.setState({
      loading: true,
      error: undefined,
    })
    const { data } = await client.mutate<EditStartDateMutation>({
      mutation: EditStartDateDocument,
      variables,
    })
    logObject(data, "data")
    this.setState({
      loading: false,
      error: !data.editStartDate.success && data.editStartDate.message,
    })
  }

  render(): React.ReactElement {
    return <Form loading={this.state.loading}>
      <Form.Field>
        <label>Start date</label>
        <DateInput
          closeOnMouseLeave={true}
          popupPosition='bottom right'
          name='date'
          closable
          dateFormat={"YYYY-MM-DD"}
          initialDate={this.props.startDate || dateString(new Date())}
          inlineLabel={true}
          clearIcon={(<Icon name='remove' color='red'/>)}
          clearable={true}
          animation='fade'
          duration={200}
          hideMobileKeyboard
          value={this.props.startDate}
          iconPosition='left'
          preserveViewMode={false}
          autoComplete='off'
          onChange={this.handleChange.bind(this)}
          style={
            { marginBottom: 0 }
          }
        />
        {this.state.error && <Label basic color='red' pointing style={
          { marginTop: 0 }
        }>{this.state.error}</Label>}
      </Form.Field>
    </Form>
  }

}