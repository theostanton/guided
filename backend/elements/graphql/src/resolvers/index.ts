import { PluginProvider } from './Resolver'
import { makeExtendSchemaPlugin } from 'postgraphile'
import RootResolver from './root'
import FollowsResolvers from './follows'
import GuideResolvers from './guides'
import SpotsResolvers from './spots'

const providers: PluginProvider[] = [
    new RootResolver(),
    new GuideResolvers(),
    new FollowsResolvers(),
    new SpotsResolvers(),
]

export default providers.map((provider) => {
    return makeExtendSchemaPlugin(provider.plugin())
})
