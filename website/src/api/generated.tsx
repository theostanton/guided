// tslint:disable
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Cursor: any,
  Date: any,
  BigInt: any,
};

export type AuthenticateInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  email: Scalars['String'],
  password: Scalars['String'],
};

export type AuthenticatePayload = {
  clientMutationId?: Maybe<Scalars['String']>,
  jwtToken?: Maybe<JwtToken>,
  query?: Maybe<Query>,
};


export type CreateGuideInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  guide: GuideInput,
};

export type CreateGuidePayload = {
  clientMutationId?: Maybe<Scalars['String']>,
  guide?: Maybe<Guide>,
  query?: Maybe<Query>,
  userByOwner?: Maybe<User>,
  guideEdge?: Maybe<GuidesEdge>,
};


export type CreateGuidePayloadGuideEdgeArgs = {
  orderBy?: Maybe<Array<GuidesOrderBy>>
};

export type CreateRideInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  ride: RideInput,
};

export type CreateRidePayload = {
  clientMutationId?: Maybe<Scalars['String']>,
  ride?: Maybe<Ride>,
  query?: Maybe<Query>,
  guideByGuide?: Maybe<Guide>,
  spotByFromSpot?: Maybe<Spot>,
  spotByToSpot?: Maybe<Spot>,
  rideEdge?: Maybe<RidesEdge>,
};


export type CreateRidePayloadRideEdgeArgs = {
  orderBy?: Maybe<Array<RidesOrderBy>>
};

export type CreateSpotInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  spot: SpotInput,
};

export type CreateSpotPayload = {
  clientMutationId?: Maybe<Scalars['String']>,
  spot?: Maybe<Spot>,
  query?: Maybe<Query>,
  guideByGuide?: Maybe<Guide>,
  spotEdge?: Maybe<SpotsEdge>,
};


export type CreateSpotPayloadSpotEdgeArgs = {
  orderBy?: Maybe<Array<SpotsOrderBy>>
};

export type CreateUserInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  user: UserInput,
};

export type CreateUserPayload = {
  clientMutationId?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
  query?: Maybe<Query>,
  userEdge?: Maybe<UsersEdge>,
};


export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};



export type DeleteGuideByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['String'],
};

export type DeleteGuideInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteGuidePayload = {
  clientMutationId?: Maybe<Scalars['String']>,
  guide?: Maybe<Guide>,
  deletedGuideId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  userByOwner?: Maybe<User>,
  guideEdge?: Maybe<GuidesEdge>,
};


export type DeleteGuidePayloadGuideEdgeArgs = {
  orderBy?: Maybe<Array<GuidesOrderBy>>
};

export type DeleteRideByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['String'],
};

export type DeleteRideInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteRidePayload = {
  clientMutationId?: Maybe<Scalars['String']>,
  ride?: Maybe<Ride>,
  deletedRideId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  guideByGuide?: Maybe<Guide>,
  spotByFromSpot?: Maybe<Spot>,
  spotByToSpot?: Maybe<Spot>,
  rideEdge?: Maybe<RidesEdge>,
};


export type DeleteRidePayloadRideEdgeArgs = {
  orderBy?: Maybe<Array<RidesOrderBy>>
};

export type DeleteSpotByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['String'],
};

export type DeleteSpotInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteSpotPayload = {
  clientMutationId?: Maybe<Scalars['String']>,
  spot?: Maybe<Spot>,
  deletedSpotId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  guideByGuide?: Maybe<Guide>,
  spotEdge?: Maybe<SpotsEdge>,
};


export type DeleteSpotPayloadSpotEdgeArgs = {
  orderBy?: Maybe<Array<SpotsOrderBy>>
};

export type DeleteUserByUsernameInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  username: Scalars['String'],
};

export type DeleteUserInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteUserPayload = {
  clientMutationId?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
  deletedUserId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  userEdge?: Maybe<UsersEdge>,
};


export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};

export type Guide = Node & {
  nodeId: Scalars['ID'],
  id: Scalars['String'],
  title: Scalars['String'],
  slug: Scalars['String'],
  owner: Scalars['String'],
  startDate?: Maybe<Scalars['Date']>,
  userByOwner?: Maybe<User>,
  spotsByGuide: SpotsConnection,
  ridesByGuide: RidesConnection,
};


export type GuideSpotsByGuideArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<SpotsOrderBy>>,
  condition?: Maybe<SpotCondition>
};


export type GuideRidesByGuideArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<RidesOrderBy>>,
  condition?: Maybe<RideCondition>
};

export type GuideCondition = {
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['Date']>,
};

export type GuideInput = {
  id: Scalars['String'],
  title: Scalars['String'],
  slug: Scalars['String'],
  owner: Scalars['String'],
  startDate?: Maybe<Scalars['Date']>,
};

export type GuidePatch = {
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['Date']>,
};

export type GuidesConnection = {
  nodes: Array<Maybe<Guide>>,
  edges: Array<GuidesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type GuidesEdge = {
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Guide>,
};

export enum GuidesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  SlugAsc = 'SLUG_ASC',
  SlugDesc = 'SLUG_DESC',
  OwnerAsc = 'OWNER_ASC',
  OwnerDesc = 'OWNER_DESC',
  StartDateAsc = 'START_DATE_ASC',
  StartDateDesc = 'START_DATE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type JwtToken = {
  role?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  exp?: Maybe<Scalars['BigInt']>,
};

export type Mutation = {
  createGuide?: Maybe<CreateGuidePayload>,
  createRide?: Maybe<CreateRidePayload>,
  createSpot?: Maybe<CreateSpotPayload>,
  createUser?: Maybe<CreateUserPayload>,
  updateGuide?: Maybe<UpdateGuidePayload>,
  updateGuideById?: Maybe<UpdateGuidePayload>,
  updateRide?: Maybe<UpdateRidePayload>,
  updateRideById?: Maybe<UpdateRidePayload>,
  updateSpot?: Maybe<UpdateSpotPayload>,
  updateSpotById?: Maybe<UpdateSpotPayload>,
  updateUser?: Maybe<UpdateUserPayload>,
  updateUserByUsername?: Maybe<UpdateUserPayload>,
  deleteGuide?: Maybe<DeleteGuidePayload>,
  deleteGuideById?: Maybe<DeleteGuidePayload>,
  deleteRide?: Maybe<DeleteRidePayload>,
  deleteRideById?: Maybe<DeleteRidePayload>,
  deleteSpot?: Maybe<DeleteSpotPayload>,
  deleteSpotById?: Maybe<DeleteSpotPayload>,
  deleteUser?: Maybe<DeleteUserPayload>,
  deleteUserByUsername?: Maybe<DeleteUserPayload>,
  authenticate?: Maybe<AuthenticatePayload>,
  register?: Maybe<RegisterPayload>,
};


export type MutationCreateGuideArgs = {
  input: CreateGuideInput
};


export type MutationCreateRideArgs = {
  input: CreateRideInput
};


export type MutationCreateSpotArgs = {
  input: CreateSpotInput
};


export type MutationCreateUserArgs = {
  input: CreateUserInput
};


export type MutationUpdateGuideArgs = {
  input: UpdateGuideInput
};


export type MutationUpdateGuideByIdArgs = {
  input: UpdateGuideByIdInput
};


export type MutationUpdateRideArgs = {
  input: UpdateRideInput
};


export type MutationUpdateRideByIdArgs = {
  input: UpdateRideByIdInput
};


export type MutationUpdateSpotArgs = {
  input: UpdateSpotInput
};


export type MutationUpdateSpotByIdArgs = {
  input: UpdateSpotByIdInput
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput
};


export type MutationUpdateUserByUsernameArgs = {
  input: UpdateUserByUsernameInput
};


export type MutationDeleteGuideArgs = {
  input: DeleteGuideInput
};


export type MutationDeleteGuideByIdArgs = {
  input: DeleteGuideByIdInput
};


export type MutationDeleteRideArgs = {
  input: DeleteRideInput
};


export type MutationDeleteRideByIdArgs = {
  input: DeleteRideByIdInput
};


export type MutationDeleteSpotArgs = {
  input: DeleteSpotInput
};


export type MutationDeleteSpotByIdArgs = {
  input: DeleteSpotByIdInput
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput
};


export type MutationDeleteUserByUsernameArgs = {
  input: DeleteUserByUsernameInput
};


export type MutationAuthenticateArgs = {
  input: AuthenticateInput
};


export type MutationRegisterArgs = {
  input: RegisterInput
};

export type Node = {
  nodeId: Scalars['ID'],
};

export type PageInfo = {
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['Cursor']>,
  endCursor?: Maybe<Scalars['Cursor']>,
};

export type Query = Node & {
  query: Query,
  nodeId: Scalars['ID'],
  node?: Maybe<Node>,
  allGuides?: Maybe<GuidesConnection>,
  allRides?: Maybe<RidesConnection>,
  allSpots?: Maybe<SpotsConnection>,
  allUsers?: Maybe<UsersConnection>,
  guideById?: Maybe<Guide>,
  rideById?: Maybe<Ride>,
  spotById?: Maybe<Spot>,
  userByUsername?: Maybe<User>,
  currentUser?: Maybe<JwtToken>,
  guide?: Maybe<Guide>,
  ride?: Maybe<Ride>,
  spot?: Maybe<Spot>,
  user?: Maybe<User>,
};


export type QueryNodeArgs = {
  nodeId: Scalars['ID']
};


export type QueryAllGuidesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<GuidesOrderBy>>,
  condition?: Maybe<GuideCondition>
};


export type QueryAllRidesArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<RidesOrderBy>>,
  condition?: Maybe<RideCondition>
};


export type QueryAllSpotsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<SpotsOrderBy>>,
  condition?: Maybe<SpotCondition>
};


export type QueryAllUsersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<UsersOrderBy>>,
  condition?: Maybe<UserCondition>
};


export type QueryGuideByIdArgs = {
  id: Scalars['String']
};


export type QueryRideByIdArgs = {
  id: Scalars['String']
};


export type QuerySpotByIdArgs = {
  id: Scalars['String']
};


export type QueryUserByUsernameArgs = {
  username: Scalars['String']
};


export type QueryGuideArgs = {
  nodeId: Scalars['ID']
};


export type QueryRideArgs = {
  nodeId: Scalars['ID']
};


export type QuerySpotArgs = {
  nodeId: Scalars['ID']
};


export type QueryUserArgs = {
  nodeId: Scalars['ID']
};

export type RegisterInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  _username: Scalars['String'],
  _email: Scalars['String'],
  _password: Scalars['String'],
};

export type RegisterPayload = {
  clientMutationId?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
  query?: Maybe<Query>,
  userEdge?: Maybe<UsersEdge>,
};


export type RegisterPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};

export type Ride = Node & {
  nodeId: Scalars['ID'],
  id: Scalars['String'],
  guide: Scalars['String'],
  fromSpot: Scalars['String'],
  toSpot: Scalars['String'],
  guideByGuide?: Maybe<Guide>,
  spotByFromSpot?: Maybe<Spot>,
  spotByToSpot?: Maybe<Spot>,
};

export type RideCondition = {
  id?: Maybe<Scalars['String']>,
  guide?: Maybe<Scalars['String']>,
  fromSpot?: Maybe<Scalars['String']>,
  toSpot?: Maybe<Scalars['String']>,
};

export type RideInput = {
  id: Scalars['String'],
  guide: Scalars['String'],
  fromSpot: Scalars['String'],
  toSpot: Scalars['String'],
};

export type RidePatch = {
  id?: Maybe<Scalars['String']>,
  guide?: Maybe<Scalars['String']>,
  fromSpot?: Maybe<Scalars['String']>,
  toSpot?: Maybe<Scalars['String']>,
};

export type RidesConnection = {
  nodes: Array<Maybe<Ride>>,
  edges: Array<RidesEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type RidesEdge = {
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Ride>,
};

export enum RidesOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  GuideAsc = 'GUIDE_ASC',
  GuideDesc = 'GUIDE_DESC',
  FromSpotAsc = 'FROM_SPOT_ASC',
  FromSpotDesc = 'FROM_SPOT_DESC',
  ToSpotAsc = 'TO_SPOT_ASC',
  ToSpotDesc = 'TO_SPOT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Spot = Node & {
  nodeId: Scalars['ID'],
  id: Scalars['String'],
  label?: Maybe<Scalars['String']>,
  guide: Scalars['String'],
  nights: Scalars['Int'],
  locked: Scalars['Boolean'],
  guideByGuide?: Maybe<Guide>,
  ridesByFromSpot: RidesConnection,
  ridesByToSpot: RidesConnection,
};


export type SpotRidesByFromSpotArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<RidesOrderBy>>,
  condition?: Maybe<RideCondition>
};


export type SpotRidesByToSpotArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<RidesOrderBy>>,
  condition?: Maybe<RideCondition>
};

export type SpotCondition = {
  id?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  guide?: Maybe<Scalars['String']>,
  nights?: Maybe<Scalars['Int']>,
  locked?: Maybe<Scalars['Boolean']>,
};

export type SpotInput = {
  id: Scalars['String'],
  label?: Maybe<Scalars['String']>,
  guide: Scalars['String'],
  nights: Scalars['Int'],
  locked: Scalars['Boolean'],
};

export type SpotPatch = {
  id?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  guide?: Maybe<Scalars['String']>,
  nights?: Maybe<Scalars['Int']>,
  locked?: Maybe<Scalars['Boolean']>,
};

export type SpotsConnection = {
  nodes: Array<Maybe<Spot>>,
  edges: Array<SpotsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type SpotsEdge = {
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Spot>,
};

export enum SpotsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  LabelAsc = 'LABEL_ASC',
  LabelDesc = 'LABEL_DESC',
  GuideAsc = 'GUIDE_ASC',
  GuideDesc = 'GUIDE_DESC',
  NightsAsc = 'NIGHTS_ASC',
  NightsDesc = 'NIGHTS_DESC',
  LockedAsc = 'LOCKED_ASC',
  LockedDesc = 'LOCKED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type UpdateGuideByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  guidePatch: GuidePatch,
  id: Scalars['String'],
};

export type UpdateGuideInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  guidePatch: GuidePatch,
};

export type UpdateGuidePayload = {
  clientMutationId?: Maybe<Scalars['String']>,
  guide?: Maybe<Guide>,
  query?: Maybe<Query>,
  userByOwner?: Maybe<User>,
  guideEdge?: Maybe<GuidesEdge>,
};


export type UpdateGuidePayloadGuideEdgeArgs = {
  orderBy?: Maybe<Array<GuidesOrderBy>>
};

export type UpdateRideByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  ridePatch: RidePatch,
  id: Scalars['String'],
};

export type UpdateRideInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  ridePatch: RidePatch,
};

export type UpdateRidePayload = {
  clientMutationId?: Maybe<Scalars['String']>,
  ride?: Maybe<Ride>,
  query?: Maybe<Query>,
  guideByGuide?: Maybe<Guide>,
  spotByFromSpot?: Maybe<Spot>,
  spotByToSpot?: Maybe<Spot>,
  rideEdge?: Maybe<RidesEdge>,
};


export type UpdateRidePayloadRideEdgeArgs = {
  orderBy?: Maybe<Array<RidesOrderBy>>
};

export type UpdateSpotByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  spotPatch: SpotPatch,
  id: Scalars['String'],
};

export type UpdateSpotInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  spotPatch: SpotPatch,
};

export type UpdateSpotPayload = {
  clientMutationId?: Maybe<Scalars['String']>,
  spot?: Maybe<Spot>,
  query?: Maybe<Query>,
  guideByGuide?: Maybe<Guide>,
  spotEdge?: Maybe<SpotsEdge>,
};


export type UpdateSpotPayloadSpotEdgeArgs = {
  orderBy?: Maybe<Array<SpotsOrderBy>>
};

export type UpdateUserByUsernameInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  userPatch: UserPatch,
  username: Scalars['String'],
};

export type UpdateUserInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  userPatch: UserPatch,
};

export type UpdateUserPayload = {
  clientMutationId?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
  query?: Maybe<Query>,
  userEdge?: Maybe<UsersEdge>,
};


export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};

export type User = Node & {
  nodeId: Scalars['ID'],
  username: Scalars['String'],
  email: Scalars['String'],
  passwordHash: Scalars['String'],
  guidesByOwner: GuidesConnection,
};


export type UserGuidesByOwnerArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<GuidesOrderBy>>,
  condition?: Maybe<GuideCondition>
};

export type UserCondition = {
  username?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  passwordHash?: Maybe<Scalars['String']>,
};

export type UserInput = {
  username: Scalars['String'],
  email: Scalars['String'],
  passwordHash: Scalars['String'],
};

export type UserPatch = {
  username?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  passwordHash?: Maybe<Scalars['String']>,
};

export type UsersConnection = {
  nodes: Array<Maybe<User>>,
  edges: Array<UsersEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type UsersEdge = {
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<User>,
};

export enum UsersOrderBy {
  Natural = 'NATURAL',
  UsernameAsc = 'USERNAME_ASC',
  UsernameDesc = 'USERNAME_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  PasswordHashAsc = 'PASSWORD_HASH_ASC',
  PasswordHashDesc = 'PASSWORD_HASH_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type SomeQueryQueryVariables = {};


export type SomeQueryQuery = { allUsers: Maybe<(
    Pick<UsersConnection, 'totalCount'>
    & { nodes: Array<Maybe<(
      Pick<User, 'email' | 'username'>
      & { guidesByOwner: { nodes: Array<Maybe<Pick<Guide, 'owner' | 'title' | 'slug'>>> } }
    )>> }
  )> };

export type CreateGuideMutationVariables = {
  guide: GuideInput
};


export type CreateGuideMutation = { createGuide: Maybe<{ guide: Maybe<Pick<Guide, 'id'>> }> };

export type DeleteGuideMutationVariables = {
  guideId: Scalars['String']
};


export type DeleteGuideMutation = { deleteGuideById: Maybe<Pick<DeleteGuidePayload, 'deletedGuideId'>> };

export type AllGuideTitlesForUserQueryVariables = {
  owner: Scalars['String']
};


export type AllGuideTitlesForUserQuery = { allGuides: Maybe<{ nodes: Array<Maybe<Pick<Guide, 'id' | 'title' | 'slug' | 'owner'>>> }> };

export type GetGuideBySlugQueryVariables = {
  slug: Scalars['String'],
  owner: Scalars['String']
};


export type GetGuideBySlugQuery = { allGuides: Maybe<{ nodes: Array<Maybe<(
      Pick<Guide, 'id' | 'title' | 'slug' | 'owner' | 'startDate'>
      & { ridesByGuide: Pick<RidesConnection, 'totalCount'>, spotsByGuide: Pick<SpotsConnection, 'totalCount'> }
    )>> }> };


export const SomeQueryDocument = gql`
    query SomeQuery {
  allUsers {
    totalCount
    nodes {
      email
      username
      guidesByOwner {
        nodes {
          owner
          title
          slug
        }
      }
    }
  }
}
    `;
export type SomeQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SomeQueryQuery, SomeQueryQueryVariables>, 'query'>;

    export const SomeQueryComponent = (props: SomeQueryComponentProps) => (
      <ApolloReactComponents.Query<SomeQueryQuery, SomeQueryQueryVariables> query={SomeQueryDocument} {...props} />
    );
    

/**
 * __useSomeQueryQuery__
 *
 * To run a query within a React component, call `useSomeQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSomeQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSomeQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useSomeQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SomeQueryQuery, SomeQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<SomeQueryQuery, SomeQueryQueryVariables>(SomeQueryDocument, baseOptions);
      }
export function useSomeQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SomeQueryQuery, SomeQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SomeQueryQuery, SomeQueryQueryVariables>(SomeQueryDocument, baseOptions);
        }
export type SomeQueryQueryHookResult = ReturnType<typeof useSomeQueryQuery>;
export type SomeQueryLazyQueryHookResult = ReturnType<typeof useSomeQueryLazyQuery>;
export type SomeQueryQueryResult = ApolloReactCommon.QueryResult<SomeQueryQuery, SomeQueryQueryVariables>;
export const CreateGuideDocument = gql`
    mutation CreateGuide($guide: GuideInput!) {
  createGuide(input: {guide: $guide}) {
    guide {
      id
    }
  }
}
    `;
export type CreateGuideMutationFn = ApolloReactCommon.MutationFunction<CreateGuideMutation, CreateGuideMutationVariables>;
export type CreateGuideComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateGuideMutation, CreateGuideMutationVariables>, 'mutation'>;

    export const CreateGuideComponent = (props: CreateGuideComponentProps) => (
      <ApolloReactComponents.Mutation<CreateGuideMutation, CreateGuideMutationVariables> mutation={CreateGuideDocument} {...props} />
    );
    

/**
 * __useCreateGuideMutation__
 *
 * To run a mutation, you first call `useCreateGuideMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGuideMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGuideMutation, { data, loading, error }] = useCreateGuideMutation({
 *   variables: {
 *      guide: // value for 'guide'
 *   },
 * });
 */
export function useCreateGuideMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateGuideMutation, CreateGuideMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateGuideMutation, CreateGuideMutationVariables>(CreateGuideDocument, baseOptions);
      }
export type CreateGuideMutationHookResult = ReturnType<typeof useCreateGuideMutation>;
export type CreateGuideMutationResult = ApolloReactCommon.MutationResult<CreateGuideMutation>;
export type CreateGuideMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateGuideMutation, CreateGuideMutationVariables>;
export const DeleteGuideDocument = gql`
    mutation DeleteGuide($guideId: String!) {
  deleteGuideById(input: {id: $guideId}) {
    deletedGuideId
  }
}
    `;
export type DeleteGuideMutationFn = ApolloReactCommon.MutationFunction<DeleteGuideMutation, DeleteGuideMutationVariables>;
export type DeleteGuideComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteGuideMutation, DeleteGuideMutationVariables>, 'mutation'>;

    export const DeleteGuideComponent = (props: DeleteGuideComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteGuideMutation, DeleteGuideMutationVariables> mutation={DeleteGuideDocument} {...props} />
    );
    

/**
 * __useDeleteGuideMutation__
 *
 * To run a mutation, you first call `useDeleteGuideMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGuideMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGuideMutation, { data, loading, error }] = useDeleteGuideMutation({
 *   variables: {
 *      guideId: // value for 'guideId'
 *   },
 * });
 */
export function useDeleteGuideMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteGuideMutation, DeleteGuideMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteGuideMutation, DeleteGuideMutationVariables>(DeleteGuideDocument, baseOptions);
      }
export type DeleteGuideMutationHookResult = ReturnType<typeof useDeleteGuideMutation>;
export type DeleteGuideMutationResult = ApolloReactCommon.MutationResult<DeleteGuideMutation>;
export type DeleteGuideMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteGuideMutation, DeleteGuideMutationVariables>;
export const AllGuideTitlesForUserDocument = gql`
    query AllGuideTitlesForUser($owner: String!) {
  allGuides(condition: {owner: $owner}) {
    nodes {
      id
      title
      slug
      owner
    }
  }
}
    `;
export type AllGuideTitlesForUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>, 'query'> & ({ variables: AllGuideTitlesForUserQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AllGuideTitlesForUserComponent = (props: AllGuideTitlesForUserComponentProps) => (
      <ApolloReactComponents.Query<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables> query={AllGuideTitlesForUserDocument} {...props} />
    );
    

/**
 * __useAllGuideTitlesForUserQuery__
 *
 * To run a query within a React component, call `useAllGuideTitlesForUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGuideTitlesForUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGuideTitlesForUserQuery({
 *   variables: {
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useAllGuideTitlesForUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>) {
        return ApolloReactHooks.useQuery<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>(AllGuideTitlesForUserDocument, baseOptions);
      }
export function useAllGuideTitlesForUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>(AllGuideTitlesForUserDocument, baseOptions);
        }
export type AllGuideTitlesForUserQueryHookResult = ReturnType<typeof useAllGuideTitlesForUserQuery>;
export type AllGuideTitlesForUserLazyQueryHookResult = ReturnType<typeof useAllGuideTitlesForUserLazyQuery>;
export type AllGuideTitlesForUserQueryResult = ApolloReactCommon.QueryResult<AllGuideTitlesForUserQuery, AllGuideTitlesForUserQueryVariables>;
export const GetGuideBySlugDocument = gql`
    query GetGuideBySlug($slug: String!, $owner: String!) {
  allGuides(condition: {owner: $owner, slug: $slug}) {
    nodes {
      id
      title
      slug
      owner
      startDate
      ridesByGuide {
        totalCount
      }
      spotsByGuide {
        totalCount
      }
    }
  }
}
    `;
export type GetGuideBySlugComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>, 'query'> & ({ variables: GetGuideBySlugQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetGuideBySlugComponent = (props: GetGuideBySlugComponentProps) => (
      <ApolloReactComponents.Query<GetGuideBySlugQuery, GetGuideBySlugQueryVariables> query={GetGuideBySlugDocument} {...props} />
    );
    

/**
 * __useGetGuideBySlugQuery__
 *
 * To run a query within a React component, call `useGetGuideBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGuideBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGuideBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useGetGuideBySlugQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>) {
        return ApolloReactHooks.useQuery<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>(GetGuideBySlugDocument, baseOptions);
      }
export function useGetGuideBySlugLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>(GetGuideBySlugDocument, baseOptions);
        }
export type GetGuideBySlugQueryHookResult = ReturnType<typeof useGetGuideBySlugQuery>;
export type GetGuideBySlugLazyQueryHookResult = ReturnType<typeof useGetGuideBySlugLazyQuery>;
export type GetGuideBySlugQueryResult = ApolloReactCommon.QueryResult<GetGuideBySlugQuery, GetGuideBySlugQueryVariables>;