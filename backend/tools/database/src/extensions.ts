import { IDatabase } from 'pg-promise'
import { Guide, Ride, Spot, Stage } from './types'
import { insertMany, insertOne, updateMany, updateOne } from './utils'

type ItemId = { id: string }

export type Table =
    | 'stages'
    | 'rides'
    | 'spots'
    | 'computations'
    | 'users'
    | 'guides'

export type Patch<T> = Partial<T> & { id: string }

export default interface Extensions {
    insertSpot(spot: Spot): Promise<string>;

    selectGuide(guideId: string): Promise<Guide>;

    selectSpot(spotId: string): Promise<Spot>;

    selectRide(rideId: string): Promise<Ride>;

    selectSpotsForGuide(guideId: string): Promise<Spot[]>;

    selectRidesForGuide(guideId: string): Promise<Ride[]>;

    selectStagesForGuide(guideId: string): Promise<Stage[]>;

    getGuideIdForSpot(spotId: string): Promise<string>;

    insertOne<T>(table: Table, items: T): Promise<ItemId>;

    insertMany<T>(table: Table, items: T[]): Promise<ItemId[]>;

    updateOne<T>(table: Table, item: Patch<T>): Promise<ItemId>;

    updateMany<T>(table: Table, items: Patch<T>[]): Promise<ItemId[]>;
}

export function extend(db: IDatabase<Extensions> & Extensions) {
    const instance: Extensions = {
        async insertSpot(spot: Spot): Promise<string> {
            const query = insertOne('spots', spot)
            await db.query(query)
            return spot.id
        },
        selectGuide(guideId: string): Promise<Guide> {
            return db.one<Guide>(
                `SELECT *
                            from guides
                            where id = $1`,
                [guideId]
            )
        },
        selectSpot(spotId: string): Promise<Spot> {
            return db.one<Spot>(
                `SELECT *
                           from spots
                           where id = $1`,
                [spotId]
            )
        },
        selectRide(rideId: string): Promise<Ride> {
            return db.one<Ride>(
                `SELECT *
                           from rides
                           where id = $1`,
                [rideId]
            )
        },
        selectSpotsForGuide(guideId: string): Promise<Spot[]> {
            return db.manyOrNone<Spot>(
                `SELECT *
                                  from spots
                                  where guide = $1
                                  order by position`,
                [guideId]
            )
        },
        selectStagesForGuide(guideId: string): Promise<Stage[]> {
            return db.manyOrNone<Stage>(
                `SELECT *
                                   from stages
                                   where guide = $1
                                   order by position`,
                [guideId]
            )
        },
        selectRidesForGuide(guideId: string): Promise<Ride[]> {
            return db.manyOrNone<Ride>(
                `SELECT *
                                  from rides as r
                                  where r.guide = $1
                                  order by r.position`,
                [guideId]
            )
        },
        async getGuideIdForSpot(spotId: string): Promise<string> {
            const { guide } = await db.one<{ guide: string }>(
                `SELECT guide
                                                         from spots
                                                         where id = $1`,
                [spotId]
            )
            return guide
        },

        async insertOne<T>(table: Table, item: T): Promise<ItemId> {
            const results = await this.insertMany(table, [item])
            return results[0]
        },

        async insertMany<T>(table: Table, items: T[]): Promise<ItemId[]> {
            if (items.length === 0) {
                return []
            }

            items = items.map((item) => {
                return {
                    ...item,
                    created: new Date(),
                }
            })

            const query = insertMany(table, items, 'id')
            return db.many<{ id: string }>(query)
        },

        async updateOne<T>(table: Table, item: Patch<T>): Promise<ItemId> {
            const query = updateOne(table, item)
            return db.one<ItemId>(query)
        },

        async updateMany<T>(
            table: Table,
            items: Patch<T>[]
        ): Promise<ItemId[]> {
            if (items.length === 0) {
                return []
            }

            items = items.map((item) => {
                return {
                    ...item,
                    updated: new Date(),
                }
            })

            const query = updateMany(
                table,
                items,
                Object.keys(items[0]),
                'id',
                undefined
            )
            return db.many<ItemId>(query)
        },
    }
    Object.keys(instance).forEach((key) => {
        // @ts-ignore
        db[key] = instance[key]
    })
}
