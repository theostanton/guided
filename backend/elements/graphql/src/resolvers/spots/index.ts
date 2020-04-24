import { AnyResolver, AnySimplerResolver, ResolverGroup } from '../Resolver'
import AddSpotMutation from './add'
import RemoveSpotMutation from './remove'
import UpdateSpotMutation from './update'

export default class SpotsResolvers extends ResolverGroup {
    resolvers(): (AnyResolver | AnySimplerResolver)[] {
        return [
            new AddSpotMutation(),
            new UpdateSpotMutation(),
            new RemoveSpotMutation(),
        ]
    }
}
