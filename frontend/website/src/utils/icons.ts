import { SemanticICONS } from "semantic-ui-react"
import { TransportType } from "../api/generated"

export const Icons: { [name in string]: SemanticICONS } = {
  Guide: "book",
  Motorcycle: "motorcycle",
  Car: "car",
  Bicycle: "bicycle",
  User: "user",
  Follow:"add user"
}

export function iconForTransportType(type:TransportType):SemanticICONS{
  switch (type) {
    case TransportType.Bicycle:
      return Icons.Bicycle
    case TransportType.Car:
      return Icons.Bicycle
    case TransportType.Motorcycle:
      return Icons.Motorcycle
  }
}