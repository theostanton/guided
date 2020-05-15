from datetime import datetime, timedelta
import random

from ..model.Row import Row

DEFAULT_PASSWORD_HASH = '$2a$06$go2Lk1MKz.2iq6vH2IvsAep1Aera4IhKECd5KlNgyLjPIl2Gq.Xkq'


def generate_created_at() -> datetime:
    now = datetime.now()
    range_seconds = 60 * 60 * 24 * 31 * 2
    seconds_ago = random.randrange(0, range_seconds)
    created_at = now - timedelta(seconds=seconds_ago)
    return created_at


class User(Row):
    table = 'users'

    def __init__(self, username: str, email: str = None, password_hash: str = DEFAULT_PASSWORD_HASH) -> None:
        super().__init__(generate_created_at())
        self.username = username
        self.email = email if email is not None else f"{username}@email.com"
        self.password_hash = DEFAULT_PASSWORD_HASH if password_hash is None else password_hash

    def to_dict(self):
        return {
            'username': self.username,
            'email': self.email,
            'password_hash': self.password_hash
        }

    def __repr__(self) -> str:
        return 'User(username=' + self.username + ' email=' + self.email + ')'


if __name__ == '__main__':
    theo = User('theo', 'theo@email.com')
    print(theo)
