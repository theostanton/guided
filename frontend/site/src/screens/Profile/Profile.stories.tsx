import React from 'react'

import ProfileContent from './ProfileContent'
import {Meta, Story} from "@storybook/react";
import {Provider} from "mobx-react";
import FollowingStore from "stores/FollowingStore";
import {GuideFragment} from "api/generated";

export default {
  title: 'Profile',
  argTypes: {
    isSelf: {
      control: 'boolean',
      name:'Is self'
    },
    isFollowing: {
      control: 'boolean',
      name:'Is following'
    },
    username: {
      control: 'text'
    },
    followingCount: {
      control: 'number'
    },
    followerCount: {
      control: 'number'
    },
    durationSeconds: {
      control: 'number'
    },
    distanceMeters: {
      control: 'number'
    },
    created: {
      control: 'date'
    },
    countries: {
      control: 'array'
    },
    guides: {
      control: 'array'
    }
  }
} as Meta<Args>

type Args = {
  isSelf: boolean,
  isFollowing: boolean,
  username: string,
  followingCount: number,
  followerCount: number,
  durationSeconds: number,
  distanceMeters: number,
  created: Date
  countries: string[]
  guides: readonly GuideFragment[]
}


function generate(args: Args): Story<Args> {

  const followingStore = new FollowingStore()
  if (args.isFollowing) {
    // @ts-ignore
    followingStore.following = [{username: args.username}]
  } else {
    followingStore.following = []
  }

  const Template: Story<Args> = (args: Args) => <Provider
    followingStore={followingStore}>
    <ProfileContent {...{
      isSelf: args.isSelf,
      user: {
        username: args.username,
        created: args.created.toISOString(),
        countries: args.countries,
        followers: {
          totalCount: args.followerCount
        },
        following: {
          totalCount: args.followingCount
        },
        distanceMeters: args.distanceMeters,
        durationSeconds: args.durationSeconds,
        guidesByOwner: {
          totalCount: args.guides.length
        }
      },
      guides: args.guides
    }}/>
  </Provider>

  const story = Template.bind({})
  story.args = args
  return story
}

export const Basic = generate({
  username: 'theo',
  followingCount: 0,
  followerCount: 0,
  created: new Date(),
  countries: [],
  distanceMeters: 0,
  durationSeconds: 0,
  guides: [],
  isSelf: false,
  isFollowing: false
})