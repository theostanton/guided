import AuthStore from "model/AuthStore"
import { inject, observer } from "mobx-react"
import * as React from "react"
import {
  Container,
  Dropdown,
  Flag,
  FlagNameValues,
  Grid,
  GridColumn,
  Input,
} from "semantic-ui-react"
import { RouteComponentProps } from "@reach/router"
import { COUNTRIES } from "utils/human"
import SearchStore, { SearchType } from "model/SearchStore"
import SearchResult from "./SearchResult"
import { ReactElement, ReactNode } from "react"
import { Helmet } from "react-helmet"

interface Props extends RouteComponentProps {
  authStore?: AuthStore
  searchStore?: SearchStore
}

type DropdownOption = {
  key: string,
  text: React.ReactElement | string,
  value: string,
  order?: string
  image?: React.ReactElement
}

function countryOptions(countryCodes: string[]): DropdownOption[] {
  return countryCodes.map(code => {
    const name = COUNTRIES[code]
    return {
      key: code,
      text: name,
      order: name,
      image: <Flag name={code.toLowerCase() as FlagNameValues}/>,
      value: code,
    }
  }).sort((a, b) => {
    return a.order?.localeCompare(b.order)
  })
}

const TYPE_OPTIONS: DropdownOption[] = [
  {
    key: "all",
    text: "All",
    value: "all",
  },
  {
    key: "users",
    text: "Users",
    value: "users",
  },
  {
    key: "guides",
    text: "Guides",
    value: "guides",
  },
  {
    key: "rides",
    text: "Rides",
    value: "rides",
  },

]

@inject("authStore", "searchStore")
@observer
export default class SearchComponent extends React.Component<Props> {

  get searchStore(): SearchStore {
    return this.props.searchStore!
  }

  async handleCountryChange(_: any, { value }: { value: string[] }) {
    await this.searchStore.updateCountries(value)
  }

  async handleTypeChange(_: any, { value }: { value: SearchType }) {
    await this.searchStore.updateType(value)
  }

  async onQueryChange(_: any, { value }: { value: string }) {
    await this.searchStore.updateContentQuery(value)
  }

  async componentDidMount() {
    await this.searchStore.refetch()
  }

  renderHeader(): ReactElement {
    return <Grid columns={"equal"}>
      <GridColumn width={6}>
        <Input
          fluid
          icon='search'
          iconPosition='left'
          placeholder='Search'
          loading={this.searchStore.loading.query}
          onChange={this.onQueryChange.bind(this)}
        />
      </GridColumn>
      <GridColumn >
        <Dropdown
          fluid
          selection
          multiple
          options={countryOptions(this.searchStore.availableCountryCodes)}
          placeholder='Countries'
          closeOnChange
          loading={this.searchStore.loading.countries}
          onChange={this.handleCountryChange.bind(this)}
          search
        />
      </GridColumn>
      <GridColumn width={3}>
        <Dropdown
          fluid
          selection
          options={TYPE_OPTIONS}
          placeholder='Type'
          value={this.searchStore.type || "all"}
          loading={this.searchStore.loading.type}
          onChange={this.handleTypeChange.bind(this)}
        />
      </GridColumn>
    </Grid>
  }

  renderResults(): ReactNode | undefined {
    if (this.searchStore.type) {
      return <SearchResult type={this.searchStore.type}
                           result={this.searchStore.results[this.searchStore.type]}
                           itemsPerRow={2}/>
    } else {
      return ["guides", "rides", "users"].map((type) => {
        return <SearchResult type={type as SearchType}
                             result={this.searchStore.results[type]}
                             itemsPerRow={2}/>
      })
    }
  }

  render(): React.ReactElement {
    return <div>
      <Helmet title={`Search - Riders Bible`} defer={true}/>
      {this.renderHeader()}
      {this.renderResults()}
    </div>
  }

}