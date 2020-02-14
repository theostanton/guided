import execute from "."

test("Executes in sequence", async () => {
  await execute("truncate")
  expect(true).toMatchObject(false)
})