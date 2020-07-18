import React, { ReactElement } from "react"
import { Result, SearchType } from "model/SearchStore"
import SearchStore from "model/SearchStore"
import AuthStore from "model/AuthStore"
import {
  Message,
  Segment,
  Card,
  SemanticWIDTHS,
  Header,
  Pagination,
  List,
  Icon,
  Grid,
  GridColumn, Button,
} from "semantic-ui-react"
import { GuideInfoFragment, RideFragment, UserInfoFragment } from "../../../api/generated"
import GuideItem from "../Guides/GuideItem"
import { inject } from "mobx-react"
import { logJson } from "utils/logger"
import UserItem from "../../items/UserItem"
import RideItem from "../../items/RideItem"

interface Props {
  type: SearchType
  result: Result<any>
  authStore?: AuthStore
  searchStore?: SearchStore
  itemsPerRow: SemanticWIDTHS
}

const TITLES: { [type in SearchType]: string } = {
  guides: "Guides",
  users: "Users",
  rides: "Rides",
}

function isGuide(item: any): item is GuideInfoFragment {
  return item["__typename"] === "Guide"
}

function isUser(item: any): item is UserInfoFragment {
  return item["__typename"] === "User"
}

function isRide(item: any): item is RideFragment {
  return item["__typename"] === "Ride"
}

@inject("authStore", "searchStore")
export default class SearchResult extends React.Component<Props> {

  get searchStore(): SearchStore {
    return this.props.searchStore!
  }

  renderGuide(guide: GuideInfoFragment): React.ReactElement {
    return <GuideItem key={guide.id} isOwner={this.props.authStore.owner === guide.owner} guide={guide}/>
  }

  renderRide(ride: RideFragment): React.ReactElement {
    return <RideItem key={ride.id} isOwner={this.props.authStore.owner === ride.owner} ride={ride}/>
  }

  renderUser(user: UserInfoFragment): React.ReactElement {
    return <UserItem key={user.username} user={user}/>
  }

  renderFooter(): React.ReactElement | undefined {
    if (this.searchStore.type) {
      return this.renderPagination()
    }
  }

  renderComplete(): ReactElement {
    const result = this.props.result
    const items = this.searchStore.type ? result.contents.items : result.contents.items.slice(0, 2)
    return <div style={{ marginTop: "1em" }}>
      <Card.Group itemsPerRow={this.props.itemsPerRow}>
        {items.map(item => {
          if (isGuide(item)) {
            return this.renderGuide(item)
          } else if (isUser(item)) {
            return this.renderUser(item)
          } else if (isRide(item)) {
            return this.renderRide(item)
          } else {
            return <Message>Error</Message>
          }
        })}
      </Card.Group>
      {this.renderFooter()}
    </div>
  }

  renderPagination(): ReactElement {
    const result = this.props.result
    return <div style={{
      width: "min-content",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "2em",
    }}>
      <Pagination totalPages={result.totalPages}
                  onPageChange={async (_, props) => {
                    //TODO Prev and Next buttons fire null
                    if (props.activePage.toString()) {
                      const page = parseInt(props.activePage.toString()) - 1
                      await this.props.searchStore!.updateCurrentPage(page)
                    }
                  }}
                  siblingRange={2}
                  ellipsisItem
                  firstItem={null}
                  lastItem={null}
                  activePage={this.props.searchStore.currentPage + 1}
                  disabled={this.props.searchStore.loading.page}
                  boundaryRange={3}
      /></div>
  }

  contents(): ReactElement {
    const result = this.props.result
    switch (result.status) {
      case "error":
        return <Message error>{result.error}</Message>
      case "loading":
        if (result.contents) {
          return this.renderComplete()
        } else {
          return <Segment loading/>
        }
      case "complete":
        return this.renderComplete()
      default:
        return <Segment>DEFAULT</Segment>
    }
  }

  render(): ReactElement {
    const result = this.props.result

    return <div style={{ marginTop: "2em", paddingBottom: "5em" }}>

      <Grid verticalAlign={"bottom"}>
        <GridColumn stretched>
          <div style={{
            display: "inline-block",
          }}>
            <Header as={"h1"} style={{ display: "inline", marginRight: "0.5em" }}>{TITLES[this.props.type]}</Header>
            {result.contents &&
            <Header as={"h1"}
                    style={{
                      color: "grey",
                      display: "inline",
                      fontWeight: "normal",
                    }}>
              {result.contents.totalCount}
            </Header>}
          </div>
        </GridColumn>
        {!this.searchStore.type && <GridColumn floated={"right"} width={3}>
          <Button floated={"right"} basic size={'large'} loading={result.status === "loading"} onClick={async () => {
            await this.searchStore.updateType(this.props.type)
          }
          }>View all</Button>
        </GridColumn>}
      </Grid>
      {this.contents()}
    </div>

  }
}