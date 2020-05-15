from typing import List, Callable

from guided.model.User import User
from guided.seeds.builders.Builder import Builder
from guided.seeds.builders.UserBuilder import UserBuilder

class SeedBuilder(Builder):
    guide_ids: List[str] = []

    def add_user(self, username: str, build: Callable[[UserBuilder], None]) -> User:
        print('self._rows 0')
        print(self._rows)
        print(self)
        rows = self._rows
        builder = UserBuilder(username)
        # build(builder)
        print('self._rows 1')
        print(self._rows)
        print(self)

        rows = rows + builder.rows()
        print('self._rows 2')
        print(self._rows)
        print(self)
        return builder.user()
