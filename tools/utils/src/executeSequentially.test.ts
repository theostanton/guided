import { sleep } from "./index"
import executeSequentially from "./executeSequentially"

async function testDelayFunction(delayMs: number): Promise<number> {
  await sleep(delayMs)
  return delayMs + 1
}

test("Executes in sequence", async () => {
  const params: number[] = [300, 200, 100]

  const results = await executeSequentially(params, testDelayFunction)

  expect(results).toMatchObject([301, 201, 101])
})
test("Doesnt execute in sequence", async () => {

  const params: number[] = [300, 200, 100]

  const results = await Promise.all(params.map(testDelayFunction))

  expect(results).toMatchObject([301, 201, 101])
})