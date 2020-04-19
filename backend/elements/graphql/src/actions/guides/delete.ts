import { database } from "@guided/database"
import { MutationResult } from "../../resolvers/Resolver"

export default async function(guideId:string):Promise<MutationResult>{
  try {
    await database.none("delete from guides where id=$1", [guideId])
    return {
      success: true,
    }
  } catch (e) {
    return {
      success: false,
      message: "Failed to delete",
    }
  }
}