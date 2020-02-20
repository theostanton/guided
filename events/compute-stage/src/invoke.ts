import action from "./action"

async function execute() {
  const stageId = process.env.STAGE_ID
  console.log(`execute stageId=${stageId}`)
  if (stageId && stageId.length > 0) {
    await action({
      stageId,
    })
  } else {
    throw new Error(`No guideId provided`)
  }
}

execute().then().catch()