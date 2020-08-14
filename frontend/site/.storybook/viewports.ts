import {ViewportMap} from "@storybook/addon-viewport/dist/models";

export default {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '414px',
      height: '896px',
    },
    type: 'mobile'
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1000px',
      height: '600px',
    },
    type: 'desktop'
  },
  responsive: {
    name: 'Responsive',
    styles: null,
    type: 'desktop'
  },
  rail: {
    name: 'Rail',
    styles: {
      height: '100%',
      width: '330px'
    },
    type: 'other'
  }
} as ViewportMap;