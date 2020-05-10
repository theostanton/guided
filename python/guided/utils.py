import re
import unicodedata

import cuid
from numpy.core import unicode


def slugify(value: str) -> str:
    return re.sub(r'[-\s]+', '-',
                  unicode(
                      re.sub(r'[^\w\s-]', '',
                             unicodedata.normalize('NFKD', value)
                             # .encode('ascii', 'ignore')
                             )
                          .strip()
                          .lower()))


def generate_id(prefix: str) -> str:
    return f"{prefix}_{cuid.slug()}"
