import { receive } from "@guided/events"
import action from "./action"

export async function handler(event: any, context: any) {
  return receive(event, context, action)
}