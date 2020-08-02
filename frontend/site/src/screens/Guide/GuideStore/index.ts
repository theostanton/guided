import {action, observable} from "mobx";
import {GuideFragment} from "api/generated";
import {MapClickEvent} from "components/Map/types";
import {ModeList} from "./GuideMode";

export default class GuideStore {
  @observable
  guide: GuideFragment | undefined


  @observable
  mode: keyof ModeList | undefined

  @observable
  modeParams: ModeList[keyof ModeList]

  @observable
  click: {
    event: MapClickEvent
  } | undefined

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

  getModeParams<Mode extends keyof ModeList>(mode: Mode): ModeList[Mode] {
    return this.modeParams
  }


  @action
  dismissClick() {
    this.click = undefined
  }
}