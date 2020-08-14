import React from 'react'

import {Story} from "@storybook/react";
import {View} from "react-native";
import {card} from "styles";
import AddSpotContent, {Props} from "./index";
import {SEYTHENEX} from "../../../../../components/Map/consts";


export default {
  title: 'Guide/Mobile/Add Spot',
  component: AddSpotContent,
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}

type Args = Pick<Props, 'guide' | 'params'>

const Template: Story<Args> = (args: Args) => <View style={card}>
  <AddSpotContent guide={args.guide}
                  onDismiss={() => {
                  }}
                  params={args.params}
  />
</View>

export const Basic = Template.bind({})

Basic.args = {
  guide: {
    id: 'someId'
  },
  params: {
    event: SEYTHENEX
  }
}