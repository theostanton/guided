import { actions } from "./index"
import { database } from "@guided/database"

// language=PostgreSQL
const checkCounts = `
    with counts as (
        select *
        from (select count(1) as count from users) as u
        union
        select *
        from (select count(1) as count from guides) as g
        union
        select *
        from (select count(1) as count from rides) as r
        union
        select *
        from (select count(1) as count from stages) as s
        union
        select *
        from (select count(1) as count from spots) as sp)
    select sum(counts) as total
    from counts
`

export async function truncateTables() {
  await actions.truncate()
  const { total } = await database.one<{ total: number }>(checkCounts)
  expect(total).toBe(0)
}

export async function dropTables() {
  try {
    await actions.truncate()
    await actions.drop()
  } catch (e) {
    console.error(e)
  }
}

export async function populateTables() {
  try {
    await actions.truncate()
    await actions.drop()
  } catch (e) {
  }
  try {
    await actions.create()
  } catch (e) {
  }

  const usersBefore = await database.manyOrNone(`SELECT username
                                                 from users`)
  expect(usersBefore.length).toBe(0)

  await actions.populate()

  const usersAfter = await database.manyOrNone(`SELECT username
                                                from users`)

  expect(usersAfter.length).toBe(1)
}
