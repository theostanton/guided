import {MapClickEvent} from "components/Map/types";

export type ModeListBase = Record<string, object | undefined>

export type Mode = keyof ModeList


export type ModeList = {
  AddSpot: {
    event: MapClickEvent
  }
}

export type ModeProps<Mode extends keyof ModeList> = {
  params: ModeList[Mode]
}
