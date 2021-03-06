import { database } from '@guided/database'
import { executeFile } from '../sequence'

// beforeAll(dropTables)

xdescribe('Drop individually', () => {
    it('Drop functions', async () => {
        await executeFile('src/drop/1.functions.sql')
        expect(true).toBe(true)
    })

    it('Drop tables', async () => {
        await executeFile('src/drop/2.tables.sql')
        const { countAfter } = await database.one<{
            countAfter: number;
        }>(`SELECT count(1) as "countAfter"
                                                                       FROM information_schema.tables
                                                                       WHERE table_schema = 'guided'`)
    })

    it('Drop roles', async () => {
        await executeFile('src/drop/3.roles.sql')
    })

    it('Drop rest', async () => {
        await executeFile('src/drop/4.rest.sql')
    })
})
