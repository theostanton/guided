import faker from 'faker'
import { spinup, UserBuilder } from '@guided/spinup'
import create from './create'
import {
    CreateGuideResult,
    TransportType,
    UpdateGuideResult,
} from '../../generated'
import update from './update'
import { database, Guide } from '@guided/database'
import { logJson } from '@guided/logger'

const USERNAME: string = faker.internet.userName()
const EMAIL: string = faker.internet.email()

beforeAll(async () => {
    const contents = UserBuilder.create(EMAIL, USERNAME).build()

    await spinup(contents)
})

describe('When updating a guides title', () => {
    const TITLE = 'My original title'
    const NEW_TITLE = 'My updated title'
    const IS_CIRCULAR = true
    const TRANSPORT_TYPE: TransportType = TransportType.Motorcycle
    const MAX_HOURS_PER_RIDE = 7

    let createGuideResult: CreateGuideResult
    let updateGuideResult: UpdateGuideResult

    beforeAll(async () => {
        createGuideResult = await create(
            {
                type: TRANSPORT_TYPE,
                title: TITLE,
                maxHoursPerRide: MAX_HOURS_PER_RIDE,
                isCircular: IS_CIRCULAR,
            },
            USERNAME
        )

        updateGuideResult = await update({
            id: createGuideResult.guideId!,
            title: NEW_TITLE,
        })
    })

    it('Should have created original', async () => {
        expect(createGuideResult.success).toBe(true)
        expect(createGuideResult.guideId).toBeDefined()
        expect(createGuideResult.guideId).toBe(`${USERNAME}_my-original-title`)

        const resultForQueryingOldId = await database.oneOrNone<Guide>(
            'select * from guides where id=$1',
            [createGuideResult.guideId]
        )
        expect(resultForQueryingOldId).toBeNull()
    })

    it('Should have succeeded', () => {
        expect(updateGuideResult.success).toBe(true)
        expect(updateGuideResult.id).toBeDefined()
        expect(updateGuideResult.id).not.toBe(createGuideResult.guideId)
        expect(updateGuideResult.id).toBe(`${USERNAME}_my-updated-title`)
    })

    it('Should have updated the guide', async () => {
        const updatedGuide = await database.selectGuide(updateGuideResult.id!)

        expect(updatedGuide.title).toBe(NEW_TITLE)
        expect(updatedGuide.slug).toBe('my-updated-title')
        expect(updatedGuide.updated).toBeDefined()
        expect(updatedGuide.updated.getTime()).toBeLessThan(
            new Date().getTime()
        )
    })
})

describe('When updating a guides type and isCircular', () => {
    const TITLE = faker.random.words(3)
    const IS_CIRCULAR_BEFORE = true
    const IS_CIRCULAR_AFTER = false
    const TRANSPORT_TYPE_BEFORE: TransportType = TransportType.Motorcycle
    const TRANSPORT_TYPE_AFTER: TransportType = TransportType.Car
    const MAX_HOURS_PER_RIDE = 7

    let createGuideResult: CreateGuideResult
    let updateGuideResult: UpdateGuideResult

    beforeAll(async () => {
        createGuideResult = await create(
            {
                type: TRANSPORT_TYPE_BEFORE,
                title: TITLE,
                maxHoursPerRide: MAX_HOURS_PER_RIDE,
                isCircular: IS_CIRCULAR_BEFORE,
            },
            USERNAME
        )

        updateGuideResult = await update({
            id: createGuideResult.guideId!,
            title: TITLE,
            isCircular: IS_CIRCULAR_AFTER,
            type: TRANSPORT_TYPE_AFTER,
        })

        logJson(updateGuideResult, 'updateGuideResult')
    })

    it('Should have created original', async () => {
        expect(createGuideResult.success).toBe(true)
        expect(createGuideResult.guideId).toBeDefined()

        const resultForQueryingOldId = await database.oneOrNone<Guide>(
            'select * from guides where id=$1',
            [createGuideResult.guideId]
        )
        expect(resultForQueryingOldId).toBeDefined()
    })

    it('Should have succeeded', () => {
        expect(updateGuideResult.success).toBe(true)
        expect(updateGuideResult.id).toBeDefined()
    })

    it('Should have updated isCircular', async () => {
        const updatedGuide = await database.selectGuide(updateGuideResult.id!)

        expect(updatedGuide.title).toBe(TITLE)
        expect(updatedGuide.is_circular).not.toBe(IS_CIRCULAR_BEFORE)
        expect(updatedGuide.is_circular).toBe(IS_CIRCULAR_AFTER)
        expect(updatedGuide.transport_type).not.toBe(TRANSPORT_TYPE_BEFORE)
        expect(updatedGuide.transport_type).toBe(TRANSPORT_TYPE_AFTER)
        expect(updatedGuide.updated).toBeDefined()
        expect(updatedGuide.updated.getTime()).toBeLessThan(
            new Date().getTime()
        )
    })
})
