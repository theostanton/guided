import React from 'react'


import {Story} from "@storybook/react";
import {View} from "react-native";
import {card} from "styles";
import GuideRoute, {Props} from "./index";


export default {
  title: 'Guide/Route',
  component: GuideRoute,
  parameters: {
    viewport: {
      defaultViewport: 'rail'
    }
  }
}

type Args = Pick<Props, 'spots'>

const Template: Story<Args> = (args: Args) => <View style={card}>
  <GuideRoute
    spots={args.spots}
    selectSpot={() => {
    }}
    selectedSpotId={undefined}
  />
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