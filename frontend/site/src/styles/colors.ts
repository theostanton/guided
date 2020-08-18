import {ItemState} from "../screens/Guide/GuideStore/GuideMode";
import {Property} from "csstype";

export type Color = Property.Color

export const primary: Color = '#343a9a';
export const primaryLight: Color = '#4b50a3';
export const secondary: Color = '#729962';

export const darkText: Color = '#181b4dbb';
export const lightText: Color = '#ffffffbb';
export const darkIcon: Color = darkText;
export const lightIcon: Color = lightText;

export const border: Color = '#aaaaaa44';

const itemStateColors: { [state in ItemState]: { [itemType in ItemType]: Color } } = {
  selected: {
    spot: secondary,
    ride: secondary
  },
  none: {
    spot: primary,
    ride: primary
  },
  not_selected: {
    spot: primaryLight,
    ride: primaryLight
  }
}

type ItemType = 'ride' | 'spot';

export function itemStateColor(item: ItemType, state: ItemState): Color {
  return itemStateColors[state][item]
}