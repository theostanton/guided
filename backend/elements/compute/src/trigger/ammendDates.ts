import { database, Guide, Patch, Ride, Spot } from "@guided/database"
import { plusDays } from "@guided/utils/srv/dates"
import { log, logError } from "@guided/logger"
import SQS from "./sqs"
import { executeConcurrently } from "@guided/utils"
import http from "http"

type Packet = {
  spots: Patch<Spot>[];
  rides: Patch<Ride>[];
}

// This is a convoluted way to only get spots for stages that are not stale, as locked spots dont have stage values
const SPOTS_QUERY = `
    select distinct sp.*
    from spots as sp
             inner join stages st on sp.id = st.to_spot or st.from_spot = sp.id or st.id = sp.id
    where sp.guide = $1
      and st.status in ('ready', 'complete')
    order by sp.position
`

const RIDES_QUERY = `
    select r.*
    from rides as r
             inner join stages st on r.stage = st.id
    where r.guide = $1
      and st.status in ('ready', 'complete')
`

export async function prepare(guide: Guide): Promise<Packet> {
  const spots = await database.manyOrNone<Spot>(SPOTS_QUERY, [guide.id])

  const rides = await database.manyOrNone<Ride>(RIDES_QUERY, [guide.id])

  if (guide.start_date) {
    const packet: Packet = {
      rides: [],
      spots: [],
    }

    let date: string = guide.start_date

    spots.forEach((spot: Spot, index: number) => {
      if (guide.is_circular && index === 0) {
        //We're gonna set the first spots date to the last, after these iterations
      } else if (index === 0) {
        // Set first spots date to null
        packet.spots.push({
          id: spot.id,
          date: null,
        })
      } else {
        packet.spots.push({
          id: spot.id,
          date,
        })
      }

      const ride = rides.find((ride: Ride) => {
        return ride.from_spot === spot.id
      })
      if (!ride) {
        if (!guide.is_circular && index === spots.length - 1) {
          // Only the last spot of a non-circular guide can not have a ride
          return
        }
        throw new Error(`No ride for spot.id=${spot.id}`)
      }

      if (index == 0 && spot.nights && spot.nights > 0) {
        throw new Error(`First spot shouldnt have any nights`)
      }

      date = plusDays(date, spot.nights || 0)
      packet.rides.push({
        id: ride.id,
        date,
      })
    })

    log(
      `guide.is_circular && spots.length > 0=${
        guide.is_circular && spots.length > 0
      }`,
    )
    if (guide.is_circular && spots.length > 0) {
      // Let's set the date of first spot as the arrival date of end
      packet.spots.push({
        id: spots[0].id,
        nights: 0,
        date,
      })
    }
    return packet
  } else {
    return {
      spots: spots.map((spot) => {
        return {
          id: spot.id,
          date: null,
        }
      }),
      rides: rides.map((ride) => {
        return {
          id: ride.id,
          date: null,
        }
      }),
    }
  }
}

async function postMessage(guide: Guide): Promise<void> {
  const sqs = SQS()
  const { QueueUrl } = await sqs
    .getQueueUrl({
      QueueName: process.env.AMEND_DATES_QUEUE_NAME!,
    })
    .promise()

  await sqs.sendMessage({
    QueueUrl: QueueUrl!,
    MessageBody: guide.id,
  }).promise()
}


async function callEndpoint(guide: Guide): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const url = `${process.env.AMEND_DATES_ENDPOINT}/${guide.id}`
    log(`Calling url=${url}`)
    try {
      http.get(url, (res => {
        if (res.statusCode === 200) {
          log("Success")
          resolve()
        } else {
          logError(`Error:${res.statusMessage}`)
          reject(res.statusMessage)
        }
      }))
    } catch (e) {
      logError(e)
      reject(e)
    }
  })
}

export default async function(guide: Guide): Promise<void> {


  switch (true) {
    case !!process.env.AMEND_DATES_QUEUE_NAME:
      log("SQS", "amend dates")
      await postMessage(guide)
      return
    case !!process.env.AMEND_DATES_ENDPOINT:
      log("ENDPOINT", "amend dates")

      return callEndpoint(guide)
      return
    default:
      logError("Unhandled amendDates!")
  }
}
