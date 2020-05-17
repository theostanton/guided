from typing import List

from guided.model.Follow import Follow
from guided.model.Guide import TransportType
from guided.model.Row import Row
from guided.model.User import User
from guided.seeds.seeders.SeedGuide import SeedGuide


class SeedUser:

    def __init__(self, username: str):
        self.generated = False
        self._guides: List[SeedGuide] = []
        self._follows: List[Follow] = []
        self._user = User(username)

    def guide(self, title: str,
              transport_type: TransportType,
              max_hours_per_ride: int = None,
              is_circular: bool = None,
              start_date: str = None) -> SeedGuide:
        guide = SeedGuide(title, transport_type, max_hours_per_ride, is_circular, start_date)
        self._guides.append(guide)
        return guide

    def guide_ids(self) -> List[str]:
        ids: List[str] = []
        for guide in self._guides:
            ids.append(guide.guide().id)
        return ids

    def user(self) -> User:
        return self._user

    def follow(self, followed: User):
        self._follows.append(Follow(self._user, followed))
        return self

    def rows(self) -> List[Row]:
        if self.generated:
            raise Exception("Already generated")
        self.generated = True
        rows: List[Row] = []
        rows.append(self._user)
        for guide in self._guides:
            rows.extend(guide.rows(self._user))
        rows.extend(self._follows)
        return rows
