import { Guide, Spot, User } from "@guided/database"
import GuideBuilder from "./GuideBuilder"
import { Contents } from "./index"
import faker from "faker"

const PASSWORD_HASH = "$2a$06$go2Lk1MKz.2iq6vH2IvsAep1Aera4IhKECd5KlNgyLjPIl2Gq.Xkq"

export default class Builder {

  static create(email?: string, username?: string): Builder {
    const firstName = faker.name.firstName()
    const lastName = faker.name.firstName()
    if (!email) {
      email = email || faker.internet.email(firstName, lastName)
    }
    if (!username) {
      username = username || faker.internet.userName(firstName, lastName)
    }

    return new Builder({
      email,
      username,
      password_hash: PASSWORD_HASH,
    })
  }

  private user: User
  private guides: Guide[] = []
  private spots: Spot[] = []

  constructor(user: User) {
    this.user = user
  }

  addGuide(title: string, id: string | undefined, action?: (builder: GuideBuilder) => void): Builder {

    const builder = GuideBuilder.create(this.user.username, title, id)
    if (action) {
      action(builder)
    }
    const { guide, spots } = builder.build()
    this.guides = [...this.guides, guide]
    this.spots = [...this.spots, ...spots]

    return this
  }

  build(): Contents {
    return {
      users: [this.user],
      guides: this.guides,
      spots: this.spots,
    }
  }
}