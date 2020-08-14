import {AppContext, Context} from "app/Context";
import * as React from "react";
import viewports from "./viewports";

const withDeviceContext = (Story) => {
  let context = new AppContext();
  context.update({
    width: 200,
    height: 200
  })
  return (
    <Context.Provider value={context}>
      <Story/>
    </Context.Provider>
  )
}
export const decorators = [withDeviceContext];

export const parameters = {
  viewport: {
    viewports,
  },
};