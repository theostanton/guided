import Auth from "@aws-amplify/auth"


type User = {
  userId: string
  username: string
  email: string
}

const isBrowser = typeof window !== `undefined`

function getUser(): User | undefined {
  if (window.localStorage.gatsbyUser && window.localStorage.gatsbyUser !== "") {
    let user = JSON.parse(window.localStorage.gatsbyUser)
    return user ? {
      userId:user.username,
      username: user["custom:username"],
      email: user.email,
    } : undefined
  }
  return undefined
}

export function selfAsOwner(): string {
  const user = getUser()
  if (user) {
    return user.userId
  }
  throw new Error("Not logged in")
}

export function isLoggedIn(): boolean {
  if (!isBrowser) return false
  const user = getUser()
  return user?.username !== undefined
}

export function setUser(user: User) {
  console.log("setUser", JSON.stringify(user, null, 4))
  window.localStorage.gatsbyUser = JSON.stringify(user)
}

function clearUser() {
  window.localStorage.gatsbyUser = ""
}

export async function logout() {
  await Auth.signOut()
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
    await logout()
  }
}