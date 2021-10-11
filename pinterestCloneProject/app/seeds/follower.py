from app.models import db
from app.models.user import follows

def seed_followers():
    follow1 = follows(
        follower_id=1, followed_id=2, notified=False
    )
    follow2 = follows(
        follower_id=1, followed_id=3, notified=False
    )
    follow3 = follows(
        follower_id=1, followed_id=4, notified=False
    )
    follow4 = follows(
        follower_id=1, followed_id=5, notified=False
    )
    follow5 = follows(
        follower_id=1, followed_id=6, notified=False
    )
    follow6 = follows(
        follower_id=2, followed_id=1, notified=False
    )
    follow7 = follows(
        follower_id=2, followed_id=3, notified=False
    )
    follow8 = follows(
        follower_id=2, followed_id=4, notified=False
    )
    follow9 = follows(
        follower_id=2, followed_id=5, notified=False
    )
    follow10 = follows(
        follower_id=3, followed_id=6, notified=False
    )
    follow11 = follows(
        follower_id=4, followed_id=6, notified=False
    )
    follow12 = follows(
        follower_id=5, followed_id=6, notified=False
    )
    follow13 = follows(
        follower_id=6, followed_id=6, notified=False
    )
    follow14 = follows(
        follower_id=7, followed_id=6, notified=False
    )
    follow15 = follows(
        follower_id=8, followed_id=6, notified=False
    )
    follow16 = follows(
        follower_id=10, followed_id=6, notified=False
    )

    db.session.add(follow1)
    db.session.add(follow2)
    db.session.add(follow3)
    db.session.add(follow4)
    db.session.add(follow5)
    db.session.add(follow6)
    db.session.add(follow7)
    db.session.add(follow8)
    db.session.add(follow9)
    db.session.add(follow10)
    db.session.add(follow11)
    db.session.add(follow12)
    db.session.add(follow13)
    db.session.add(follow14)
    db.session.add(follow15)
    db.session.add(follow16)
    db.session.commit()

def undo_followers():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
