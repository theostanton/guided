import { config } from 'dotenv'

config({
    path: '../../.env',
})

import { end } from '@guided/database'
import commandLineArgs, { OptionDefinition } from 'command-line-args'
import { Action } from './index'
import execute from './.'

const optionDefinitions: OptionDefinition[] = [
    { name: 'action', defaultOption: true, type: String },
]

type Options = {
    action: Action;
}

const options: Options = commandLineArgs(optionDefinitions) as Options

execute(options.action).then(end)
