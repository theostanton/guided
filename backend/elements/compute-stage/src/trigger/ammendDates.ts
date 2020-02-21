import { database, Guide, Ride, Spot } from "@guided/database"
import { plusDays } from "@guided/utils/srv/dates"
import { log } from "@guided/logger"

//TODO this doesn't handle scenario where date has been removed, requires individually handling

export default async function(guide: Guide): Promise<void> {

  log("running", "ammendDates")
  const spots = await database.manyOrNone<Spot>("select * from spots where guide=$1 order by position", [guide.id])
  const rides = await database.manyOrNone<Ride>("select * from rides where guide=$1", [guide.id])

  await database.tx(async transaction => {
    const queries: any[] = []

    function query(query: string, args: any[]) {
      queries.push(transaction.none(query, args))
    }

    let date = guide.start_date!

    //TODO this is a bit parculiar but makes sense if the start_date is date of the first ride it should have special behaviour really
    if (spots.length) {
      date = plusDays(date, -(spots[0].nights || 0))
    }

    spots.forEach(spot => {
      query("update spots set date=$1 where id=$2", [date, spot.id])
      const ride = rides.find(ride => {
        return ride.from_spot === spot.id
      })
      if (!ride) {
        throw new Error(`No ride for spot.id=${spot.id}`)
      }
      date = plusDays(date, spot.nights)
      query("update rides set date=$1 where id=$2", [date, ride.id])
    })

    log(`ammendDates running ${queries.length} queries`, "ammendDates")
    return transaction.batch(queries)
  })
}
