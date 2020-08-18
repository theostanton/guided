import React from 'react';
import FeedItem from "./index";
import {Story} from "@storybook/react";
import {ANNECY, SEYTHENEX} from "components/Map/consts";
import {FeedEvent} from "../FeedEvent";
import {FeedEventType} from "api/generated";

export default {
  title: 'FeedItem',
  component: FeedItem,
  argTypes: {
    timestamp: {
      control: 'date'
    }
  },
};

type Args = {
  timestamp: string
  event: Exclude<FeedEvent, 'timestamp'>,
}

const Template: Story<Args> = (args: Args) => {
  return <FeedItem event={{
    ...args.event,
    timestamp: args.timestamp
  }
  }/>;
}

function generate(args: Args): Story<Args> {
  const story = Template.bind({})
  story.args = {
    ...args,
    timestamp: args.timestamp
  }
  return story
}

export const Joined = generate({
  timestamp: new Date().toISOString(),
  event: {
    type: FeedEventType.Joined,
    user: {
      username: 'theo'
    }
  }
})

export const SelfCreated = generate({
    timestamp: new Date().toISOString(),
    event: {
      type: FeedEventType.SelfCreated,
    }
  }
)


export const NewGuide = generate({
  timestamp: new Date().toISOString(),
  event: {
    type: FeedEventType.NewGuide,
    guide: {
      title: 'A guide',
      owner: 'theo',
      countries: ['FR', 'GB', 'ES'],
      spots: {
        totalCount: 2,
        nodes: [{
          id: 'someId',
          created: new Date().toISOString(),
          lat: SEYTHENEX.latitude,
          long: SEYTHENEX.longitude
        }, {
          id: 'someOtherId',
          created: new Date().toISOString(),
          lat: ANNECY.latitude,
          long: ANNECY.longitude
        },
        ]
      },
      rides: {
        totalCount: 0,
        nodes: []
      },
    }
  }
})


export const NewFollows = generate({
  timestamp: new Date().toISOString(),
  event: {
    type: FeedEventType.NewFollows,
    user: {
      username: 'john'
    }
  }
});
