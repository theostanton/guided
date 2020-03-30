import action from "./action"

async function execute() {
  const computationId = process.env.COMPUTATION_ID
  console.log(`execute computationId=${computationId}`)
  if (computationId && computationId.length > 0) {
    await action({
      computationId
    })
  } else {
    throw new Error(`No guideId provided`)
  }
}

execute().then().catch()