from typing import Callable, List

from guided.model.User import User
from guided.seeds.builders.Builder import Builder
from guided.seeds.builders.GuideBuilder import GuideBuilder


class UserBuilder(Builder):
    _guide_ids: List[str] = []

    def __init__(self, username: str):
        super().__init__()
        self._user = User(username)
        self._rows.append(self._user)

    def add_guide(self,
                  title: str,
                  build: Callable[[GuideBuilder], None]) -> str:
        builder = GuideBuilder(self._user, title)
        build(builder)
        self._guide_ids.append(builder.guide_id())
        self._rows = self._rows + builder.rows()
        return builder.guide_id()

    def user(self) -> User:
        return self._user
