import sequence from '../sequence'
import { log } from '@guided/logger'

export default async function (): Promise<void> {
    log('privilaging')
    await sequence('privilages')
}
