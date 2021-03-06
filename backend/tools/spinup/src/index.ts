import { logJson } from '@guided/logger'
import create from './create'
import roles from './roles'
import truncate from './truncate'
import privileges from './privileges'
import populate from './populate'
import drop from './drop'
import fresh from './fresh'
import load_temperatures from './load_temperatures'
import spinup from './spinup'
import createAll from './createAll'
import { Contents, UserBuilder } from './builder'

logJson(__dirname, '__dirname')

export { spinup, Contents, UserBuilder }

export type Action =
    | 'create'
    | 'truncate'
    | 'fresh'
    | 'privileges'
    | 'populate'
    | 'drop'
    | 'load_temperatures'
    | 'roles'
    | 'createAll'

export const actions: { [action in Action]: () => Promise<void> } = {
    create,
    truncate,
    privileges,
    populate,
    drop,
    fresh,
    load_temperatures,
    roles,
    createAll,
}

export default async function (action: Action): Promise<void> {
    if (action in actions) {
        await actions[action]()
    } else {
        throw new Error(`${action} is not a valid action`)
    }
}
