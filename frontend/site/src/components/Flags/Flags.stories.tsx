import React from 'react'
import Flags from "./index";
import {Story} from "@storybook/react";
import {COUNTRIES, CountryCode} from "utils/human";

export default {
  title: 'Flags',
  argTypes: {
    size: {
      control: 'number'
    },
    countries: {
      control: {
        type: 'inline-check',
        options: Object.keys(COUNTRIES)
      }
    }
  }
}

type Args = {
  countries: CountryCode[],
  size: number
}

const Template: Story<Args> = (args: Args) => <Flags {...args}/>

function generate(args: Args): Story<Args> {
  const story = Template.bind({})
  story.args = args
  return story
}

export const Basic = generate({
  countries: ['FR', 'GB'],
  size: 48
})