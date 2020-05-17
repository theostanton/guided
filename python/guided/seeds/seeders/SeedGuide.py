from typing import List, Tuple

from guided.model.Guide import TransportType, Guide
from guided.model.Location import Label
from guided.model.Row import Row
from guided.model.User import User
from guided.seeds.seeders.SeedSpot import SeedSpot


class SeedGuide:
    _guide: Guide

    def __init__(self,
                 title: str,
                 transport_type: TransportType,
                 max_hours_per_ride: int = None,
                 is_circular: bool = None,
                 start_date: str = None):
        self.generated = False
        self._spots: List[SeedSpot] = []
        self._title = title
        self._transport_type = transport_type
        self._max_hours_per_ride = 6 if max_hours_per_ride is None else max_hours_per_ride
        self._is_circular = False if is_circular is None else is_circular
        self._start_date = start_date

    def spot(self, label: str, location: Label, nights: int = None):
        spot = SeedSpot(label, location, nights)
        self._spots.append(spot)
        return self

    def spots(self, *spots: List[Tuple[str, Label, int]]):
        for label, location_label, nights in spots:
            self._spots.append(SeedSpot(label, location_label, nights))
        return self

    def rows(self, user: User) -> List[Row]:
        if self.generated:
            raise Exception("Already generated")
        self.generated = True

        rows: List[Row] = []
        self._guide = Guide(
            self._title,
            self._transport_type,
            user,
            self._max_hours_per_ride,
            self._is_circular,
            self._start_date
        )
        rows.append(self._guide)
        for index, spot in enumerate(self._spots):
            rows.extend(spot.rows(self._guide, index))
        return rows

    def guide(self) -> Guide:
        if self._guide is None:
            raise Exception('SeedGuide not completed yet')
        return self._guide
