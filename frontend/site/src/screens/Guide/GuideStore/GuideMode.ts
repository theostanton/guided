import {MapClickEvent} from "components/Map/types";
import {SpotFragment} from "api/generated";

export type ModeListBase = Record<string, object | undefined>

export type Mode = keyof ModeList

export type ItemState = 'selected' | 'not_selected' | 'none'

export type ModeList = {
  AddSpot: {
    event: MapClickEvent
  },
  Route: {},
  SelectSpot: {
    spot: Pick<SpotFragment, 'id' | 'nights' | 'location' | 'name' | 'country'>
  }
}

export type ModeProps<Mode extends keyof ModeList> = {
  params: ModeList[Mode]
}
