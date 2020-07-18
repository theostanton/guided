export abstract class Toast {
  dismissible: boolean
  durationMs?: number
}

export class MessageToast extends Toast {

  message: string

  constructor(message: string, dismissible: boolean = false, durationMs: number = 2000) {
    super()
    this.message = message
    this.dismissible = dismissible
    this.durationMs = durationMs
  }

}