from flask.cli import AppGroup
from .users import seed_users, undo_users
from .categories import seed_categories, undo_categories
from .pins import seed_pins, undo_pins
from .boards import seed_boards, undo_boards
from .comments import seed_comments, undo_comments
from .follower import seed_followers, undo_followers
from .comment_likes import seed_comment_likes, undo_comment_likes

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_pins()
    seed_boards()
    seed_comments()
    seed_followers()
    seed_categories()
    seed_comment_likes()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    undo_pins()
    undo_boards()
    undo_comments()
    undo_followers()
    undo_categories()
    undo_comment_likes()
