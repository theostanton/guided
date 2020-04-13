import { action, observable, runInAction } from "mobx"
import { MessageToast, Toast } from "./toast"
import { ModalInfo } from "./modals"

export default class OverlayStore {

  @observable
  modal: ModalInfo | undefined

  @observable
  toast: MessageToast | undefined

  @action
  showModal(modal: ModalInfo) {
    this.modal = modal
  }

  @action
  closeModal() {
    this.modal = undefined
  }

  @action
  showToast(toast: MessageToast) {
    this.toast = toast
  }

  @action
  dismissToast() {
    this.toast = undefined
  }

}

const overlayStore = new OverlayStore()
export {
  overlayStore,
}