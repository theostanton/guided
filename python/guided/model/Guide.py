from enum import Enum

from ..model.Row import Row
from ..model.User import User
from ..utils import slugify


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
                 is_circular: bool = False,
                 start_date: str = None) -> None:
        super().__init__()
        self.title = title
        self.slug = slugify(title)
        self.id = f"{user.username}_{self.slug}"
        self.user = user
        self.is_circular = is_circular
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
            'is_circular': self.is_circular,
            'start_date': self.start_date,
            'owner': self.user.username
        }

    def __repr__(self) -> str:
        return 'Guide(title=' + self.title + ')'
