import React from 'react'
import LabelledPicker, {Props} from "./index";
import {Story} from "@storybook/api";

export default {
  title: 'Global/LabelledPicker',
  component: LabelledPicker,
  argTypes: {},
};

const Template: Story<Props> = (args: Props) => <LabelledPicker {...args}/>

export const Selected = Template.bind({})

Selected.args = {
  label: 'A label',
  options: ['Option 1', 'Option 2', 'Option 3'],
  selected: 'Option 2',
  onValueChange: () => {
  }
}

export const NotSelected = Template.bind({})

NotSelected.args = {
  label: 'A label',
  options: ['Option 1', 'Option 2', 'Option 3'],
  onValueChange: () => {
  }
}