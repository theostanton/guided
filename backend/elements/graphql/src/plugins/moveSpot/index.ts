import { logJson } from '@guided/logger'
import { ExtensionDefinition } from 'graphile-utils/node8plus/makeExtendSchemaPlugin'
import { MutationMoveSpotArgs } from 'generated'
import { database, generateId, Spot } from '@guided/database'
import { getInfo } from '@guided/google'
import * as computeStage from '@guided/compute'
import { Packet } from '@guided/compute'

import { gql, makeExtendSchemaPlugin } from 'graphile-utils'

export async function prepare(
    args: MutationMoveSpotArgs
): Promise<{
    newId: string;
    packet: Packet;
}> {
    const { label: location, countryCode: country } = await getInfo(
        args.lat,
        args.long
    )

    await database.none(
        `delete
                       from stages
                       where $1 in (to_spot, from_spot)`,
        [args.spotId]
    )

    const guide = await database.getGuideIdForSpot(args.spotId)

    const newId = generateId('spot')

    await database.none(
        `
      update spots
      set id=$1,
          lat=$2,
          long=$3,
          location=$4,
          country=$5,
          stage=null,
          locked = true,
          updated=$6
      where id = $7
  `,
        [newId, args.lat, args.long, location, country, new Date(), args.spotId]
    )

    const packet = await computeStage.prepare(guide)
    return {
        packet,
        newId,
    }
}

export async function moveSpot(
    _: any,
    args: MutationMoveSpotArgs
): Promise<Partial<Spot>> {
    logJson(args, 'moveSpot args')

    const { newId, packet } = await prepare(args)

    await computeStage.trigger(packet)

    return {
        id: newId,
    }
}

const generator: ExtensionDefinition = {
    typeDefs: gql`
        extend type Mutation {
            moveSpot(spotId: String!, lat: Float!, long: Float!): Spot!
        }
    `,
    resolvers: {
        Mutation: {
            moveSpot,
        },
    },
}

export default makeExtendSchemaPlugin(generator)
