import { Ionicons, FontAwesome5 } from "@expo/vector-icons"
import React from "react"

export type IconName = "bicycle" | "car" | "motorbike" | "user" | "guide" | "distance" | "duration" | "joined"

const ICONS: { [name in IconName]: string } = {
  bicycle: "bicycle",
  car: "car",
  guide: "book",
  motorbike: "motorcycle",
  user: "user",
  distance: "road",
  duration: "clock",
  joined: "child",
}

type Props = {
  name: IconName
  size?: number
  color?: string
}

export default class Icon extends React.Component<Props> {
  render() {
    const iconName = ICONS[this.props.name]
    return <FontAwesome5 color={this.props.color} name={iconName} size={this.props.size || 20}/>
  }
}