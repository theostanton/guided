import {
    Computation,
    database,
    generateId,
    insertMany,
    Patch,
    updateMany,
    User,
} from './index'
import faker from 'faker'

const PASSWORD_HASH =
    '$2a$06$go2Lk1MKz.2iq6vH2IvsAep1Aera4IhKECd5KlNgyLjPIl2Gq.Xkq'

describe('insertOne / updateOne queries', () => {
    describe('Casting statuses', () => {
        it('Should handle computation_statuses', async () => {
            const guide = await database.one('select * from guides limit 1')

            const computation: Computation = {
                id: generateId('computation'),
                status: 'scheduled',
                created: new Date(),
                started: null,
                ended: null,
                guide: guide.id,
                stage: null,
                duration: null,
            }

            await database.insertOne('computations', computation)

            const insertedComputation = await database.one<Computation>(
                'select * from computations where id=$1',
                [computation.id]
            )

            expect(insertedComputation.status).toBe('scheduled')

            const patch: Patch<Computation> = {
                id: computation.id,
                status: 'failed',
            }

            const result = await database.updateOne('computations', patch)
            expect(result.id).toBe(computation.id)

            const updatedComputation = await database.one<Computation>(
                'select * from computations where id=$1',
                [computation.id]
            )

            expect(updatedComputation.status).toBe('failed')
        })
    })
})

describe('updateMany queries', () => {
    const TABLE_NAME = 'users'

    describe('Updates emails, matching on username', () => {
        const users: User[] = []
        for (let i = 0; i < 10; i++) {
            const firstName = faker.name.firstName()
            const lastName = faker.name.lastName()
            users.push({
                email: faker.internet.email(firstName, lastName),
                username: faker.internet.userName(firstName, lastName),
                password_hash: PASSWORD_HASH,
                created: new Date(),
                colour: null,
                updated: null, // TODO add to tests
            })
        }

        beforeAll(async () => {
            const insertUsers = insertMany(TABLE_NAME, users)
            await database.none(insertUsers)
        })

        it('For 0 items', () => {
            const query = updateMany(TABLE_NAME, [], ['email'], 'username')
            expect(query).toBe('')
        })

        it('For 1 item', async () => {
            const userBefore = users[0]
            userBefore.email = faker.internet.email()
            const updateQuery = updateMany(
                TABLE_NAME,
                [userBefore],
                ['email'],
                'username'
            )
            const results = await database.many<{ username: string }>(
                updateQuery
            )
            expect(results.length).toBe(1)
            expect(results[0].username).toBe(userBefore.username)
            const userAfter = await database.one<User>(
                'select * from users where username=$1',
                [userBefore.username]
            )
            expect(userAfter.email).toBe(userBefore.email)
        })

        it('For 3 items', async () => {
            const usersBefore = [users[1], users[2], users[3]]
            usersBefore[0].email = faker.internet.email()
            usersBefore[1].email = faker.internet.email()
            const updateQuery = updateMany(
                TABLE_NAME,
                usersBefore,
                ['email'],
                'username'
            )
            const results = await database.many<{ username: string }>(
                updateQuery
            )

            expect(results.length).toBe(3)
            expect(results[0].username).toBe(usersBefore[0].username)
            expect(results[1].username).toBe(usersBefore[1].username)
            expect(results[2].username).toBe(usersBefore[2].username)

            const user1After = await database.one<User>(
                'select * from users where username =$1',
                [usersBefore[0].username]
            )
            expect(user1After.email).toBe(usersBefore[0].email)

            const user2After = await database.one<User>(
                'select * from users where username =$1',
                [usersBefore[1].username]
            )
            expect(user2After.email).toBe(usersBefore[1].email)

            const user3After = await database.one<User>(
                'select * from users where username =$1',
                [usersBefore[2].username]
            )
            expect(user3After.email).toBe(usersBefore[2].email)
        })
    })

    describe('Updates username, matching on username', () => {
        const users: User[] = []
        for (let i = 0; i < 10; i++) {
            const firstName = faker.name.firstName()
            const lastName = faker.name.lastName()
            users.push({
                email: faker.internet.email(firstName, lastName),
                username: faker.internet.userName(firstName, lastName),
                password_hash: PASSWORD_HASH,
                created: new Date(),
                colour: null,
                updated: null,
            })
        }

        beforeAll(async () => {
            const insertUsers = insertMany(TABLE_NAME, users)
            await database.none(insertUsers)
        })

        it('For 0 items', () => {
            const query = updateMany(TABLE_NAME, [], ['username'], 'username')
            expect(query).toBe('')
        })

        it('For 1 item', async () => {
            const oldUser = users[0]
            const newUsername = faker.internet.userName()
            const newUser = {
                ...oldUser,
                username: newUsername,
            }
            const updateQuery = updateMany(
                TABLE_NAME,
                [newUser],
                ['username'],
                'username',
                oldUser.username
            )
            console.log(updateQuery)
            const result = await database.oneOrNone<{ username: string }>(
                updateQuery
            )
            expect(result).toBeDefined()
            expect(result!.username).toBe(newUsername)

            const user = await database.oneOrNone<User>(
                'select * from users where username=$1',
                [newUsername]
            )
            console.log(user)
            expect(user).toBeDefined()
            expect(user!.username).toBe(newUsername)
        })
    })
})
