import sequence from '../sequence'
import { log } from '@guided/logger'

export default async function (): Promise<void> {
    log('creating fresh')
    await sequence('roles')
    await sequence('create')
    await sequence('privileges')
}
