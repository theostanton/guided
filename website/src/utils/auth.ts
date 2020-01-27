import Auth from "@aws-amplify/auth"


type User = {
  username: string
  email: string
}

const isBrowser = typeof window !== `undefined`

function getUser(): User | undefined {
  if (window.localStorage.gatsbyUser) {
    let user = JSON.parse(window.localStorage.gatsbyUser)
    return user ? {
      username: user["custom:username"],
      email: user.email,
    } : undefined
  }
  return undefined
}

export function isLoggedIn(): boolean {
  if (!isBrowser) return false
  const user = getUser()
  return user?.username !== undefined
}

export function setUser(user: User) {
  window.localStorage.gatsbyUser = JSON.stringify(user)
}

function clearUser() {
  window.localStorage.gatsbyUser = ""
}

export function logout() {
  clearUser()
}

export function getCurrentUser(): User | undefined {
  if (isBrowser) {
    return getUser()
  }
}

export async function fetchUser(): Promise<void> {
  try {
    const user = await Auth.currentAuthenticatedUser()
    const userInfo: User = {
      ...user.attributes,
      username: user.username,
    }
    setUser(userInfo)
  } catch (e) {
    logout()
  }
}