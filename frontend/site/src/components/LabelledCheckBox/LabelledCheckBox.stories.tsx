import React from 'react';
import LabelledCheckBox, {Props} from "./index";
import {Story} from "@storybook/api";

export default {
  title: 'LabelledCheckBox',
  component: LabelledCheckBox,
  argTypes: {},
};

const Template: Story<Props> = (args: Props) => <LabelledCheckBox {...args} />;

export const Checked = Template.bind({});

Checked.args = {
  selected: true,
  label: 'Label'
};
