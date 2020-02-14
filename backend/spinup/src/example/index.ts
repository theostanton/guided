import { log } from "@guided/logger"
import { database, insertOne, User } from "@guided/database"

export default async function(): Promise<void> {
  log("exampling")
  const user: User = {
    email: "user2@email.com",
    username: "user2",
    password_hash: "$2a$06$mu92Y6dlkOIBNi1K4uhMvuGq/LY6cDihm9Al9thcZnQOaftPMqSyO",
  }
  const userQuery = insertOne("guided.users", user)
  await database.none(userQuery)
}