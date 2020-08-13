import React from 'react'
import Link, {Props} from "./index";
import {Story} from "@storybook/react";

export default {
  title: 'Link',
  component: Link,
  argTypes: {},
};

const Template: Story<Props> = (args: Props) => <Link {...args}/>

export const Selected = Template.bind({})

Selected.args = {
  children: ['Selected'],
  href: '/somewhere',
  selected: true
}

export const NotSelected = Template.bind({})

NotSelected.args = {
  children: ['Not selected'],
  href: '/somewhere',
}