import {FeedEventFragment, FeedEventType} from "api/generated";

export type FeedEvent = JoinedFeedEvent | NewFollowsFeedEvent | NewGuideFeedEvent | SelfCreatedFeedEvent

export interface FeedEventBase<Type extends FeedEventType> {
  type: Type
}

export type JoinedFeedEvent =
  FeedEventBase<FeedEventType.Joined>
  & Pick<FeedEventFragment, 'timestamp' | 'user'>

export type NewFollowsFeedEvent =
  FeedEventBase<FeedEventType.NewFollows>
  & Pick<FeedEventFragment, 'timestamp' | 'user'>

export type NewGuideFeedEvent =
  FeedEventBase<FeedEventType.NewGuide>
  & Pick<FeedEventFragment, 'timestamp' | 'guide' | 'user'>

export type SelfCreatedFeedEvent =
  FeedEventBase<FeedEventType.SelfCreated>
  & Pick<FeedEventFragment, 'timestamp' | 'guide' | 'user'>