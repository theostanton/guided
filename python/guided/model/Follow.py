from datetime import datetime
import random

from ..model.Row import Row
from ..model.User import User


def generate_created_at(follower: User, followed: User) -> datetime:
    youngest = max(follower.created_at(), followed.created_at()).timestamp()
    youngest = int(youngest)
    now = int(datetime.now().timestamp())
    timestamp = random.randrange(youngest, now)
    created_at = datetime.fromtimestamp(timestamp * 1.)
    return created_at


class Follow(Row):
    table = 'follows'

    def __init__(self, follower: User, followed: User) -> None:
        super().__init__(generate_created_at(follower, followed))
        self.follower = follower
        self.followed = followed

    def keys(self) -> tuple:
        return tuple(self.to_dict().keys()) + ('timestamp',)

    def values(self) -> tuple:
        return tuple(self.to_dict().values()) + (self.created_at().isoformat(),)

    def to_dict(self) -> dict:
        return {
            'follower': self.follower.username,
            'followed': self.followed.username
        }

    def __repr__(self) -> str:
        return 'Follow(followed=' + self.followed.username + ' follower=' + self.follower.username + ' created_at=' + self.created_at().__str__() + ')'
