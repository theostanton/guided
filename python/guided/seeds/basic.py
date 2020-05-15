from typing import List

from guided.seeds.builders.GuideBuilder import GuideBuilder
from guided.seeds.builders.SeedBuilder import SeedBuilder
from guided.seeds.builders.UserBuilder import UserBuilder
from guided.model.Guide import Guide, TransportType
from guided.model.Location import location, Label
from guided.model.Row import Row
from guided.model.Spot import Spot
from guided.model.User import User


def johns_guide(john: User) -> (str, List[Row]):
    guide = Guide('Johns euro banger', TransportType.CAR, john)

    horsham = location(Label.Horsham)
    spot1 = Spot('Home', horsham, guide, 0)
    worthing = location(Label.Worthing)
    spot2 = Spot('Worthing', worthing, guide, 1)

    return guide.id, [guide, spot1, spot2]


def build_john(builder: UserBuilder):
    def johns_super_guide(guide_builder: GuideBuilder):
        # guide_builder.with_is_circular(True)
        # guide_builder.add_spot('Home', Label.Horsham)
        # guide_builder.add_spot('Worthing', Label.Worthing)
        pass

    # builder.add_guide('Johns super guide', johns_super_guide)


def build_ringo(builder: UserBuilder):
    def ringos_guide(guide_builder: GuideBuilder):
        guide_builder.with_is_circular(True)
        guide_builder.add_spot('Home', Label.Worthing)
        guide_builder.add_spot('Horsham', Label.Horsham)

    builder.add_guide('Ringos guide', ringos_guide)


def execute():
    rows: List[Row] = []
    builder = SeedBuilder()

    john = builder.add_user('john', build_john)
    # ringo = builder.add_user('ringo', build_ringo)

    for row in builder.rows():
        print(row)

    # rows = rows + builder.rows()

    # follows: List[Follow] = []
    # follows.append(Follow(ringo, john))

    # rows = rows + follows

    # insert(rows)


if __name__ == '__main__':
    execute()
