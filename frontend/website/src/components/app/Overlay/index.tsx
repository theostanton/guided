import { inject, observer } from "mobx-react"
import * as React from "react"
import OverlayStore from "model/OverlayStore"
import ToastComponent from "./Toast"
import CreateGuideModal from "./modals/CreateGuideModal"
import { log, logObject } from "../../../utils/logger"

type Props = {
  overlayStore?: OverlayStore
}

@inject("overlayStore")
@observer
export default class OverlayComponent extends React.Component<Props> {

  get overlayStore(): OverlayStore {
    return this.props.overlayStore!
  }

  render(): React.ReactElement | undefined {

    const modal = this.props.overlayStore.modal
    switch (modal?.type) {
      case "createguide":
        return <CreateGuideModal/>
    }

    return <ToastComponent toast={this.overlayStore.toast}/>
  }
}