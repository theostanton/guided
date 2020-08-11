import {ItemState} from "../screens/Guide/GuideStore/GuideMode";
import {Property} from "csstype";

type Color = Property.Color

export const primary: Color = '#181b4d';
export const primaryLight: Color = 'orangered';
export const secondary: Color = '#729962';

export const darkText: Color = '#181b4dbb';
export const lightText: Color = '#ffffffbb';
export const darkIcon: Color = darkText;
export const lightIcon: Color = lightText;

export const border: Color = '#aaaaaaee';

export function itemStateColor(item:'ride'|'spot',state: ItemState): Color {
  switch ([item,state]) {
    case ['ride','none']:
    case ['spot','none']:
      return darkIcon
    case ['ride','not_selected']:
    case ['spot','not_selected']:
      return "#999999"
    case ['ride','selected']:
    case ['spot','selected']:
      return "#a13737"
  }
}