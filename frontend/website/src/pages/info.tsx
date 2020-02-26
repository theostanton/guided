import * as React from "react"
import { Container, GridColumn, Segment, Statistic, StatisticGroup } from "semantic-ui-react"
import Layout from "../components/root/Layout"

export default class InfoComponent extends React.Component {

  render() {
    return (
      <Layout>
        <Container>
          <StatisticGroup widths='2' size={"tiny"} pa>
            <Statistic label='App version' value={process.env.GATSBY_APP_VERSION}/>
            <Statistic label='Stage' value={process.env.GATSBY_STAGE}/>
          </StatisticGroup>
        </Container>
      </Layout>
    )
  }

}