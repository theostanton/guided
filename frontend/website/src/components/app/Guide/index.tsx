import * as React from "react"
import GuideStore from "model/GuideStore"
import { Provider } from "mobx-react"
import Content from "./content"
import { useSubscription, ApolloProvider } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import {
  GetGuideBySlugComponent, GetGuideBySlugDocument,
  GetGuideBySlugSubscription,
  GetGuideBySlugSubscriptionResult, GuideBySlugFragment, useGetGuideBySlugSubscription,
} from "../../../api/generated"
import { client } from "api"
import { OnSubscriptionDataOptions } from "@apollo/react-common/lib/types/types"
import { logJson } from "../../../utils/logger"
import { Segment } from "semantic-ui-react"

export type Props = {
  slug: string
  owner: string
  close: () => void
}

export default class GuideComponent extends React.Component<Props> {

  guideStore: GuideStore


  Subscription({ children }: { children: any }) {
    logJson(Object.keys(children), "children")
    const { data, loading, error }: GetGuideBySlugSubscriptionResult = useGetGuideBySlugSubscription(
      {
        onSubscriptionData: (result) => {
          const guide = result.subscriptionData.data.guides.nodes[0]!
          logJson(guide, "guide")
          return false
        },
        fetchPolicy: "network-only",
        onSubscriptionComplete: () => {
          console.log("onSubscriptionComplete")
        },
        shouldResubscribe: (data) => {
          console.log("shouldResubscribe")
          return true
        },
        skip: false,
        variables: this.props,
      },
    )
    console.log("loading=" + loading)
    if (error) {
      console.error(error)
    }
    return children
  }

  constructor(props) {
    super(props)
    this.guideStore = new GuideStore(props.slug, props.owner)
  }

  componentDidMount(): void {
    // this.guideStore.subscribe()
  }

  componentWillUnmount(): void {
    // this.guideStore.unsubscribe()
  }

  onSubscriptionData(result: GetGuideBySlugSubscriptionResult): void {
    if (result.data) {
      const guide = result.data.guides.nodes[0]!
      logJson("onSubscriptionData")
      // this.guideStore.updateGuide(guide)
    }
  }

  render() {
    const Subscription = this.Subscription.bind(this)
    return <Provider guideStore={this.guideStore}>
      <Subscription>
        < Content close={this.props.close}/>
      </Subscription>
      {/*<GetGuideBySlugComponent client={client}*/}
      {/*                         variables={this.props}*/}
      {/*                         fetchPolicy={"network-only"}*/}
      {/*                         onSubscriptionComplete={() => {*/}
      {/*                           console.log("onSubscriptionComplete")*/}
      {/*                         }*/}
      {/*                         }*/}
      {/*                         onSubscriptionData={({ subscriptionData }: OnSubscriptionDataOptions<GetGuideBySlugSubscription>) => {*/}
      {/*                           console.log("onSubscriptionData")*/}
      {/*                           this.onSubscriptionData(subscriptionData)*/}
      {/*                         }*/}
      {/*                         }/>*/}
    </Provider>
  }
}