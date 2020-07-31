import {action, observable} from "mobx";
import {GuideFragment} from "api/generated";
import {useStaticRendering} from "mobx-react-lite";


const isServer = typeof window === "undefined";
useStaticRendering(isServer);


export default class GuideStore {
  @observable
  guide: GuideFragment | undefined

  @observable
  value: number = 0

  @action
  updateGuide(guide: GuideFragment) {
    this.guide = guide
  }

  @action
  increment() {
    this.value = this.value + 1
    console.log('this.value=', this.value)
  }
}