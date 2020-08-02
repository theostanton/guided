import {action, observable} from "mobx";
import {GuideFragment} from "api/generated";
import {ModeList} from "./GuideMode";

export default class GuideStore {
  @observable
  guide: GuideFragment | undefined


  @observable
  mode: keyof ModeList | undefined
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
    return this.modeParams
  }
}