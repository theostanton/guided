import {action, observable} from "mobx";
import {GuideFragment} from "api/generated";

export default class GuideStore {
  @observable
  guide: GuideFragment | undefined

  @action
  updateGuide(guide: GuideFragment) {
    this.guide = guide
  }
}