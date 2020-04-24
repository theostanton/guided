import executeConcurrently from './executeConcurrently'
import executeWithContext from './executeWithContext'
import executeSequentially from './executeSequentially'
import * as Constants from './constants'
import { dateString } from './dates'

export {
    executeSequentially,
    executeWithContext,
    executeConcurrently,
    dateString,
    Constants,
}

export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
