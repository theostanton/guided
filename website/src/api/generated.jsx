"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const React = __importStar(require("react"));
const ApolloReactComponents = __importStar(require("@apollo/react-components"));
const ApolloReactHooks = __importStar(require("@apollo/react-hooks"));
var GuidesOrderBy;
(function (GuidesOrderBy) {
    GuidesOrderBy["IdAsc"] = "ID_ASC";
    GuidesOrderBy["IdDesc"] = "ID_DESC";
    GuidesOrderBy["Natural"] = "NATURAL";
    GuidesOrderBy["OwnerAsc"] = "OWNER_ASC";
    GuidesOrderBy["OwnerDesc"] = "OWNER_DESC";
    GuidesOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    GuidesOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    GuidesOrderBy["SlugAsc"] = "SLUG_ASC";
    GuidesOrderBy["SlugDesc"] = "SLUG_DESC";
    GuidesOrderBy["StartDateAsc"] = "START_DATE_ASC";
    GuidesOrderBy["StartDateDesc"] = "START_DATE_DESC";
    GuidesOrderBy["TitleAsc"] = "TITLE_ASC";
    GuidesOrderBy["TitleDesc"] = "TITLE_DESC";
})(GuidesOrderBy = exports.GuidesOrderBy || (exports.GuidesOrderBy = {}));
var RidesOrderBy;
(function (RidesOrderBy) {
    RidesOrderBy["FromSpotAsc"] = "FROM_SPOT_ASC";
    RidesOrderBy["FromSpotDesc"] = "FROM_SPOT_DESC";
    RidesOrderBy["GuideAsc"] = "GUIDE_ASC";
    RidesOrderBy["GuideDesc"] = "GUIDE_DESC";
    RidesOrderBy["IdAsc"] = "ID_ASC";
    RidesOrderBy["IdDesc"] = "ID_DESC";
    RidesOrderBy["Natural"] = "NATURAL";
    RidesOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    RidesOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    RidesOrderBy["ToSpotAsc"] = "TO_SPOT_ASC";
    RidesOrderBy["ToSpotDesc"] = "TO_SPOT_DESC";
})(RidesOrderBy = exports.RidesOrderBy || (exports.RidesOrderBy = {}));
var SpotsOrderBy;
(function (SpotsOrderBy) {
    SpotsOrderBy["GuideAsc"] = "GUIDE_ASC";
    SpotsOrderBy["GuideDesc"] = "GUIDE_DESC";
    SpotsOrderBy["IdAsc"] = "ID_ASC";
    SpotsOrderBy["IdDesc"] = "ID_DESC";
    SpotsOrderBy["LabelAsc"] = "LABEL_ASC";
    SpotsOrderBy["LabelDesc"] = "LABEL_DESC";
    SpotsOrderBy["LockedAsc"] = "LOCKED_ASC";
    SpotsOrderBy["LockedDesc"] = "LOCKED_DESC";
    SpotsOrderBy["Natural"] = "NATURAL";
    SpotsOrderBy["NightsAsc"] = "NIGHTS_ASC";
    SpotsOrderBy["NightsDesc"] = "NIGHTS_DESC";
    SpotsOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    SpotsOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
})(SpotsOrderBy = exports.SpotsOrderBy || (exports.SpotsOrderBy = {}));
var UsersOrderBy;
(function (UsersOrderBy) {
    UsersOrderBy["EmailAsc"] = "EMAIL_ASC";
    UsersOrderBy["EmailDesc"] = "EMAIL_DESC";
    UsersOrderBy["Natural"] = "NATURAL";
    UsersOrderBy["PasswordHashAsc"] = "PASSWORD_HASH_ASC";
    UsersOrderBy["PasswordHashDesc"] = "PASSWORD_HASH_DESC";
    UsersOrderBy["PrimaryKeyAsc"] = "PRIMARY_KEY_ASC";
    UsersOrderBy["PrimaryKeyDesc"] = "PRIMARY_KEY_DESC";
    UsersOrderBy["UsernameAsc"] = "USERNAME_ASC";
    UsersOrderBy["UsernameDesc"] = "USERNAME_DESC";
})(UsersOrderBy = exports.UsersOrderBy || (exports.UsersOrderBy = {}));
exports.SomeQueryDocument = graphql_tag_1.default `
    query SomeQuery {
  users {
    totalCount
    nodes {
      email
      username
    }
  }
}
    `;
exports.SomeQueryComponent = (props) => (<ApolloReactComponents.Query query={exports.SomeQueryDocument} {...props}/>);
function useSomeQueryQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.SomeQueryDocument, baseOptions);
}
exports.useSomeQueryQuery = useSomeQueryQuery;
function useSomeQueryLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.SomeQueryDocument, baseOptions);
}
exports.useSomeQueryLazyQuery = useSomeQueryLazyQuery;
exports.CreateGuideDocument = graphql_tag_1.default `
    mutation CreateGuide($guide: GuideInput!) {
  createGuide(input: {guide: $guide}) {
    guide {
      id
    }
  }
}
    `;
exports.CreateGuideComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.CreateGuideDocument} {...props}/>);
function useCreateGuideMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.CreateGuideDocument, baseOptions);
}
exports.useCreateGuideMutation = useCreateGuideMutation;
exports.DeleteGuideDocument = graphql_tag_1.default `
    mutation DeleteGuide($guideId: String!) {
  deleteGuide(input: {id: $guideId}) {
    guide {
      id
    }
  }
}
    `;
exports.DeleteGuideComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.DeleteGuideDocument} {...props}/>);
function useDeleteGuideMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.DeleteGuideDocument, baseOptions);
}
exports.useDeleteGuideMutation = useDeleteGuideMutation;
exports.AllGuideTitlesForUserDocument = graphql_tag_1.default `
    query AllGuideTitlesForUser($owner: String!) {
  guides(condition: {owner: $owner}) {
    nodes {
      id
      title
      slug
      owner
    }
  }
}
    `;
exports.AllGuideTitlesForUserComponent = (props) => (<ApolloReactComponents.Query query={exports.AllGuideTitlesForUserDocument} {...props}/>);
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
  guides(condition: {owner: $owner, slug: $slug}) {
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
exports.GetGuideBySlugComponent = (props) => (<ApolloReactComponents.Query query={exports.GetGuideBySlugDocument} {...props}/>);
function useGetGuideBySlugQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.GetGuideBySlugDocument, baseOptions);
}
exports.useGetGuideBySlugQuery = useGetGuideBySlugQuery;
function useGetGuideBySlugLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.GetGuideBySlugDocument, baseOptions);
}
exports.useGetGuideBySlugLazyQuery = useGetGuideBySlugLazyQuery;
exports.LoginDocument = graphql_tag_1.default `
    mutation Login($email: String!, $password: String!) {
  authenticate(input: {email: $email, password: $password}) {
    jwtToken
  }
}
    `;
exports.LoginComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.LoginDocument} {...props}/>);
function useLoginMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.LoginDocument, baseOptions);
}
exports.useLoginMutation = useLoginMutation;
exports.SignUpDocument = graphql_tag_1.default `
    mutation SignUp($username: String!, $email: String!, $password: String!) {
  register(input: {_email: $email, _username: $username, _password: $password}) {
    user {
      username
      email
    }
  }
}
    `;
exports.SignUpComponent = (props) => (<ApolloReactComponents.Mutation mutation={exports.SignUpDocument} {...props}/>);
function useSignUpMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.SignUpDocument, baseOptions);
}
exports.useSignUpMutation = useSignUpMutation;
exports.GetUsernameDocument = graphql_tag_1.default `
    query GetUsername($email: String!) {
  users(condition: {email: $email}) {
    nodes {
      username
    }
  }
}
    `;
exports.GetUsernameComponent = (props) => (<ApolloReactComponents.Query query={exports.GetUsernameDocument} {...props}/>);
function useGetUsernameQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.GetUsernameDocument, baseOptions);
}
exports.useGetUsernameQuery = useGetUsernameQuery;
function useGetUsernameLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.GetUsernameDocument, baseOptions);
}
exports.useGetUsernameLazyQuery = useGetUsernameLazyQuery;
//# sourceMappingURL=generated.jsx.map