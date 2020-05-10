from guided.db import get_cursor, connection


def execute():
    cursor = get_cursor()
    cursor.execute('truncate users cascade')
    connection.commit()
