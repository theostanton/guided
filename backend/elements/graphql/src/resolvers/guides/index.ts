import { AnyResolver, ResolverGroup } from '../Resolver'
import CreateGuideMutation from './createGuide'
import UpdateGuideMutation from './updateGuide'
import DeleteGuideMutation from './deleteGuide'

export default class GuideResolvers extends ResolverGroup {
    resolvers(): AnyResolver[] {
        return [
            new CreateGuideMutation(),
            new UpdateGuideMutation(),
            new DeleteGuideMutation(),
        ]
    }
}
