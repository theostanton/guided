import React from 'react'
import Header, {HeaderAction, Props} from "./index";
import {Story} from "@storybook/react";
import {View} from 'react-native';
import {card} from "../../styles";
import {IconName} from "../Icon/names";
import {Color, primary} from "../../styles/colors";

export default {
  title: 'Global/Header',
  component: Header,
}

type Args = Props

const actions: HeaderAction[] = [
  {
    name: 'close',
    onPress: () => {
    }
  },
  {
    name: 'edit',
    onPress: () => {
    }
  }
];

const icon: { name: IconName, color?: Color } = {
  name: 'place',
  color: primary
};

const Template: Story<Args> = (args: Args) => <View style={card}><Header {...args}/></View>

function generate(args: Args): Story<Args> {
  const story = Template.bind({})
  story.args = args
  return story
}

export const WithSubtitle = generate({
  title: 'A title',
  subtitle: 'A subtitle'
})

export const WithoutSubtitle = generate({
  title: 'A title',
})

export const WithSubtitleAndIcon = generate({
  title: 'A title',
  subtitle: 'A subtitle',
  icon
})

export const WithoutSubtitleAndIcon = generate({
  title: 'A title',
  icon
})

export const WithSubtitleAndActions = generate({
  title: 'A title',
  subtitle: 'A subtitle',
  actions
})

export const WithoutSubtitleAndActions = generate({
  title: 'A title',
  icon,
  actions
})

export const WithSubtitleAndIconAndActions = generate({
  title: 'A title',
  subtitle: 'A subtitle',
  icon,
  actions
})

export const WithoutSubtitleAndIconAndActions = generate({
  title: 'A title',
  icon,
  actions
})