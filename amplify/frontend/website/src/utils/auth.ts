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