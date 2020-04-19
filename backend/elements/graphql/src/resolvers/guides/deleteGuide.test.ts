import { DeleteGuideInput, DeleteGuideResult } from "../../generated"
import DeleteGuideMutation from "./deleteGuide"
import { NOT_LOGGED_IN } from "../utils/messages"
import CreateGuideMutation from "./createGuide"

describe("When calling deleteGuide when not logged in", () => {

  const input: DeleteGuideInput = {
    id: "",
  }
  let result: DeleteGuideResult

  beforeAll(async () => {
    result = await new DeleteGuideMutation().resolver({ input }, {})
  })

  it("should fail", () => {
    expect(result.success).toBe(false)
    expect(result.message).toBe(NOT_LOGGED_IN)
  })
})

describe("When trying to delete a different users guide", () => {

  const input: DeleteGuideInput = {
    id: "",
  }
  let result: DeleteGuideResult

  beforeAll(async () => {
    // await new CreateGuideMutation().resolver({
    //   input: {},
    // }, {})
    // result = await new DeleteGuideMutation().resolver({ input }, {})
  })

  it("should fail", () => {
    expect(result.success).toBe(false)
    expect(result.message).toBe(NOT_LOGGED_IN)
  })
})