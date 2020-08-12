import {FeedEventFragment, FeedEventType} from "api/generated";
import {PickRequired} from "utils";

export function mapFeedEventFragment(fragment: FeedEventFragment): FeedEvent {
  //TODO if it wasn't for the 'Required' part of PickRequired. this wouldn't be necessary
  // as it would nicely cast from logic around 'type' fields potential values
  // but the 'Required' linting is more important than syntactical sugar
  switch (fragment.type) {
    case FeedEventType.Joined:
      return fragment as JoinedFeedEvent
    case FeedEventType.SelfCreated:
      return fragment as SelfCreatedFeedEvent
    case FeedEventType.NewGuide:
      return fragment as NewGuideFeedEvent
    case FeedEventType.NewFollows:
      return fragment as NewFollowsFeedEvent
  }
}

export type FeedEvent = JoinedFeedEvent | NewFollowsFeedEvent | NewGuideFeedEvent | SelfCreatedFeedEvent

export interface FeedEventBase<Type extends FeedEventType> {
  type: Type
}

export type JoinedFeedEvent =
  FeedEventBase<FeedEventType.Joined>
  & PickRequired<FeedEventFragment, 'timestamp' | 'user'>

export type NewFollowsFeedEvent =
  FeedEventBase<FeedEventType.NewFollows>
  & PickRequired<FeedEventFragment, 'timestamp' | 'user'>

export type NewGuideFeedEvent =
  FeedEventBase<FeedEventType.NewGuide>
  & PickRequired<FeedEventFragment, 'timestamp' | 'guide' | 'user'>

export type SelfCreatedFeedEvent =
  FeedEventBase<FeedEventType.SelfCreated>
  & PickRequired<FeedEventFragment, 'timestamp' | 'guide' | 'user'>