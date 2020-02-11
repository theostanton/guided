import { logJson } from "@guided/logger"
import Dao from "./dao"
import { ComputeRidesMessageBody, ComputeRidesResult } from "./types"

export default async function(body: ComputeRidesMessageBody): Promise<ComputeRidesResult> {
  logJson(body, "handle compute-rides")

  const { guideId } = body

  const dao = new Dao(guideId)

  const guide = await dao.guide()

  logJson(guide, "guide")

  await dao.deleteUnlocked()

  const spots = await dao.spots()

  // const start:LatLng=[0,0]
  // client.directions({
  //   params:{
  //     origin:spots[0].lat
  //   }
  // })


  logJson(spots, "spots")

  return {
    success: true,
  }
}