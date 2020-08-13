import React from 'react'
import {Story} from "@storybook/react";
import ProfilePic, {Props} from "./.";
import {secondary} from "styles/colors";

export default {
  title: 'ProfilePic',
  component: ProfilePic,
  argTypes: {
    color: {
      control: 'color'
    }
  }
}

const Template: Story<Props> = (args: Props) => <ProfilePic {...args}/>

export const Basic = Template.bind({})

Basic.args = {
  color: secondary
}