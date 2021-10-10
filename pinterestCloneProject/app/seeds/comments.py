from app.models import db, Comment

def seed_comments():
    comment1 = Comment(
        user_id=1, pin_id=7, content="This kitty's eyes are as blue as blue sapphires", notified=False
    )
    comment2 = Comment(
        user_id=3, pin_id=4, content="Yummy!!", notified=False
    )
    comment3 = Comment(
        user_id=3, pin_id=3, content="Love thai food", notified=False
    )
    comment4 = Comment(
        user_id=1, pin_id=1, content="Kimetsu no Yaiba!!!!!!!!", notified=False
    )
    comment5 = Comment(
        user_id=1, pin_id=5, content="Kawaii", notified=False
    )
    comment6 = Comment(
        user_id=3, pin_id=6, content="Don't you want to give this cute little thing a kiss?", notified=False
    )
    comment7 = Comment(
        user_id=1, pin_id=2, content="Nice pepper color", notified=False
    )
    comment8 = Comment(
        user_id=3, pin_id=8, content="Look like a house from the 1910s", notified=False
    )
    comment9 = Comment(
        user_id=1, pin_id=9, content="What a beautiful peaceful view", notified=False
    )
    comment10 = Comment(
        user_id=3, pin_id=10, content="ocean, beach, sun... I'm coming... Bali ", notified=False
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
