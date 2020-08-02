import { Mutation, MutationResult } from '../Resolver'
import { gql } from 'graphile-utils'
import { Context } from 'model/context'
import { logJson } from '@guided/logger'
import performRemoveSpot from '../../actions/spots/remove'
import { MutationRemoveSpotArgs } from '@guided/database/srv/generated'
import { RemoveSpotInput } from '../../generated'

export default class RemoveSpotMutation extends Mutation<
    { input: RemoveSpotInput },
    MutationResult
> {
    name = 'removeSpot'
    typeDefs = gql`
        input RemoveSpotInput {
            id: String!
        }
        type RemoveSpotResult {
            success: Boolean!
            message: String
        }

        extend type Mutation {
            removeSpot(input: RemoveSpotInput!): RemoveSpotResult!
        }
    `

    async resolver(
        args: { input: RemoveSpotInput },
        context: Context
    ): Promise<MutationResult> {
        logJson(args, 'removeSpot args')
        return performRemoveSpot(args.input.id)
    }
}
