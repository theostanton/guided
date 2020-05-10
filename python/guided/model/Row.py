from abc import ABC, abstractmethod
from datetime import datetime


class Row(ABC):
    table: str

    def __init__(self, created_at=datetime.now()) -> None:
        super().__init__()
        self._created_at = created_at

    @abstractmethod
    def to_dict(self) -> dict:
        pass

    def keys(self) -> tuple:
        return tuple(self.to_dict().keys()) + ('created', 'updated')

    def created_at(self) -> datetime:
        return self._created_at

    def values(self) -> tuple:
        return tuple(self.to_dict().values()) + (self.created_at().isoformat(), None)
