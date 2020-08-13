import React from 'react';
import FeedItem, {Props} from "./index";
import {Story} from "@storybook/react";

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
    timestamp: new Date().toISOString(),
    user: {
      username: 'theo'
    }
  }
};

export const SelfCreated = Template.bind({});

SelfCreated.args = {
  event: {
    type: 'SELF_CREATED',
    timestamp: new Date().toISOString()
  }
};


export const NewGuide = Template.bind({});

NewGuide.args = {
  event: {
    type: 'NEW_GUIDE',
    timestamp: new Date().toISOString(),
    user: {
      username: 'theo'
    },
    guide: {
      title: 'A guide',
      spots: {
        nodes: [{
          lat: 0.0,
          long: 0.0
        }, {
          lat: 0.1,
          long: 0.1
        },
        ]
      },
      rides: {
        nodes: []
      },
    }
  }
};


export const NewFollows = Template.bind({});

NewFollows.args = {
  event: {
    type: 'NEW_FOLLOWS',
    timestamp: new Date().toISOString(),
    user: {
      username: 'john'
    }
  }
};
