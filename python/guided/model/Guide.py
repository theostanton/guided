from enum import Enum

from guided.model.Row import Row
from guided.model.User import User
from guided.utils import slugify


class TransportType(Enum):
    MOTORCYCLE = 'MOTORCYCLE'
    CAR = 'CAR'
    BICYCLE = 'BICYCLE'


class Guide(Row):
    table = 'guides'

    def __init__(self,
                 title: str,
                 transport_type: TransportType,
                 user: User,
                 max_hours_per_ride: int = 6,
                 start_date: str = None) -> None:
        super().__init__()
        self.title = title
        self.slug = slugify(title)
        self.id = f"{user.username}_{self.slug}"
        self.user = user
        self.start_date = start_date
        self.max_hours_per_ride = max_hours_per_ride
        self.transport_type = transport_type

    def to_dict(self) -> dict:
        return {
            'id': self.id,
            'title': self.title,
            'slug': self.slug,
            'transport_type': self.transport_type.value,
            'max_hours_per_ride': self.max_hours_per_ride,
            'start_date': self.start_date,
            'owner': self.user.username
        }
