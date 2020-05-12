import { Ionicons } from "@expo/vector-icons"
import React from "react"

type IconName = "bicycle" | "car" | "motorbike"

const ICONS: { [name in IconName]: string } = {
  "bicycle": "ios-bicycle",
  "car": "car",
  "motorbike": "motorcycle",
}

type Props = {
  name: IconName
}

export default class Icon extends React.Component<Props> {
  render() {
    const iconName = ICONS[this.props.name]
    return <Ionicons name={iconName} size={20}/>
  }
}