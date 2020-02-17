require("dotenv").config()
import action from "./action"

async function execute() {
  const guideId = process.env.GUIDE_ID
  console.log(`execute guideId=${guideId}`)
  if (guideId && guideId.length > 0) {
    await action({
      guideId,
    })
  } else {
    throw new Error(`No guideId provided`)
  }
}

execute().then().catch()