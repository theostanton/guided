from guided.model.Guide import Guide
from guided.model.Location import Location
from guided.model.Row import Row
from guided.utils import generate_id


class Spot(Row):
    table = 'spots'

    def __init__(self, label: str, location: Location, guide: Guide, index: int, nights: int = 1) -> None:
        super().__init__()
        self.id = generate_id("spot")
        self.label = label
        self.lat = location.lat
        self.long = location.long
        self.guide = guide
        self.nights = nights
        self.position = f"{index}.0"

    def to_dict(self) -> dict:
        return {
            'id': self.id,
            'label': self.label,
            'guide': self.guide.id,
            'owner': self.guide.user.username,
            'nights': self.nights,
            'locked': True,
            'lat': self.lat,
            'long': self.long,
            'position': self.position

        }
