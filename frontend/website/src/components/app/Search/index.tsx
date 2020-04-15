import AuthStore from "model/AuthStore"
import { inject } from "mobx-react"
import * as React from "react"
import {
  Dropdown,
  Flag,
  FlagNameValues,
  Grid,
  GridColumn,
  Input,
  Message,
  Segment,
  Card, Pagination,
} from "semantic-ui-react"
import { RouteComponentProps } from "@reach/router"
import { COUNTRIES } from "utils/human"
import { log, logJson, logObject } from "utils/logger"
import { client } from "api"
import { GuideInfoFragment, SearchGuidesDocument, SearchGuidesQuery, SearchGuidesQueryVariables } from "api/generated"
import GuideItem from "../Guides/GuideItem"
import AwesomeDebouncePromise from "awesome-debounce-promise"

type Type = "user" | "guide" | "ride"

const PER_PAGE = 8

interface Props extends RouteComponentProps {
  authStore?: AuthStore
}

type State = {
  loading: boolean
  countryQuery: string
  type: Type
  results: readonly GuideInfoFragment[] | undefined
  error: string
  parameters: Parameters
  totalCount: number
}

type DropdownOption = {
  key: string,
  text: React.ReactElement | string,
  value: string,
  image?: React.ReactElement
}

const COUNTRY_OPTIONS: DropdownOption[] = Object.keys(COUNTRIES).map(key => {
  const name = COUNTRIES[key]
  return {
    key,
    text: name,
    image: <Flag name={key.toLowerCase() as FlagNameValues}/>,
    value: key,
  }
})

const TYPE_OPTIONS: DropdownOption[] = [
  {
    key: "user",
    text: "Users",
    value: "user",
  },
  {
    key: "guide",
    text: "Guides",
    value: "guide",
  },
  {
    key: "ride",
    text: "Rides",
    value: "ride",
  },

]

type Parameters = {
  query: string
  page: number
  countryCodes: string[]
}

@inject("authStore")
export default class SearchComponent extends React.Component<Props, State> {

  private debouncedQuery: (parameters: Parameters) => Promise<void>

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      countryQuery: "",
      type: "guide",
      results: undefined,
      error: undefined,
      totalCount: 0,
      parameters: {
        page: 0,
        countryCodes: [],
        query: "",
      },
    }

    this.debouncedQuery = AwesomeDebouncePromise(
      this.query.bind(this),
      500,
      {},
    )
  }


  async handleDropdownChange(_: any, { value }: { value: string[] }) {
    await this.debouncedQuery({
      ...this.state.parameters,
      countryCodes: value,
    })

  }

  handleSearchChange(_: any, { searchQuery }: { searchQuery: string }) {
    this.setState({
      countryQuery: searchQuery,
    })
  }

  async onQueryChange(_: any, { value }: { value: string }) {
    await this.debouncedQuery({
      ...this.state.parameters,
      query: value,
    })
  }

  async componentDidMount() {
    await this.query({
      query: "",
      countryCodes: [],
      page: 0,
    })
  }

  async query(parameters: Parameters) {
    logJson(parameters, "query()")
    this.setState({
      parameters,
      loading: true,
    })
    const variables: SearchGuidesQueryVariables = {
      query: `%${parameters.query}%`,
      offset: parameters.page * PER_PAGE,
      pageSize: PER_PAGE,
      countries: parameters.countryCodes,
    }
    const result = await client.query<SearchGuidesQuery>({
      query: SearchGuidesDocument,
      variables,
    })

    if (result.errors) {
      this.setState({
        results: undefined,
        parameters,
        loading: false,
        error: result.errors.map(error => {
          return error.message
        }).join("\n"),
      })
    } else {
      this.setState({
        error: undefined,
        parameters,
        loading: false,
        results: result.data.guides.nodes,
        totalCount: result.data.guides.totalCount,
      })
    }
  }

  listItems(): React.ReactElement[] | undefined {
    if (this.state.results) {
      return this.state.results.map(guide => {
        return <GuideItem isOwner={this.props.authStore.owner === guide.owner} guide={guide}/>
      })
    }
  }


  render(): React.ReactElement {
    logJson(this.state.totalCount, "totalCount")
    return <Segment>
      <Grid columns={"equal"}>
        <GridColumn>
          <Input
            fluid
            icon='search'
            iconPosition='left'
            placeholder='Search'
            onChange={this.onQueryChange.bind(this)}
          />
        </GridColumn>
        <GridColumn>
          <Dropdown
            fluid
            selection
            multiple
            options={COUNTRY_OPTIONS}
            placeholder='Countries'
            onChange={this.handleDropdownChange.bind(this)}
            search
            onSearchChange={this.handleSearchChange.bind(this)}
          />
        </GridColumn>
        <GridColumn width={3}>
          <Dropdown
            fluid
            selection
            options={TYPE_OPTIONS}
            placeholder='Type'
            value={this.state.type}
            onChange={this.handleDropdownChange.bind(this)}
            search
            onSearchChange={this.handleSearchChange.bind(this)}
          />
        </GridColumn>
      </Grid>

      <Segment loading={this.state.loading} style={{ minHeight: 200 }}>

        {this.state.error && <Message error>{this.state.error}</Message>}

        <div style={{
          display: "block"
        }}>
          <Pagination totalPages={Math.ceil(this.state.totalCount / PER_PAGE)}
                      style={{
                        marginBottom: "1em",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      onPageChange={async (_, props) => {
                        const page = parseInt(props.activePage.toString())
                        const parameters = {
                          ...this.state.parameters,
                          page,
                        }
                        await this.debouncedQuery(parameters)
                      }}
                      siblingRange={2}
                      ellipsisItem
                      firstItem={null}
                      lastItem={null}
                      defaultActivePage={this.state.parameters.page}
                      disabled={this.state.loading}
                      boundaryRange={3}
          />
        </div>

        <Card.Group itemsPerRow={2}
                    children={this.listItems()}
        />
      </Segment>
    </Segment>
  }

}