import {DeviceContext} from "../src/app/Context";
import * as React from "react";
import Device from "../src/stores/Device";

const withDeviceContext = (Story) => {
  let device = new Device();
  device.update({
    width: 200,
    height: 200
  })
  return (
    <DeviceContext.Provider value={device}>
      <Story/>
    </DeviceContext.Provider>
  )
}
export const decorators = [withDeviceContext];