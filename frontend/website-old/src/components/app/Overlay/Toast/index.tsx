import React from "react"
import { Message, Sidebar } from "semantic-ui-react"
import { MessageToast } from "model/OverlayStore/toast"
import { inject } from "mobx-react"
import OverlayStore from "../../../../model/OverlayStore"

type Props = {
  toast?: MessageToast
  overlayStore?: OverlayStore
}

type State = {
  message?: string
  visible: boolean
}

@inject("overlayStore")
export default class ToastComponent extends React.Component<Props, State> {

  timeout: any | undefined

  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  restartTimeout() {
    this.clearTimer()

    if (this.props.toast.durationMs) {
      this.timeout = setTimeout(() => {
        this.dismiss()
      }, this.props.toast.durationMs)
    }
  }

  clearTimer() {
    if (this.timeout) {
      clearTimeout(this.timeout)
      this.timeout = undefined
    }
  }

  componentDidUpdate(prevProps: Props) {

    const previousMessage = this.state.message
    const newMessage = this.props.toast?.message
    const hiddenOrHiding = !this.state.visible

    if (newMessage && (!previousMessage || previousMessage !== newMessage)) {
      // New/updated message
      this.restartTimeout()
      this.setState({
        message: newMessage,
        visible: true,
      })

    } else if (previousMessage && !newMessage) {
      // Message dismissed
      if (!hiddenOrHiding) {
        this.clearTimer()
        this.setState({
          visible: false,
        })

      }
    } else if (previousMessage && newMessage && previousMessage === newMessage) {
      // Same message
      this.restartTimeout()
      if (hiddenOrHiding) {
        this.setState({
          visible: true,
        })
      }
    } else if (!newMessage && !previousMessage) {
      if (!hiddenOrHiding) {
        throw new Error(`Should be hidden or hiding`)
      }
    } else {
      throw new Error(`Unhandled state previous=${JSON.stringify(previousMessage)} currentMessage=${newMessage}`)
    }
  }

  componentWillUnmount() {
    this.clearTimer()
  }

  dismiss() {
    this.props.overlayStore.dismissToast()
  }

  render(): React.ReactElement {
    return <Sidebar direction={"bottom"} animation={"scale down"} onHidden={() => {
      this.setState({
        message: undefined,
      })
    }} visible={this.state.visible}>
      <Message onDismiss={this.dismiss.bind(this)}>{this.state.message}</Message>
    </Sidebar>
  }
}