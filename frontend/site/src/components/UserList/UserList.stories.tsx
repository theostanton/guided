import React from 'react';
import {Story} from "@storybook/react";
import UserList, {Props} from './.'
import {ProfileUserFragment} from "../../api/generated";

export default {
  title: 'UserList',
  component: UserList,
  argTypes: {}
}

const Template: Story<Props> = (args: Props) => <UserList {...args}/>

export const Basic = Template.bind({})

Basic.args = {
  // @ts-ignore
  users: [
    {
      username: 'theo',
      guidesByOwner: {
        totalCount: 0,
      },
      distanceMeters: 0,
      followers: {
        totalCount: 0
      },
      following: {
        totalCount: 0
      }
    },
    {
      username: 'john',
      guidesByOwner: {
        totalCount: 1,
      },
      distanceMeters: 3500,
      followers: {
        totalCount: 12
      },
      following: {
        totalCount: 32
      }
    },
  ] as Partial<ProfileUserFragment>[]
}