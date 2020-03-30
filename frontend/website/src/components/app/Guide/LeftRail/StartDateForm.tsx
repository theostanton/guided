import React from "react"
import {
  DateInput,
} from "semantic-ui-calendar-react"
import { Form, Icon } from "semantic-ui-react"
import { logObject } from "utils/logger"
import client from "api/client"
import { EditStartDateDocument, MutationEditStartDateArgs } from "api/generated"
import { dateString } from "utils/dates"

type Props = {
  guideId: string
  startDate: string | null
}

type State = {
  loading: boolean
}

export default class StartDateForm extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  async handleChange(event, { name, value }) {
    const variables: MutationEditStartDateArgs = {
      guideId: this.props.guideId,
      date: value,
    }
    this.setState({
      loading: true,
    })
    const result = await client.mutate({
      mutation: EditStartDateDocument,
      variables,
    })
    logObject(result, "result")
    this.setState({
      loading: false,
    })
  }

  render(): React.ReactElement {
    return <Form loading={this.state.loading}>
      <DateInput
        placeholder='Start date'
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
      />
    </Form>
  }

}