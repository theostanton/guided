import updateSpot, { MESSAGE_NO_SPOT } from './update'
import { UpdateSpotPatch, UpdateSpotResult } from '../../generated'
import { database, generateId, Ride, Stage } from '@guided/database'
import { spinup, UserBuilder } from '@guided/spinup'
import {
    LOCATIONS,
    MockLocation,
} from '@guided/spinup/srv/builder/GuideBuilder'
import { prepare, trigger } from '@guided/compute'
import faker from 'faker'
import { logJson } from '@guided/logger'

type BasicSpot = {
    id: string;
    label: string | undefined;
    location: MockLocation;
    nights: number;
}

type Initial = {
    guideId: string;
    spot1: BasicSpot;
    spot2: BasicSpot;
    spot3?: BasicSpot;
}

const START_DATE = '2019-06-01'

async function spinupSpots(
    isCircular = false,
    startDate: string | null = START_DATE,
    spotCount = 2
): Promise<Initial> {
    const spot1: BasicSpot = {
        id: generateId('spot'),
        label: 'Spot 1',
        location: 'Horsham',
        nights: 0,
    }
    const spot2: BasicSpot = {
        id: generateId('spot'),
        label: undefined,
        location: 'Worthing',
        nights: 1,
    }

    let spot3: BasicSpot | undefined

    const content = UserBuilder.create()
        .addGuide(faker.random.words(1), (builder) => {
            builder.startDate = startDate
            builder.isCircular = isCircular
            builder.nextSpotLocation(
                spot1.location,
                spot1.nights,
                spot1.id,
                spot1.label
            )
            builder.nextSpotLocation(
                spot2.location,
                spot2.nights,
                spot2.id,
                spot2.label
            )
            if (spotCount > 2) {
                spot3 = {
                    id: generateId('spot'),
                    label: 'Spot 3',
                    location: 'Brighton',
                    nights: 1,
                }
                builder.nextSpotLocation(
                    spot3.location,
                    spot3.nights,
                    spot3.id,
                    spot3.label
                )
            }
        })
        .build()

    await spinup(content)

    const guideId: string = content.guides[0].id
    const packet = await prepare(guideId!)
    await trigger(packet)

    return {
        guideId,
        spot1,
        spot2,
        spot3,
    }
}

describe('Provided with an invalid spotId', () => {
    let result: UpdateSpotResult

    beforeAll(async () => {
        const patch: UpdateSpotPatch = {
            id: generateId('spot'),
            nights: 1,
            label: 'unused',
        }
        result = await updateSpot(patch)
    })
    it('Should fail', async () => {
        expect(result.success).toBe(false)
        expect(result.message).toBe(MESSAGE_NO_SPOT)
    })
})

describe('When adding a label', () => {
    let initial: Initial
    let result: UpdateSpotResult

    beforeAll(async () => {
        initial = await spinupSpots()
        const patch: UpdateSpotPatch = {
            id: initial.spot2.id,
            label: 'New label',
        }
        result = await updateSpot(patch)
    })

    it('Should succeed', () => {
        expect(result.message).toBeUndefined()
        expect(result.success).toBe(true)
    })

    it('Should not trigger computations', () => {
        expect(result.triggeredComputations).toBe(false)
    })

    it('Should not trigger ammendDates', () => {
        expect(result.ammendedDates).toBe(false)
    })

    it('Should create label for Spot 1', async () => {
        const spot = await database.selectSpot(initial.spot2.id)
        expect(spot.label).toBe('New label')
    })
})

describe('When editing a label', () => {
    let initial: Initial
    let result: UpdateSpotResult

    beforeAll(async () => {
        initial = await spinupSpots()
        const patch: UpdateSpotPatch = {
            id: initial.spot1.id,
            label: 'New label',
        }
        result = await updateSpot(patch)
    })

    it('Should succeed', () => {
        expect(result.success).toBe(true)
    })

    it('Should not trigger computations', () => {
        expect(result.triggeredComputations).toBe(false)
    })

    it('Should not trigger ammendDates', () => {
        expect(result.ammendedDates).toBe(false)
    })

    it('Should edit label for Spot 1', async () => {
        const spot = await database.selectSpot(initial.spot1.id)
        expect(spot.label).toBe('New label')
    })
})

describe('When removing a label', () => {
    let initial: Initial
    let result: UpdateSpotResult

    beforeAll(async () => {
        initial = await spinupSpots(true)
        const patch: UpdateSpotPatch = {
            id: initial.spot1.id,
            label: null,
        }
        result = await updateSpot(patch)
    })

    it('Should succeed', () => {
        expect(result.message).toBeUndefined()
        expect(result.success).toBe(true)
    })

    it('Should not trigger computations', () => {
        expect(result.triggeredComputations).toBe(false)
    })

    it('Should not trigger ammendDates', () => {
        expect(result.ammendedDates).toBe(false)
    })

    it('Should remove label for Spot 1', async () => {
        const spot = await database.selectSpot(initial.spot1.id)
        expect(spot.label).toBeNull()
    })
})

describe('When setting nights to 3 on a circular guide', () => {
    let initial: Initial
    let result: UpdateSpotResult

    beforeAll(async () => {
        initial = await spinupSpots(true)
        const patch: UpdateSpotPatch = {
            id: initial.spot2.id,
            nights: 3,
        }
        result = await updateSpot(patch)
    })

    it('Should succeed', () => {
        expect(result.message).toBeUndefined()
        expect(result.success).toBe(true)
    })

    it('Should not trigger computations', () => {
        expect(result.triggeredComputations).toBe(false)
    })

    it('Should trigger ammendDates', () => {
        expect(result.ammendedDates).toBe(true)
    })

    it('Should ammend dates for each spot', async () => {
        const spot2 = await database.selectSpot(initial.spot2.id)
        expect(spot2.date).toBe('2019-06-01')

        const spot1 = await database.selectSpot(initial.spot1.id)
        expect(spot1.date).toBe('2019-06-04')
    })

    it('Should ammend dates for each ride', async () => {
        const rides = await database.manyOrNone(
            `select id
                                             from rides
                                             where guide = $1`,
            [initial.guideId]
        )
        expect(rides.length).toBe(2)

        const ride1 = await database.one<Ride>(
            `select *
                                            from rides
                                            where from_spot = $1`,
            [initial.spot1.id]
        )
        expect(ride1.date).toBe('2019-06-01')

        const ride2 = await database.one<Ride>(
            `select *
                                            from rides
                                            where from_spot = $1`,
            [initial.spot2.id]
        )
        expect(ride2.date).toBe('2019-06-04')
    })
})

describe('When setting nights to 3 on a non circular guide', () => {
    let initial: Initial
    let result: UpdateSpotResult

    beforeAll(async () => {
        initial = await spinupSpots(false)
        const patch: UpdateSpotPatch = {
            id: initial.spot2.id,
            nights: 3,
        }
        result = await updateSpot(patch)
    })

    it('Should succeed', () => {
        expect(result.message).toBeUndefined()
        expect(result.success).toBe(true)
    })

    it('Should not trigger computations', () => {
        expect(result.triggeredComputations).toBe(false)
    })

    it('Should trigger ammendDates', () => {
        expect(result.ammendedDates).toBe(true)
    })

    it('Should ammend dates for each spot', async () => {
        const spot1 = await database.selectSpot(initial.spot1.id)
        expect(spot1.date).toBeNull()

        const spot2 = await database.selectSpot(initial.spot2.id)
        expect(spot2.date).toBe('2019-06-01')
    })

    it('Should ammend dates for each ride', async () => {
        const rides = await database.manyOrNone(
            `select id
                                             from rides
                                             where guide = $1`,
            [initial.guideId]
        )
        expect(rides.length).toBe(1)

        const ride1 = await database.one<Ride>(
            `select *
                                            from rides
                                            where from_spot = $1`,
            [initial.spot1.id]
        )
        expect(ride1.date).toBe('2019-06-01')
    })
})

describe('When editing a spots location', () => {
    const LONDON = LOCATIONS['London']

    let initial: Initial
    let result: UpdateSpotResult
    let timeBefore: Date

    beforeAll(async () => {
        initial = await spinupSpots(true, START_DATE, 3)
        const patch: UpdateSpotPatch = {
            id: initial.spot3!.id,
            location: {
                long: LONDON.long,
                lat: LONDON.lat,
                location: 'London',
                country: 'GB',
            },
        }
        timeBefore = new Date()
        result = await updateSpot(patch)
    })

    it('Should succeed', () => {
        expect(result.message).toBeUndefined()
        expect(result.success).toBe(true)
    })

    it('Should trigger computations', () => {
        expect(result.triggeredComputations).toBe(true)
    })

    it('Should not trigger ammendDates', () => {
        expect(result.ammendedDates).toBe(false)
    })

    it('Should change spots location fields', async () => {
        const spot3 = await database.selectSpot(initial.spot3!.id)
        expect(spot3.location).toBe('London')
        expect(spot3.lat).toBe(LONDON.lat)
        expect(spot3.long).toBe(LONDON.long)
        expect(spot3.country).toBe('GB')
        expect(spot3.updated.getTime()).toBeGreaterThan(timeBefore.getTime())
    })

    it('Should stagnate 2 stages', async () => {
        const staleStages = await database.manyOrNone<Stage>(
            `select *
                                                          from stages
                                                          where guide = $1
                                                            and status = 'stale'`,
            [initial.guideId]
        )
        expect(staleStages.length).toBe(2)
    })

    it('Should have computed 2 new stages', async () => {
        const newStages = await database.manyOrNone<Stage>(
            `select *
                                                        from stages
                                                        where guide = $1
                                                          and status = 'ready'
                                                          and created > $2`,
            [initial.guideId, timeBefore]
        )
        expect(newStages.length).toBe(2)
    })

    it('Should have computed 5 stages total', async () => {
        const stages = await database.manyOrNone<Stage>(
            `select *
                                                     from stages
                                                     where guide = $1`,
            [initial.guideId]
        )
        logJson(stages, 'stages')
        expect(stages.length).toBe(5)
    })
})
