import React from 'react'

import {Story} from "@storybook/react";
import {View} from "react-native";
import {card} from "styles";
import OverviewContent, {Props} from "./index";


export default {
  title: 'Guide/Mobile/Overview',
  component: OverviewContent,
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    }
  }
}

type Args = Pick<Props, 'guide'>

const Template: Story<Args> = (args: Args) => <View style={card}>
  <OverviewContent guide={args.guide}/>
</View>

export const Basic = Template.bind({})

Basic.args = {
  guide: {
    title: 'Some guide',
    owner: 'theo'
  }
}