import GuidesStore from "model/GuidesStore"
import { FlatList, StyleSheet } from "react-native"
import React from "react"
import GuideItem, { ListPosition } from "./GuideItem"
import { inject, observer } from "mobx-react"
import { whole } from "../../utils/dimensions"

type Props = {
  guidesStore?: GuidesStore
  fetch: () => Promise<void>
}

@inject("guidesStore")
@observer
export default class GuidesList extends React.Component<Props> {
  render() {
    const items = this.props.guidesStore?.guides || []
    return <FlatList
      style={styles.list}
      data={items}
      numColumns={1}
      pagingEnabled={false}
      keyExtractor={(item) => item.id}
      renderItem={(item) => {
        let position: ListPosition
        switch (item.index) {
          case 0:
            position = "first"
            break
          case items.length - 1:
            position = "last"
            break
          default:
            position = "middle"
        }
        return <GuideItem guide={item.item} position={position}/>
      }
      }/>
  }
}


const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingBottom: whole,
  },
})
