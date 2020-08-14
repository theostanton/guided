import {action, observable} from "mobx";
import {GuideFragment, RideFragment, SpotFragment} from "api/generated";
import {ItemState, ModeList} from "./GuideMode";

export default class GuideStore {
  private onModeUpdate: () => void;

  constructor(onModeUpdate: () => void) {
    this.onModeUpdate = onModeUpdate
  }

  @observable
  guide: GuideFragment | undefined

  @observable
  mode: keyof ModeList | undefined
  @observable
  modeParams: ModeList[keyof ModeList] | undefined

  @action
  updateGuide(guide: GuideFragment): boolean {
    console.log('updateGuide')
    const isFirstLoad = this.guide === undefined
    this.guide = guide
    return isFirstLoad
  }

  @action
  selectSpot(spotId: string) {
    const spot = this.guide?.spots.nodes.find(spot => spot!.id === spotId)
    if (spot) {
      this.updateMode('SelectSpot', {spot})
    } else {
      throw new Error(`selectSpot - No spot for spotId=${spotId}`)
    }
  }

  @action
  updateMode<Mode extends keyof ModeList>(...args: undefined extends ModeList[Mode] ? [Mode] | [Mode, ModeList[Mode]] : [Mode, ModeList[Mode]]) {
    this.mode = args[0]
    this.modeParams = args.length > 1 ? args[1] : undefined
    this.onModeUpdate()
  }

  @action
  clearMode() {
    this.mode = undefined
    this.modeParams = undefined
    this.onModeUpdate()
  }

  getModeParams<Mode extends keyof ModeList>(mode: Mode): ModeList[Mode] {
    if (this.mode !== mode) {
      throw new Error(`Incorrect mode this.mode=${this.mode} mode=${mode}`)
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