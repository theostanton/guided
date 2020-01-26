import "../css/semantic.min.css"
import * as React from "react"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"

import "./layout.css"
import { Menu, Segment, Container } from "semantic-ui-react"
import { isLoggedIn, logout } from "../utils/auth"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const loggedIn = isLoggedIn()
  console.log("loggedIn", loggedIn)
  return (
    <Container style={{ margin: 20 }}>
      <Menu attached={true} borderless={true}>
        <Menu.Item name={data.site.siteMetadata.title}/>
        {loggedIn === false &&
        <Menu.Menu position='right'>
          <Menu.Item name='Login'><Link to={"/login"}>Login</Link></Menu.Item>
          <Menu.Item name='Signup'><Link to={"/signup"}>Signup</Link></Menu.Item>
        </Menu.Menu>
        }
        {loggedIn === true &&
        <Menu.Menu position='right'>
          <Menu.Item name='Logout' onClick={async () => {
            logout()
            await navigate("/")
          }
          }/>
        </Menu.Menu>
        }
      </Menu>
      {children}
    </Container>
  )
}

export default Layout
