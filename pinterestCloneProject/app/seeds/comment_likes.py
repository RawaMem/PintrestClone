from app.models import db, CommentLike


def seed_comment_likes():
    comment_like1 = CommentLike(
        user_id=1, comment_id=1, notified=False
    )
    comment_like2 = CommentLike(
        user_id=1, comment_id=2, notified=False
    )
    comment_like3 = CommentLike(
        user_id=2, comment_id=3, notified=False
    )
    comment_like4 = CommentLike(
        user_id=2, comment_id=4, notified=False
    )
    comment_like5 = CommentLike(
        user_id=2, comment_id=5, notified=False
    )
    comment_like6 = CommentLike(
        user_id=2, comment_id=6, notified=False
    )
    comment_like7 = CommentLike(
        user_id=2, comment_id=7, notified=False
    )
    comment_like8 = CommentLike(
        user_id=2, comment_id=8, notified=False
    )
    comment_like9 = CommentLike(
        user_id=2, comment_id=9, notified=False
    )
    comment_like10 = CommentLike(
        user_id=2, comment_id=10, notified=False
    )
    comment_like11 = CommentLike(
        user_id=3, comment_id=1, notified=False
    )
    comment_like12 = CommentLike(
        user_id=3, comment_id=2, notified=False
    )
    comment_like13 = CommentLike(
        user_id=3, comment_id=3, notified=False
    )
    comment_like14 = CommentLike(
        user_id=3, comment_id=4, notified=False
    )
    comment_like15 = CommentLike(
        user_id=3, comment_id=5, notified=False
    )
    comment_like16 = CommentLike(
        user_id=3, comment_id=6, notified=False
    )
    comment_like17 = CommentLike(
        user_id=4, comment_id=7, notified=False
    )
    comment_like18 = CommentLike(
        user_id=4, comment_id=8, notified=False
    )
    comment_like19 = CommentLike(
        user_id=4, comment_id=9, notified=False
    )
    comment_like20 = CommentLike(
        user_id=4, comment_id=10, notified=False
    )

    db.session.add(comment_like1)
    db.session.add(comment_like2)
    db.session.add(comment_like3)
    db.session.add(comment_like4)
    db.session.add(comment_like5)
    db.session.add(comment_like6)
    db.session.add(comment_like7)
    db.session.add(comment_like8)
    db.session.add(comment_like9)
    db.session.add(comment_like10)
    db.session.add(comment_like11)
    db.session.add(comment_like12)
    db.session.add(comment_like13)
    db.session.add(comment_like14)
    db.session.add(comment_like15)
    db.session.add(comment_like16)
    db.session.add(comment_like17)
    db.session.add(comment_like18)
    db.session.add(comment_like19)
    db.session.add(comment_like20)
    db.session.commit()

def undo_comment_likes():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
