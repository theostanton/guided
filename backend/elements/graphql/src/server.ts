//TODO env pathh and mode as env vars
import { config } from 'dotenv'

if (process.env.NODE_ENV === 'development') {
    config({
        path: `../../.env`,
    })
} else {
    require('dotenv').config({
        path: `.env`,
    })
}

import { log } from '@guided/logger'
import app from './app'

log(process.env.APP_VERSION!, 'Starting server')

if (!process.env.STAGE) {
    throw new Error('ENVS error. No STAGE')
}

process.env.DEBUG = 'graphile-build-pg:warn'
app(process.env.NODE_ENV === 'development' ? 'watch' : 'serve').listen(
    process.env.POSTGRAPHILE_PORT!
)
log(`Listening on ${process.env.POSTGRAPHILE_PORT}`)
