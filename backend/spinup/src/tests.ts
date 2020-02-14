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

export async function clearDatabase() {
  try {
    await actions.drop()
  } catch (e) {
    console.error(e)
  }
  const { countAfter } = await database.one<{ countAfter: number }>(`SELECT count(1) as "countAfter"
                                                                     FROM information_schema.tables
                                                                     WHERE table_schema = 'guided'`)
  expect(countAfter).toEqual(0!.toString())
}

export async function cleanDatabase() {
  try {
    await actions.truncate()
    await actions.drop()
  } catch (e) {
  }

  const { countBefore } = await database.one<{ countBefore: number }>(`SELECT count(1) as "countBefore"
                                                                       FROM information_schema.tables
                                                                       WHERE table_schema = 'guided'`)
  expect(countBefore).toBe(0!.toString())
  await actions.create()
  const { countAfter } = await database.one<{ countAfter: number }>(`SELECT count(1) as "countAfter"
                                                                     FROM information_schema.tables
                                                                     WHERE table_schema = 'guided'`)
  expect(countAfter).toBe(5!.toString())
}
