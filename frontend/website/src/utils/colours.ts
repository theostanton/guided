export type RideColourStatus = "selected" | "highlighted" | "none" | "dim"
export type SpotColourStatus = "selected" | "highlighted" | "none" | "start" | "end" | "dim"

export const RIDE_COLOURS: { [status in RideColourStatus]: string } = {
  none: "#b25757",
  highlighted: "black",
  selected: "black",
  dim: "grey",
}

export const SPOT_COLOURS: { [status in SpotColourStatus]: string } = {
  none: "#b25757",
  highlighted: "#b25757",
  selected: "black",
  start: "green",
  end: "red",
  dim: "grey",
}

