import { log, logJson } from '@guided/logger'
import { ExtensionDefinition } from 'graphile-utils/node8plus/makeExtendSchemaPlugin'
import { MutationMoveSpotArgs } from 'generated'
import { database, Spot } from '@guided/database'
import { executeSequentially } from '@guided/utils'

import { gql, makeExtendSchemaPlugin } from 'graphile-utils'

export async function execute(spotId: string): Promise<Partial<Spot>> {
    const { locked } = await database.one<{ locked: boolean }>(
        `SELECT locked
       from spots
       where id = $1`,
        [spotId]
    )

    if (!locked) {
        throw new Error('Can only remove locked spots')
    }

    const stages = await database.manyOrNone<{ stageId: string }>(
        `SELECT id as "stageId"
       from stages
       where to_spot = $1
          or from_spot = $1`,
        [spotId]
    )

    await executeSequentially(
        stages,
        async ({ stageId }: { stageId: string }) => {
            log(`Deleting info for ${stageId}`)
            const deletedRides = await database.manyOrNone(
                `DELETE
           from rides
           where stage = $1
           returning id`,
                [stageId]
            )
            logJson(deletedRides, `deletedRides for stageId=${stageId}`)

            const deletedStages = await database.manyOrNone(
                `DELETE
           from stages
           where id = $1
           returning id`,
                [stageId]
            )
            logJson(deletedStages, `deletedStages for stageId=${stageId}`)

            const deletedSpots = await database.manyOrNone(
                `DELETE
           from spots
           where stage = $1
           returning id`,
                [stageId]
            )
            logJson(deletedSpots, `deletedSpots for stageId=${stageId}`)
            log(`Done deleting info for ${stageId}`)
        }
    )

    log(`Deleting spot spotId=${spotId}`)
    await database.none(
        `DELETE
       from spots
       where id = $1`,
        [spotId]
    )

    //TODO
    // await computeStage.execute({
    //   stageId: guideId,
    // })

    return {
        id: spotId,
    }
}

async function removeSpot(
    _: any,
    args: MutationMoveSpotArgs
): Promise<Partial<Spot>> {
    logJson(args, 'removeSpot args')
    const { spotId } = args

    return execute(spotId)
}

const generator: ExtensionDefinition = {
    typeDefs: gql`
        extend type Mutation {
            removeSpot(spotId: String!): Spot!
        }
    `,
    resolvers: {
        Mutation: {
            removeSpot,
        },
    },
}

export default makeExtendSchemaPlugin(generator)
