import { subscriptionClient } from "../../api/client"
import { FeedDocument, FeedEventFragment, FeedSubscription } from "api/generated"
import { observable, runInAction } from "mobx"
import { log, logError } from "../../utils/logger"

export default class FeedStore {

  @observable
  feedEvents: readonly FeedEventFragment[] | undefined

  private subscription: ZenObservable.Subscription

  subscribe(username: string) {
    this.subscription = subscriptionClient.subscribe<FeedSubscription>({
      query: FeedDocument,
      variables: {
        username,
      },
    }).subscribe(value => {

      if (value.data) {
        runInAction(() => {
          this.feedEvents = value.data.feed.nodes
          log(`Got ${this.feedEvents.length} events`)
        })
      } else if (value.errors) {
        value.errors.forEach(error => {
          logError(error.message)
        })
      }
    })

  }

  unsubscribe() {
    this.subscription?.unsubscribe()
  }
}