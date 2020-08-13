// Button.stories.ts

import React from 'react';
import Button, {Props} from '.';
import {primary, secondary} from "styles/colors";
import {Story} from "@storybook/react";

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {control: 'color'},
  },
};

const Template: Story<Props> = (args: Props) => <Button {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  color: primary,
  disabled: false,
  label: 'A button',
  onPress: () => {
    console.log('onPress')
  }
};
export const Secondary = Template.bind({});

Secondary.args = {
  color: secondary,
  label: 'A button',
  onPress: () => {
    console.log('onPress')
  }
};