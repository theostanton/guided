import React from 'react'
import SelectSpotContent, {Props} from "./index";
import {Story} from "@storybook/react";
import {SEYTHENEX} from "components/Map/consts";


export default {
  title: 'Guide/Desktop/Select Spot',
  component: SelectSpotContent,
  parameters: {
    viewport: {
      defaultViewport: 'rail'
    }
  }
}

type Args = Pick<Props, 'params'>

const Template: Story<Args> = (args: Args) => <SelectSpotContent params={args.params} onDismiss={() => {
}}/>

export const Basic = Template.bind({})

Basic.args = {
  params: {
    spot: {
      lat: SEYTHENEX.latitude,
      long: SEYTHENEX.longitude,
      location: 'Some location',
      nights: 2,
      country: 'UK',
      id: 'someid',
      name: 'Some name'
    }
  }
}