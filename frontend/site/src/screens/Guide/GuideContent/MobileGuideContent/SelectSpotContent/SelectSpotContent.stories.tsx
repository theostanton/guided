import React from 'react'


import SelectSpotContent, {Props} from "./index";
import {Story} from "@storybook/react";
import {View} from "react-native";
import {card} from "styles";


export default {
  title: 'Guide/Mobile/Select Spot',
  component: SelectSpotContent,
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}

type Args = Props

const Template: Story<Args> = (args: Args) => <View style={card}>
  <SelectSpotContent params={args.params}
                     onDismiss={() => {
                     }}/>
</View>

export const Basic = Template.bind({})

Basic.args = {
  params: {
    spot: {
      location: 'Some location',
      nights: 2,
      country: 'UK',
      id: 'someid',
      name: 'Some name'
    }
  }
}