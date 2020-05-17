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
    Cardiff = 'Cardiff',
    Paris = 'Paris',
    Plymouth = 'Plymouth',
    Worthing = 'Worthing'


def location(label: Label) -> Location:
    return LOCATIONS[label]


LOCATIONS: Dict[Label, Location] = {
    Label.Horsham: Location(
        'Horsham',
        51.0629,
        -0.3259,
        'GB'
    ),
    Label.Cardiff: Location(
        'Cardiff',
        51.4816,
        -3.1791,
        'GB'
    ),
    Label.Paris: Location(
        'Paris',
        48.8566,
        2.3522,
        'GB'
    ),
    Label.Plymouth: Location(
        'Plymouth',
        50.3755,
        -4.1427,
        'GB'
    ),
    Label.Worthing: Location(
        'Worthing',
        50.8179,
        -0.3729,
        'GB'
    ),
}
