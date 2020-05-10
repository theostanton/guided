import click

import inquirer as inquirer
from guided.seeds import basic, other
from guided import actions


@click.group()
def cli():
    pass


@cli.command()
@click.option('-s', '--skip_truncating', is_flag=True)
@click.option('-option', '--option', default=None)
def seed(skip_truncating, option):
    SEEDS = {
        'basic': basic.execute,
        'complex': other.execute
    }
    if option is None:
        questions = [
            inquirer.List('option', choices=SEEDS.keys())
        ]
        answers = inquirer.prompt(questions)
        option = answers['option']
    elif option not in SEEDS.keys():
        click.echo(f"{option} is not a valid option")
        return

    if skip_truncating:
        click.echo('Skipping truncating')
    else:
        click.echo('Truncating first')
        actions.truncate()

    click.echo(f"Implementing '{option}' seed")
    SEEDS[option]()


@cli.command()
def truncate():
    actions.truncate()


if __name__ == '__main__':
    cli()
