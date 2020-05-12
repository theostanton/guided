import GuidesStore from "model/GuidesStore"
import { FlatList, StyleSheet } from "react-native"
import React from "react"
import GuideItem from "./GuideItem"
import { inject, observer } from "mobx-react"

type Props = {
  guidesStore?: GuidesStore
  fetch: () => Promise<void>
}

@inject("guidesStore")
@observer
export default class GuidesList extends React.Component<Props> {
  render() {
    return <FlatList
      style={styles.list}
      data={this.props.guidesStore?.guides || []}
      numColumns={1}
      keyExtractor={(item) => item.id}
      renderItem={(guide) => {
        return <GuideItem guide={guide.item}/>
      }
      }/>
  }
}


const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
})
