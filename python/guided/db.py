from collections import defaultdict
from typing import List
import psycopg2
from psycopg2.extras import DictCursor, DictConnection, execute_values

from guided.model.Row import Row

try:
    connection: DictConnection = psycopg2.connect(user="superuser",
                                                  password="local_owner_password",
                                                  host="localhost",
                                                  port="5432",
                                                  database="main")

except Exception as error:
    print("Error while connecting to PostgreSQL", error)


def get_cursor() -> DictCursor:
    return connection.cursor()


def insert(rows: List[Row]):
    print("inserting", len(rows), "rows")
    if len(rows) == 0:
        return

    grouped = defaultdict(list)
    for row in rows:
        grouped[row.table].append(row)
    cursor = get_cursor()

    for group in grouped.values():
        table = group[0].table
        columns = group[0].keys()

        values = list(map(lambda item: item.values(), group))
        query = f"insert into {table} ({','.join(columns)}) values %s"
        execute_values(cursor, query, values)

    cursor.close()
    connection.commit()
