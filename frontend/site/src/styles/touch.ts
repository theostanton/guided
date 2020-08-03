import {Platform} from "react-native";

export function noPointerEvents(): any {
  return Platform.OS === 'web' ? {pointerEvents: 'none'} : {}
}

export function autoPointerEvents(): any {
  return Platform.OS === 'web' ? {pointerEvents: 'auto'} : {}
}