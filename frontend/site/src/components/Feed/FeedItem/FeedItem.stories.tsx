import React from 'react';
import FeedItem, {Props} from "./index";
import {Story} from "@storybook/react";
import {ANNECY, SEYTHENEX} from "../../Map/consts";

export default {
  title: 'FeedItem',
  component: FeedItem,
  argTypes: {},
};

const Template: Story<Props> = (args: Props) => {
  return <FeedItem {...args} />;
}

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
          lat: SEYTHENEX.latitude,
          long: SEYTHENEX.longitude
        }, {
          lat: ANNECY.latitude,
          long: ANNECY.longitude
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
