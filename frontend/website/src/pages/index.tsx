import * as React from "react"

import Layout from "../components/layout"

import Amplify from "aws-amplify"
import config from "../aws-exports"

Amplify.configure(config)

const IndexPage = () => (
  <Layout>
    {/*<SEO title="Home"/>*/}
    {/*<Segment>*/}
    {/*  <Link to="/login/">Login</Link>*/}
    {/*  <Link to="/signup/">Signup</Link>*/}
    {/*</Segment>*/}
  </Layout>

)

export default IndexPage
