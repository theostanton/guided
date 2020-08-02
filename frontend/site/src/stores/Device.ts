import isTouchDevice from 'is-touch-device'

export type Orientation = 'landscape' | 'portrait'

export default class Device {

  orientation: Orientation
  isTouch: boolean

  constructor(orientation: Orientation) {
    this.isTouch = isTouchDevice()
    console.log('this.isTouch',this.isTouch)
    this.orientation = orientation
  }

}