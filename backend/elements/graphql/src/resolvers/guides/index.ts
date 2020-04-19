import { AnyResolver, AnySimplerResolver, ResolverGroup } from "../Resolver"
import UpdateGuideMutation from "./updateGuide"
import DeleteGuideMutation from "./deleteGuide"
import CreateGuideMutation from "./createGuide"

export default class GuideResolvers extends ResolverGroup {
  resolvers(): (AnyResolver | AnySimplerResolver)[] {
    return [
      new CreateGuideMutation(),
      new UpdateGuideMutation(),
      new DeleteGuideMutation(),
    ]
  }
}