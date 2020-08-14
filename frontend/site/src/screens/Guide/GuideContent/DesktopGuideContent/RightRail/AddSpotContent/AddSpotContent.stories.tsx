import React from 'react'
import AddSpotContent from "./index";
import {Story} from "@storybook/react";
import {MapClickEvent} from "components/Map/types";
import {SEYTHENEX} from "components/Map/consts";


export default {
  title: 'Guide/Desktop/Add Spot',
  component: AddSpotContent,
  parameters: {
    viewport: {
      defaultViewport: 'rail'
    }
  }
}

type Args = {
  event: MapClickEvent
}

const Template: Story<Args> = (args: Args) => <AddSpotContent params={{event: args.event}}
                                                              guide={{id: ''}}
                                                              onDismiss={() => {
                                                              }}/>

export const Basic = Template.bind({})

Basic.args = {
  event: SEYTHENEX
}