import { Form } from "semantic-ui-react"
import * as React from "react"
import { SubProps } from "./index"

export default function SpotsListItemLabelForm({ state, ...props }: SubProps): React.ReactElement {

  const error = props.createGuideStore.showSpotsErrors && !props.spot.label && "Choose a name"

  return <Form.Input
    label='Name'
    width={5}
    error={error}
    value={props.spot.label}
    onChange={async (e, { value }) => {
      await props.updateSpot({
        label: value,
      })
    }}
  />
}