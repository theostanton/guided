import { AnyResolver, AnySimplerResolver, ResolverGroup } from "../Resolver"
import AddSpotMutation from "./addSpot"

export default class SpotsResolvers extends ResolverGroup {
  resolvers(): (AnyResolver | AnySimplerResolver)[] {
    return [
      new AddSpotMutation(),
    ]
  }
}