type Type = "createguide"

interface ModalInfo {
  type: Type
}

export class CreateGuideModal implements ModalInfo {

  type: Type = "createguide"

  static is(modal: ModalInfo): modal is CreateGuideModal {
    return modal.type === "createguide"
  }

}