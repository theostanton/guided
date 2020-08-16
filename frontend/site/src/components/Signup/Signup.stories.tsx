import React from 'react'
import Signup, {State} from "./index";
import {Story} from "@storybook/react";
import {sleep} from "utils";


export default {
  title: 'Authentication/Signup',
  argTypes: {
    loading: {
      control: 'boolean'
    },
    email: {
      control: 'text'
    },
    username: {
      control: 'text'
    },
    password: {
      control: 'text'
    },
    error: {
      control: 'text'
    },
    'Signup Success': {
      control: 'boolean',
    },
    'Signup Message': {
      control: 'text'
    }
  }
}

type Args = State & {
  'Signup Success'?: boolean,
  'Signup Message'?: string,
}

const Template: Story<Args> = (args: Args) => <Signup
  initialState={args}
  signup={async () => {
    await sleep(2000)
    return {success: args['Signup Success'] || false, message: args['Signup Message']}
  }
  }/>

function generate(state: State | undefined, signupResponse?: { success: boolean, message: string }): Story<Args> {
  const Story = Template.bind({})
  Story.args = {
    ...state,
    'Signup Success': signupResponse?.success,
    'Signup Message': signupResponse?.message,
  }
  return Story
}

export const Success = generate({
  loading: false,
  username: 'user',
  password: 'password',
  email: '1@email.com',
  error: undefined
}, {success: true, message: "Logged in"})

export const Failure = generate({
  loading: false,
  username: 'user',
  password: 'password',
  email: '1@email.com',
  error: undefined
}, {success: false, message: "Some error"})

export const Loading = generate({
  loading: true,
  username: 'user',
  password: 'password',
  email: '1@email.com',
  error: undefined
})

export const Error = generate({
  loading: false,
  username: 'user',
  password: 'password',
  email: '1@email.com',
  error: 'Some error'
})