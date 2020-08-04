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

export function itemStateColor(itemState: ItemState): Color {
  switch (itemState) {
    case "none":
      return "#555555"
    case "not_selected":
      return "#99999999"
    case "selected":
      return "#222222"
  }
}