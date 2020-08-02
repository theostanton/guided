import {action, observable} from "mobx";
import {GuideFragment, RideFragment, SpotFragment} from "api/generated";
import {ItemState, ModeList} from "./GuideMode";

export default class GuideStore {
  @observable
  guide: GuideFragment | undefined

  @observable
  mode: keyof ModeList | undefined
  @observable
  modeParams: ModeList[keyof ModeList]

  @action
  updateGuide(guide: GuideFragment) {
    this.guide = guide
  }

  @action
  updateMode<Mode extends keyof ModeList>(...args: undefined extends ModeList[Mode] ? [Mode] | [Mode, ModeList[Mode]] : [Mode, ModeList[Mode]]) {
    this.mode = args[0]
    this.modeParams = args.length > 1 ? args[1] : undefined
  }

  @action
  clearMode() {
    this.mode = undefined
    this.modeParams = undefined
  }

  getModeParams<Mode extends keyof ModeList>(mode: Mode): ModeList[Mode] | undefined {
    if (this.mode !== mode) {
      return undefined
    }
    return this.modeParams as ModeList[Mode]
  }

  selectedState(spotOrRide: SpotFragment | RideFragment): ItemState {
    switch (this.mode) {
      case "SelectSpot":
        const params = this.getModeParams('SelectSpot')
        if (params.spot.id === spotOrRide.id) {
          return 'selected'
        } else {
          return 'not_selected'
        }
      case "AddSpot":
        return 'not_selected'
    }

    return 'none'
  }
}