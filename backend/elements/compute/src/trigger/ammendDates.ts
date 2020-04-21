import { database, Guide, Ride, Spot } from "@guided/database"
import { plusDays } from "@guided/utils/srv/dates"
import { logError } from "@guided/logger"

type Update = {
  id: string
  date: string | null
}

type Packet = {
  spots: Update[]
  rides: Update[]
}

export async function prepare(guide: Guide): Promise<Packet> {

  const spots = await database.manyOrNone<Spot>("select * from spots where guide=$1 order by position", [guide.id])
  const rides = await database.manyOrNone<Ride>("select * from rides where guide=$1", [guide.id])

  if (guide.start_date) {

    const packet: Packet = {
      rides: [],
      spots: [],
    }

    let date: string = guide.start_date!

    //TODO this is a bit peculiar but makes sense if the start_date is date of the first ride it should have special behaviour really
    if (spots.length) {
      date = plusDays(date, -(spots[0].nights || 0))
    }

    spots.forEach((spot: Spot) => {
      packet.spots.push({
        id: spot.id,
        date,
      })
      const ride = rides.find((ride: Ride) => {
        return ride.from_spot === spot.id
      })
      if (ride) {
        date = plusDays(date, (spot.nights || 0))
        packet.rides.push({
          id: ride.id,
          date,
        })
      } else {
        logError(`No ride for spot.id=${spot.id}`)
      }
    })
    return packet
  } else {
    return {
      spots: spots.map(spot => {
        return {
          id: spot.id,
          date: null,
        }
      }),
      rides: rides.map(ride => {
        return {
          id: ride.id,
          date: null,
        }
      }),
    }
  }
}

export default async function(guide: Guide): Promise<void> {

  const packet: Packet = await prepare(guide)

  const updated = new Date()
  await database.tx(async (transaction: any) => {
    const queries: any[] = []

    packet.spots.forEach(spot => {
      queries.push(transaction.none("update spots set date=$1, updated=$2  where id=$3", [spot.date, updated, spot.id]))
    })
    packet.rides.forEach(ride => {
      queries.push(transaction.none("update rides set date=$1, updated=$2 where id=$3", [ride.date, updated, ride.id]))
    })

    return transaction.batch(queries)
  })
}
