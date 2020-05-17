from typing import List

from guided.actions import compute
from guided.db import insert
from guided.model.Guide import TransportType
from guided.model.Location import Label
from guided.seeds.seeders.Seed import Seed


def execute():
    seed = Seed()

    john = seed.user('john')

    john.guide('Johns mega guide', TransportType.CAR, is_circular=True) \
        .spot('Home', Label.Horsham) \
        .spot('Worthing', Label.Worthing, 2)

    john.guide('Johns incomplete guide',
               TransportType.MOTORCYCLE,
               is_circular=True)

    ringo = seed.user('ringo')
    ringo.guide('Ringos motorcycle trip', TransportType.MOTORCYCLE)

    paul = seed.user('paul')
    paul.guide('Pauls wonderful circle', TransportType.CAR, is_circular=True) \
        .spot('Start', Label.Horsham) \
        .spot('Cardiff', Label.Cardiff) \
        .spot('Plymouth', Label.Plymouth)

    george = seed.user('george')

    john.follow(ringo.user())
    john.follow(george.user())
    ringo.follow(john.user())
    ringo.follow(paul.user())
    ringo.follow(george.user())
    paul.follow(john.user())

    rows = seed.rows()
    for row in rows:
        print(row)
    print('Generated', len(rows), 'rows')

    insert(rows)

    guide_ids: List[str] = seed.guide_ids()
    for guide_id in guide_ids:
        compute.execute(guide_id)


if __name__ == '__main__':
    execute()
