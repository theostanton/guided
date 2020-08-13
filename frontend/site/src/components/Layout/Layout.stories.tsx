import React from 'react'
import Layout, {Props} from './.'
import {Story} from "@storybook/react";
import {secondary} from "styles/colors";
import AuthStore from "stores/AuthStore";

export default {
  title: 'Layout',
  component: Layout
}

const Template: Story<Props> = (args: Props) => <Layout {...args}>
  <div style={{backgroundColor: secondary}}>Content</div>
</Layout>

export const Unauthed = Template.bind({})

Unauthed.args = {
  authStore: new AuthStore()
}

export const Authed = Template.bind({})

const authedAuthStore = new AuthStore()
authedAuthStore.user = {
  username: 'theo',
  bearerToken: 'some_token',
  email: 'theo@email.com'
}

Authed.args = {
  authStore: authedAuthStore
}