import React from 'react'


import RouteContent, {Props} from "./index";
import {Story} from "@storybook/react";
import {View} from "react-native";
import {card} from "styles";


export default {
  title: 'Guide/Mobile/Route',
  component: RouteContent,
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}

type Args = Pick<Props, 'spots'>

const Template: Story<Args> = (args: Args) => <View style={card}>
  <RouteContent spots={args.spots} selectSpot={() => {
  }}/>
</View>

export const Basic = Template.bind({})

Basic.args = {
  spots: [
    {
      id: 'someId1',
      location: 'Some Location',
      label: 'Some Label'
    },
    {
      id: 'someId2',
      location: 'No label',
    },
    {
      id: 'someId3',
      label: 'No location',
    },
  ]
}