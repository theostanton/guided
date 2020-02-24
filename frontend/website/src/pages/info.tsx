import * as React from "react"
import { Container, GridColumn, Segment, Statistic, StatisticGroup } from "semantic-ui-react"

export default class InfoComponent extends React.Component {

  render() {
    return (
      <Container>
        <StatisticGroup widths='2' size={"tiny"}>
          <Statistic label='App version' value={process.env.GATSBY_APP_VERSION}/>
          <Statistic label='Stage' value={process.env.GATSBY_STAGE}/>
        </StatisticGroup>
      </Container>
    )
  }

}