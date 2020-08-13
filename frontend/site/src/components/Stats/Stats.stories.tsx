import React from 'react';
import {Story} from "@storybook/react";
import Stats, {Props} from "./.";

export default {
  title: 'Stats',
  component: Stats,
  argTypes: {},
};

const Template: Story<Props> = (args: Props) => <Stats {...args} />;

export const Single = Template.bind({})

Single.args = {
  stats: [{
    label: 'A label',
    value: 'A value'
  }]
}

export const Triple = Template.bind({})

Triple.args = {
  stats: [{
    label: 'A label',
    value: 'A value'
  }, {
    label: 'A second label',
    value: 'A value'
  }, {
    label: 'A third label',
    value: 333
  }, {
    label: 'A Fourther label',
    value: 444
  },
  ]
}
