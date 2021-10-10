from app.models import db, Follower

def seed_followers():
    follow1 = Follower(
        user_id=1, follower_id=2, notified=False
    )
    follow2 = Follower(
        user_id=1, follower_id=3, notified=False
    )
    follow3 = Follower(
        user_id=1, follower_id=4, notified=False
    )
    follow4 = Follower(
        user_id=1, follower_id=5, notified=False
    )
    follow5 = Follower(
        user_id=1, follower_id=6, notified=False
    )
    follow6 = Follower(
        user_id=2, follower_id=1, notified=False
    )
    follow7 = Follower(
        user_id=2, follower_id=3, notified=False
    )
    follow8 = Follower(
        user_id=2, follower_id=4, notified=False
    )
    follow9 = Follower(
        user_id=2, follower_id=5, notified=False
    )
    follow10 = Follower(
        user_id=3, follower_id=6, notified=False
    )
    follow11 = Follower(
        user_id=4, follower_id=6, notified=False
    )
    follow12 = Follower(
        user_id=5, follower_id=6, notified=False
    )
    follow13 = Follower(
        user_id=6, follower_id=6, notified=False
    )
    follow14 = Follower(
        user_id=7, follower_id=6, notified=False
    )
    follow15 = Follower(
        user_id=8, follower_id=6, notified=False
    )
    follow16 = Follower(
        user_id=10, follower_id=6, notified=False
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
