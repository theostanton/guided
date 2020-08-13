import FeedItem, {Props} from "./index";
import {Story} from "@storybook/react";
import React from "react";

export default {
  title: 'FeedItem',
  component: FeedItem,
  argTypes: {},
};

const Template: Story<Props> = (args: Props) => <FeedItem {...args} />;

export const Joined = Template.bind({});

Joined.args = {
  event: {
    type: 'JOINED',
    timestamp: new Date().toISOString()
  }
};
