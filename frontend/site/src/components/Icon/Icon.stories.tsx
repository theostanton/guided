import React from 'react'
import Icon, {Props} from "./.";
import {Meta, Story} from "@storybook/react";
import {Names} from "./names";


export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    color: {
      control: 'color'
    },
    size: {
      control: 'number',
      name: 'Size',
    },
    name: {
      control: {
        type: 'select',
        options: Object.keys(Names)
      },
    }

  }
} as Meta

const Template: Story<Props> = (args: Props) => <Icon {...args}/>

export const Basic = Template.bind({})

Basic.args = {
  name: 'access-alarm'
}

export const All = (args: Props) => <div>{Object.keys(Names).map(name => {
  return <div key={name}>{name}<Icon {...args} size={args.size || 50} name={name}/><br/></div>
})}</div>

All.args = {}