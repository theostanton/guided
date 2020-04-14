import { Guide, Spot, User } from "@guided/database"
import GuideBuilder from "./GuideBuilder"
import { Contents } from "./index"
import faker from "faker"

const PASSWORD_HASH = "$2a$06$go2Lk1MKz.2iq6vH2IvsAep1Aera4IhKECd5KlNgyLjPIl2Gq.Xkq"

export default class UserBuilder {

  static create(email?: string, username?: string): UserBuilder {
    const firstName = faker.name.firstName()
    const lastName = faker.name.firstName()
    if (!email) {
      email = email || faker.internet.email(firstName, lastName)
    }
    if (!username) {
      username = username || faker.internet.userName(firstName, lastName)
    }

    return new UserBuilder({
      email,
      username,
      password_hash: PASSWORD_HASH,
      created: new Date(),
      updated: null,
    })
  }

  private user: User
  private guides: Guide[] = []
  private spots: Spot[] = []

  constructor(user: User) {
    this.user = user
  }

  addGuide(title: string, action?: (builder: GuideBuilder) => void): UserBuilder {

    const builder = GuideBuilder.create(this.user.username, title)
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