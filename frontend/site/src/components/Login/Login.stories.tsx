import React from 'react'
import Login, {State} from "./index";
import {Story} from "@storybook/react";
import {sleep} from "utils";


export default {
  title: 'Authentication/Login',
  argTypes: {
    loading: {
      control: 'boolean'
    },
    email: {
      control: 'text'
    },
    password: {
      control: 'text'
    },
    error: {
      control: 'text'
    },
    'Login Success': {
      control: 'boolean',
    },
    'Login Message': {
      control: 'text'
    }
  }
}

type Args = State & {
  'Login Success'?: boolean,
  'Login Message'?: string,
}

const Template: Story<Args> = (args: Args) => <Login
  initialState={args}
  login={async () => {
    await sleep(2000)
    return {success: args['Login Success'] || false, message: args['Login Message']}
  }
  }/>

function generate(state: State | undefined, loginResponse?: { success: boolean, message: string }): Story<Args> {
  const Story = Template.bind({})
  Story.args = {
    ...state,
    'Login Success': loginResponse?.success,
    'Login Message': loginResponse?.message,
  }
  return Story
}

export const Success = generate({
  loading: false,
  password: 'password',
  email: '1@email.com',
  error: undefined
}, {success: true, message: "Logged in"})

export const Failure = generate({
  loading: false,
  password: 'password',
  email: '1@email.com',
  error: undefined
}, {success: false, message: "Some error"})

export const Loading = generate({loading: true, password: 'password', email: '1@email.com', error: undefined})

export const Error = generate({loading: false, password: 'password', email: '1@email.com', error: 'Some error'})