from .cli import cli
from .db import connection


def run():
    cli()
    connection.close()
