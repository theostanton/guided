import { log, logJson } from '@guided/logger'
import action from './action'

export async function handler(_event: any, _context: any) {
    log('handler!')
    logJson(_event, '_event')
    logJson(_context, '_context')
    const computationId = _event['Records'][0]['body']
    logJson(computationId, 'computationId')
    await action({
        computationId,
    })
}
