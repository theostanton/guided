import faker from 'faker'
import { database } from '@guided/database'
import { UserBuilder } from './index'
import { spinup } from '../index'
import { logJson } from '@guided/logger'

describe('Start date handling', () => {
    const owner: string = faker.internet.userName()
    const GUIDE_TITLE: string = faker.random.words(3)
    const START_YEAR = 2019
    const START_MONTH = 8
    const START_DATE = 1
    let guideId: string

    beforeAll(async () => {
        const contents = UserBuilder.create(faker.internet.email(), owner)
            .addGuide(GUIDE_TITLE, (builder) => {
                guideId = builder.guideId
                builder.withStartDate(START_YEAR, START_MONTH, START_DATE)
            })
            .build()
        await spinup(contents)
    })

    it('Should return same date as provided', async () => {
        const guide = await database.selectGuide(guideId)
        logJson(guide.id, 'guide.id')
        expect(guide.title).toBe(GUIDE_TITLE)
        expect(guide.start_date!).toBe('2019-08-01')
    })
})
