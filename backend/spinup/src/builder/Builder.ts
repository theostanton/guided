import { Guide, Spot, User } from "@guided/database"
import GuideBuilder from "./GuideBuilder"
import { Contents } from "./index"

const PASSWORD_HASH = "$2a$06$go2Lk1MKz.2iq6vH2IvsAep1Aera4IhKECd5KlNgyLjPIl2Gq.Xkq"

export default class Builder {

  static create(): Builder {
    return new Builder({
      email: "user1@email.com",
      username: "user1",
      password_hash: PASSWORD_HASH,
    })
  }

  private user: User
  private guides: Guide[] = []
  private spots: Spot[] = []

  constructor(user: User) {
    this.user = user
  }

  addGuide(title: string, action: (builder: GuideBuilder) => void): Builder {

    const builder = GuideBuilder.create(this.user.username, title)
    action(builder)
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