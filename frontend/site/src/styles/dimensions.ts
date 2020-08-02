import {PixelRatio, Platform, StyleSheet} from 'react-native';

export const eighth = PixelRatio.roundToNearestPixel(2);
export const quarter = PixelRatio.roundToNearestPixel(4);
export const half = PixelRatio.roundToNearestPixel(8);
export const whole = PixelRatio.roundToNearestPixel(16);
export const two = PixelRatio.roundToNearestPixel(32);
export const four = PixelRatio.roundToNearestPixel(64);
export const eight = PixelRatio.roundToNearestPixel(128);
export const icon = PixelRatio.roundToNearestPixel(32);

export const hairline = StyleSheet.hairlineWidth;

export function fullWidth(): string {
  return Platform.OS === 'web' ? '100vw' : '100%'
}

export function fullHeight(): string {
  return Platform.OS === 'web' ? '100vh' : '100%'
}