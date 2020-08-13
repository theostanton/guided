import {subscriptionClient} from "api/client";
import {FollowingDocument, FollowingSubscription, ProfileUserFragment} from "../../api/generated";
import {observable} from "mobx";

export default class FollowingStore {

  subscription: ZenObservable.Subscription | undefined

  @observable
  following: readonly ProfileUserFragment[] | undefined

  /**
   * this subscription relies on a postgraphile computed field, which doesn't trigger correctly in postgraphile
   * so subscribe() is being used more like a fetch() method which can be called whenever client makes a change
   */
  subscribe() {
    console.log('FollowingStore.subscribe()')
    this.unsubscribe()
    this.subscription = subscriptionClient.subscribe<FollowingSubscription>({
      query: FollowingDocument
    }).subscribe(value => {
      if (value.errors) {
        console.log('FollowingStore errors->\n', value.errors.join('\n'))
      } else if (value.data) {
        this.following = value.data.users!.nodes.map(user => user!)
      }
    })
  }

  unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe()
      this.subscription = undefined
    }
    this.following = undefined
  }
}