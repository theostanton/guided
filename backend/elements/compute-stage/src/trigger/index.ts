import { Packet } from "../prepare"
import { executeConcurrently } from "@guided/utils"
import action from "../action"

export default async function trigger(packet: Packet): Promise<void[]> {
  return executeConcurrently(packet.computationIds, async (computationId: string) => {
    await action({
      computationId,
    })
  })
}