import truncate from "../truncate"
import { log } from "@guided/logger"

export default async function(): Promise<void> {
  log("exampling")
  await truncate()
}