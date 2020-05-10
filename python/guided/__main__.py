from guided.cli import cli

from guided.db import connection

if __name__ == '__main__':
    cli()
    connection.close()
