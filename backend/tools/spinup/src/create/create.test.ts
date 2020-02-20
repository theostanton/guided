import { actions } from "../."

xdescribe("Create tables", () => {
  it("Creates users", async () => {
    await actions.create()
  })
})