import {RideFragment} from "api/generated";
import {ItemState} from "screens/Guide/GuideStore/GuideMode";

export type RideLineProps = {
  ride: RideFragment
  state: ItemState
};