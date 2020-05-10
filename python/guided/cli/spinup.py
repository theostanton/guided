import click

import guided.seeds.basic as spinup_basic

@cli.command()
def basic():
    click.echo('Spinup basic')
    spinup_basic.execute()
