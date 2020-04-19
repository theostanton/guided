import { AnySimplerResolver, ResolverGroup } from "../Resolver"
import FollowUser from "./followUser"
import UnfollowUser from "./unfollowUser"

export default class FollowsResolvers extends ResolverGroup {
  resolvers(): AnySimplerResolver[] {
    return [
      new FollowUser(),
      new UnfollowUser(),
    ]
  }
}