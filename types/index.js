"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/* DO NOT EDIT! This file is auto-generated by graphql-code-generator - see `codegen.yml` */
const graphql_tag_1 = tslib_1.__importDefault(require("graphql-tag"));
const ApolloReactHooks = tslib_1.__importStar(require("@apollo/react-hooks"));
var GuidesOrderBy;
(function (GuidesOrderBy) {
    GuidesOrderBy["Natural"] = "NATURAL";
    GuidesOrderBy["IdAsc"] = "ID_ASC";
    GuidesOrderBy["IdDesc"] = "ID_DESC";
    GuidesOrderBy["TitleAsc"] = "TITLE_ASC";
    GuidesOrderBy["TitleDesc"] = "TITLE_DESC";
    GuidesOrderBy["SlugAsc"] = "SLUG_ASC";
    GuidesOrderBy["SlugDesc"] = "SLUG_DESC";
    GuidesOrderBy["OwnerAsc"] = "OWNER_ASC";
    GuidesOrderBy["OwnerDesc"] = "OWNER_DESC";
    GuidesOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    GuidesOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
})(GuidesOrderBy = exports.GuidesOrderBy || (exports.GuidesOrderBy = {}));
var RidesOrderBy;
(function (RidesOrderBy) {
    RidesOrderBy["Natural"] = "NATURAL";
    RidesOrderBy["IdAsc"] = "ID_ASC";
    RidesOrderBy["IdDesc"] = "ID_DESC";
    RidesOrderBy["GuideAsc"] = "GUIDE_ASC";
    RidesOrderBy["GuideDesc"] = "GUIDE_DESC";
    RidesOrderBy["FromSpotAsc"] = "FROM_SPOT_ASC";
    RidesOrderBy["FromSpotDesc"] = "FROM_SPOT_DESC";
    RidesOrderBy["ToSpotAsc"] = "TO_SPOT_ASC";
    RidesOrderBy["ToSpotDesc"] = "TO_SPOT_DESC";
    RidesOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    RidesOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
})(RidesOrderBy = exports.RidesOrderBy || (exports.RidesOrderBy = {}));
var SpotsOrderBy;
(function (SpotsOrderBy) {
    SpotsOrderBy["Natural"] = "NATURAL";
    SpotsOrderBy["IdAsc"] = "ID_ASC";
    SpotsOrderBy["IdDesc"] = "ID_DESC";
    SpotsOrderBy["LabelAsc"] = "LABEL_ASC";
    SpotsOrderBy["LabelDesc"] = "LABEL_DESC";
    SpotsOrderBy["GuideAsc"] = "GUIDE_ASC";
    SpotsOrderBy["GuideDesc"] = "GUIDE_DESC";
    SpotsOrderBy["NightsAsc"] = "NIGHTS_ASC";
    SpotsOrderBy["NightsDesc"] = "NIGHTS_DESC";
    SpotsOrderBy["LockedAsc"] = "LOCKED_ASC";
    SpotsOrderBy["LockedDesc"] = "LOCKED_DESC";
    SpotsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    SpotsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
})(SpotsOrderBy = exports.SpotsOrderBy || (exports.SpotsOrderBy = {}));
var UsersOrderBy;
(function (UsersOrderBy) {
    UsersOrderBy["Natural"] = "NATURAL";
    UsersOrderBy["UsernameAsc"] = "USERNAME_ASC";
    UsersOrderBy["UsernameDesc"] = "USERNAME_DESC";
    UsersOrderBy["EmailAsc"] = "EMAIL_ASC";
    UsersOrderBy["EmailDesc"] = "EMAIL_DESC";
    UsersOrderBy["PasswordAsc"] = "PASSWORD_ASC";
    UsersOrderBy["PasswordDesc"] = "PASSWORD_DESC";
    UsersOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    UsersOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
})(UsersOrderBy = exports.UsersOrderBy || (exports.UsersOrderBy = {}));
exports.SomeQueryDocument = graphql_tag_1.default `
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
function useSomeQueryQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.SomeQueryDocument, baseOptions);
}
exports.useSomeQueryQuery = useSomeQueryQuery;
function useSomeQueryLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.SomeQueryDocument, baseOptions);
}
exports.useSomeQueryLazyQuery = useSomeQueryLazyQuery;
exports.MyCreateGuideDocument = graphql_tag_1.default `
    mutation MyCreateGuide($guide: GuideInput!) {
  createGuide(input: {guide: $guide}) {
    guide {
      id
    }
  }
}
    `;
/**
 * __useMyCreateGuideMutation__
 *
 * To run a mutation, you first call `useMyCreateGuideMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMyCreateGuideMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [myCreateGuideMutation, { data, loading, error }] = useMyCreateGuideMutation({
 *   variables: {
 *      guide: // value for 'guide'
 *   },
 * });
 */
function useMyCreateGuideMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.MyCreateGuideDocument, baseOptions);
}
exports.useMyCreateGuideMutation = useMyCreateGuideMutation;
exports.MyDeleteGuideDocument = graphql_tag_1.default `
    mutation MyDeleteGuide($guideId: String!) {
  deleteGuideById(input: {id: $guideId}) {
    deletedGuideId
  }
}
    `;
/**
 * __useMyDeleteGuideMutation__
 *
 * To run a mutation, you first call `useMyDeleteGuideMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMyDeleteGuideMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [myDeleteGuideMutation, { data, loading, error }] = useMyDeleteGuideMutation({
 *   variables: {
 *      guideId: // value for 'guideId'
 *   },
 * });
 */
function useMyDeleteGuideMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.MyDeleteGuideDocument, baseOptions);
}
exports.useMyDeleteGuideMutation = useMyDeleteGuideMutation;
exports.AllGuideTitlesForUserDocument = graphql_tag_1.default `
    query AllGuideTitlesForUser($owner: String!) {
  allGuides(condition: {owner: $owner}) {
    nodes {
      id
      title
      slug
    }
  }
}
    `;
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
function useAllGuideTitlesForUserQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.AllGuideTitlesForUserDocument, baseOptions);
}
exports.useAllGuideTitlesForUserQuery = useAllGuideTitlesForUserQuery;
function useAllGuideTitlesForUserLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.AllGuideTitlesForUserDocument, baseOptions);
}
exports.useAllGuideTitlesForUserLazyQuery = useAllGuideTitlesForUserLazyQuery;
exports.GetGuideBySlugDocument = graphql_tag_1.default `
    query GetGuideBySlug($slug: String!, $owner: String!) {
  allGuides(condition: {owner: $owner, slug: $slug}) {
    nodes {
      id
      title
      slug
    }
  }
}
    `;
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
function useGetGuideBySlugQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.GetGuideBySlugDocument, baseOptions);
}
exports.useGetGuideBySlugQuery = useGetGuideBySlugQuery;
function useGetGuideBySlugLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.GetGuideBySlugDocument, baseOptions);
}
exports.useGetGuideBySlugLazyQuery = useGetGuideBySlugLazyQuery;
//# sourceMappingURL=index.js.map