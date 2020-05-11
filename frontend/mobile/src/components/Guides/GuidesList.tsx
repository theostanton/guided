import GuidesStore from "../../model/GuidesStore"
import { FlatList, StyleSheet } from "react-native"
import React from "react"
import GuideItem from "./GuideItem"
import { inject, observer } from "mobx-react"

type Props = {
  guidesStore?: GuidesStore
}

@inject("guidesStore")
@observer
export default class GuidesList extends React.Component<Props> {
  render() {
    return <FlatList
      style={styles.list}
      data={this.props.guidesStore?.guides || []}
      renderItem={(guide) => {
        return <GuideItem guide={guide.item}/>
      }
      }/>
  }
}


const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: "#00ffff",
  },
})
