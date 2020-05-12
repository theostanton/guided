import {
  GetUsernameDocument,
  GetUsernameQuery, GetUsernameQueryVariables,
  LoginDocument,
  LoginMutation,
  LoginMutationVariables, SignUpDocument, SignUpMutation, SignUpMutationVariables,
} from "api/generated"
import AuthStore from "."
import client from "api/client"

export async function signup(authStore: AuthStore, email: string, username: string, password: string): Promise<{
  error?: string
}> {

  const variables: SignUpMutationVariables = {
    username,
    email,
    password,
  }
  const result = await client.mutate<SignUpMutation>({
    mutation: SignUpDocument,
    variables,
  })

  if (result.errors && result.errors.length > 0) {
    return {
      error: result.errors.map(error => {
        return error.message
      }).join("\n"),
    }
  }


  return login(authStore, email, password)
}

export async function login(authStore: AuthStore, email: string, password: string): Promise<{
  error?: string
}> {


  function logError(message: string) {
    console.error(message)
  }

  const variables: LoginMutationVariables = {
    email,
    password,
  }


  const result = await client.mutate<LoginMutation>({
    mutation: LoginDocument,
    variables,
  })


  if (result.errors && result.errors.length > 0) {
    logError("LoginMutation error")
    result.errors.forEach(error => {
      logError(error.message)
    })
    return {
      error: result.errors.map(error => {
        return error.message
      }).join("\n"),
    }
  }

  const bearerToken = result.data!.authenticate!.jwtToken

  if (!result.data?.authenticate?.jwtToken) {
    return {
      error: "Failed to login",
    }
  }

  await authStore!.setUser({
    email,
    bearerToken,
  })

  const usernameResult = await client.query<GetUsernameQuery>({
      query: GetUsernameDocument,
      variables: {
        email,
      } as GetUsernameQueryVariables,
    },
  )


  if (usernameResult.errors && usernameResult.errors.length > 0) {
    logError("GetUsername error")
    usernameResult.errors.forEach(error => {
      logError(error.message)
    })

    await authStore.setUser(undefined)
    return {
      error: usernameResult.errors!.map(error => {
        return error.message
      }).join("\n"),
    }
  }

  const { colour, username } = usernameResult.data!.users!.nodes[0]!

  await authStore.setUser({
    username,
    email,
    bearerToken,
  })


  return {}
}
