import { PluginProvider } from "./Resolver"
import { makeExtendSchemaPlugin } from "postgraphile"
import RootResolver from "./root"
import FollowsResolvers from "./follows"
import GuideResolvers from "./guides"

const providers: PluginProvider[] = [
  new RootResolver(),
  new GuideResolvers(),
  new FollowsResolvers(),
]

export default providers.map(provider => {
  return makeExtendSchemaPlugin(provider.plugin())
})