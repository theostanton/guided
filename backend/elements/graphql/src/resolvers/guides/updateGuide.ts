import { gql } from 'graphile-utils'
import { Mutation, MutationResult } from '../Resolver'
import { Context } from 'model/context'
import access from './access'
import performUpdateGuide from '../../actions/guides/update'
import { MutationUpdateGuideArgs, UpdateGuideResult } from 'generated'
import { DENIED, NOT_LOGGED_IN } from '../utils/messages'

export default class UpdateGuideMutation extends Mutation<
    MutationUpdateGuideArgs,
    MutationResult
> {
    name = 'updateGuide'
    typeDefs = gql`
        input UpdateGuidePatch {
            id: String!
            title: String
            startDate: String
            isCircular: Boolean
            maxHoursPerRide: Int
            type: TransportType
        }
        type UpdateGuideResult {
            success: Boolean!
            message: String
            id: String
            triggeredDates: Boolean
            triggeredComputations: Boolean
        }
        extend type Mutation {
            updateGuide(input: UpdateGuidePatch): UpdateGuideResult!
        }
    `

    async resolver(
        args: MutationUpdateGuideArgs,
        context: Context
    ): Promise<UpdateGuideResult> {
        const { id: previousId } = args.input!

        switch (await access(context, previousId)) {
            case 'read':
            case 'denied':
                return {
                    success: false,
                    message: DENIED,
                }
            case 'notLoggedIn':
                return {
                    success: false,
                    message: NOT_LOGGED_IN,
                }
        }

        return performUpdateGuide(args.input!)
    }
}
