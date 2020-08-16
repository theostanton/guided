// Button.stories.ts

import React from 'react';
import Button, {Props} from './.';
import {primary, secondary} from "styles/colors";
import {Story} from "@storybook/react";

export default {
  title: 'Global/Button',
  component: Button,
  argTypes: {
    color: {control: 'color'},
  },
};

const onPress = () => {
  console.log('onPress')
}

const Template: Story<Props> = (args: Props) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: primary,
  disabled: false,
  label: 'A button',
  onPress
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: secondary,
  label: 'A button',
  onPress
};

export const Loading = Template.bind({});
Loading.args = {
  color: secondary,
  label: 'A button',
  loading: true,
  onPress
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: secondary,
  label: 'A button',
  disabled: true,
  onPress
};