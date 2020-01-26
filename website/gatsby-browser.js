import { fetchUser } from "./src/utils/auth"
import "./src/css/semantic.min.css"

export const onRouteUpdate = (state, page, pages) => {
  fetchUser().then()
}
