from typing import List, Tuple

from guided.model.Guide import TransportType, Guide
from guided.model.Location import Label, location
from guided.model.Row import Row
from guided.seeds.seeders.SeedUser import SeedUser


class Seed:

    def __init__(self):
        self.generated = False
        self._users: List[SeedUser] = []

    def user(self, username: str) -> SeedUser:
        user = SeedUser(username)
        self._users.append(user)
        return user

    def guide_ids(self) -> List[str]:
        ids: List[str] = []
        for user in self._users:
            ids.extend(user.guide_ids())
        return ids

    def rows(self) -> List[Row]:
        if self.generated:
            raise Exception("Already generated")
        self.generated = True

        rows: List[Row] = []
        for user in self._users:
            rows.extend(user.rows())
        return rows


if __name__ == '__main__':

    seed = Seed()
    theo = seed.user('theo')
    theo.guide(
        'Some guide',
        TransportType.CAR
    ).spots([
        ('Home', Label.Worthing, 0),
        ('Horsham', 'asd', 'st'),
    ])

    rows = seed.rows()
    for row in rows:
        print(row)
    print(len(rows), 'rows')
