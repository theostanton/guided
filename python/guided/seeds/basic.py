from typing import List

from guided.db import insert
from guided.model.Follow import Follow
from guided.model.Guide import Guide, TransportType
from guided.model.Location import location, Label
from guided.model.Row import Row
from guided.model.Spot import Spot
from guided.model.User import User


def johns_guide(john: User) -> List[Row]:
    guide = Guide('Johns euro banger', TransportType.CAR, john)

    horsham = location(Label.Horsham)
    spot1 = Spot('Home', horsham, guide, 0)
    worthing = location(Label.Worthing)
    spot2 = Spot('Worthing', worthing, guide, 1)

    return [guide, spot1, spot2]


def execute():
    rows: List[Row] = []

    john = User("john")
    paul = User("paul")
    rows.extend([john, paul])

    rows.extend(
        [Follow(paul, john),
         Follow(john, paul)]
    )

    rows.extend(johns_guide(john))

    insert(rows)
