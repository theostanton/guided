import { Result } from "."
import {
  GuideInfoFragment,
  RideFragment,
  SearchGuidesDocument,
  SearchGuidesQuery,
  SearchGuidesQueryVariables,
  SearchRidesDocument,
  SearchRidesQuery,
  SearchRidesQueryVariables,
  SearchUsersDocument,
  SearchUsersQuery,
  SearchUsersQueryVariables,
  SignUpMutationResult,
  UserInfoFragment,
} from "api/generated"
import { client } from "api"
import { GraphQLError } from "graphql"

function extractErrorMessage(errors: ReadonlyArray<GraphQLError> | undefined): string | undefined {
  if (errors && errors.length > 0) {
    return errors.map(({ message }) => {
      return message
    }).join("\n")
  }
}

export async function searchRides(variables: SearchRidesQueryVariables): Promise<Result<RideFragment>> {
  const { data, errors } = await client.query<SearchRidesQuery>({
    query: SearchRidesDocument,
    variables,
  })

  const errorMessage = extractErrorMessage(errors)
  if (errorMessage) {
    return Result.error(errorMessage)
  }

  if (data) {
    const { nodes: items, totalCount } = data.rides

    return Result.success(items, variables.offset, totalCount, variables.pageSize)
  }

  return Result.error("Something went wrong")
}

export async function searchGuides(variables: SearchGuidesQueryVariables): Promise<Result<GuideInfoFragment>> {
  const { data, errors } = await client.query<SearchGuidesQuery>({
    query: SearchGuidesDocument,
    variables,
  })

  const errorMessage = extractErrorMessage(errors)
  if (errorMessage) {
    return Result.error(errorMessage)
  }

  if (data) {
    const { nodes: items, totalCount } = data.guides
    return Result.success(items, variables.offset, totalCount, variables.pageSize)
  }

  return Result.error("Something went wrong")
}

export async function searchUsers(variables: SearchUsersQueryVariables): Promise<Result<UserInfoFragment>> {
  const { data, errors } = await client.query<SearchUsersQuery>({
    query: SearchUsersDocument,
    variables,
  })

  const errorMessage = extractErrorMessage(errors)
  if (errorMessage) {
    return Result.error(errorMessage)
  }

  if (data) {
    const { nodes: items, totalCount } = data.users
    return Result.success(items, variables.offset, totalCount, variables.pageSize)
  }

  return Result.error("Something went wrong")
}