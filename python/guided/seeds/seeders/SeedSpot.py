from typing import List

from guided.model.Guide import Guide
from guided.model.Location import location, Label
from guided.model.Row import Row
from guided.model.Spot import Spot


class SeedSpot:

    def __init__(self, label: str, location_label: Label, nights: int = None):
        self.generated = False
        self._label = label
        self._location = location(location_label)
        self._nights = nights

    def rows(self, guide: Guide, index: int) -> List[Row]:
        if self.generated:
            raise Exception("Already generated")
        self.generated = True
        spot = Spot(
            self._label,
            self._location,
            guide,
            index,
            0 if index == 0 else 1 if self._nights is None else self._nights
        )
        return [spot]
