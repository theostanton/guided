import { PluginProvider } from "./Resolver"
import GuideResolvers from "./guides"
import { makeExtendSchemaPlugin } from "postgraphile"
import RootResolver from "./root"
import FollowsResolvers from "./follows"

const providers: PluginProvider[] = [
  new RootResolver(),
  new GuideResolvers(),
  new FollowsResolvers(),
]

export default providers.map(provider => {
  return makeExtendSchemaPlugin(provider.plugin())
})