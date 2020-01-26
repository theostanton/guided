/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import Auth from "@aws-amplify/auth"
import { logout, setUser } from "./src/utils/auth"
// import { setUser } from './src/utils/auth'

export const onRouteUpdate = (state, page, pages) => {
  Auth.currentAuthenticatedUser()
    .then(user => {
      const userInfo = {
        ...user.attributes,
        username: user.username,
      }
      console.log("Got current authenticated user")
      console.log(JSON.stringify(user, null, 4))
      setUser(userInfo)
    })
    .catch(err => {
      console.error("not logged in")
      logout()
    })
}
