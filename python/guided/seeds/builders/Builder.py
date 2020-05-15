from abc import ABC
from typing import List
import copy

from guided.model.Row import Row


class Builder(ABC):
    _rows: List[Row] = []

    def rows(self) -> List[Row]:
        return copy.deepcopy(self._rows)
