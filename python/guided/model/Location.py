from enum import Enum
from typing import Dict, TypedDict


class Location:

    def __init__(self, label: str, lat: float, long: float, country: str):
        self.label = label
        self.lat = lat
        self.long = long
        self.country = country


class Label(Enum):
    Horsham = 'Horsham',
    Worthing = 'Worthing'


def location(label: Label) -> Location:
    return LOCATIONS[label]


LOCATIONS: Dict[Label, Location] = {
    Label.Horsham: Location(
         'Horsham',
         51,
         0.1,
        'GB'
    ),
    Label.Worthing: Location(
        'Worthing',
        52,
        0.2,
        'GB'
    ),
}
