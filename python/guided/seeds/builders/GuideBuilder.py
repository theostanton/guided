from typing import List

from guided.model.Guide import Guide, TransportType
from guided.model.Location import location, Label
from guided.model.Row import Row
from guided.model.Spot import Spot
from guided.model.User import User
from guided.seeds.builders.Builder import Builder


class GuideBuilder(Builder):
    _spot_index = 0

    def __init__(self,
                 user: User,
                 title: str):
        self.user = user
        self._guide = Guide(title, TransportType.MOTORCYCLE, user)

    def with_max_hours_per_ride(self, max_hours_per_ride: int):
        self._guide.max_hours_per_ride = max_hours_per_ride

    def with_is_circular(self, is_circular: bool):
        self._guide.is_circular = is_circular

    def with_transport_type(self, transport_type: TransportType):
        self._guide.transport_type = transport_type

    def add_spot(self, label: str, location_label: Label, nights: int = 1):
        spot = Spot(label,
                    location(location_label),
                    self._guide,
                    self._spot_index,
                    0 if self._spot_index == 0 else nights)
        self._spot_index = self._spot_index + 1
        self._rows.append(spot)

    def guide_id(self):
        return self._guide.id

    def rows(self) -> List[Row]:
        return [self._guide] + self._rows.copy()
