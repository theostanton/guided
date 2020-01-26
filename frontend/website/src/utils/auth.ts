import Auth from "@aws-amplify/auth"

const isBrowser = typeof window !== `undefined`

function getUser() {
  if (window.localStorage.gatsbyUser) {
    let user = JSON.parse(window.localStorage.gatsbyUser)
    return user ? user : {}
  }
  return {}
}

export function isLoggedIn(): boolean {
  if (!isBrowser) return false
  const user = getUser()
  console.log("user", user)
  if (user) return !!user.username
}

export function setUser(user: any) {
  window.localStorage.gatsbyUser = JSON.stringify(user)
}

export function logout() {
  setUser({})
}

export function getCurrentUser() {
  return isBrowser && getUser()
}

export async function fetchUser(): Promise<void> {
  try {
    const user = await Auth.currentAuthenticatedUser()
    const userInfo = {
      ...user.attributes,
      username: user.username,
    }
    console.log("Got current authenticated user")
    console.log(JSON.stringify(user, null, 4))
    setUser(userInfo)
  } catch (e) {
    console.error("Not logged in")
    logout()
  }
}