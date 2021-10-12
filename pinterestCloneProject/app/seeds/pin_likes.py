from app.models import db, PinLike
from app.models import PinLike

def seed_pin_likes():
    pin_like1 = PinLike(
        user_id=2, pin_id=3, notified=False
    )
    pin_like2 = PinLike(
        user_id=3, pin_id=1, notified=False
    )
    pin_like3 = PinLike(
        user_id=1, pin_id=6, notified=False
    )
    pin_like4 = PinLike(
        user_id=1, pin_id=4, notified=False
    )
    pin_like5 = PinLike(
        user_id=2, pin_id=5, notified=False
    )
    pin_like6 = PinLike(
        user_id=3, pin_id=8, notified=False
    )
    pin_like7 = PinLike(
        user_id=2, pin_id=5, notified=False
    )
    pin_like8 = PinLike(
        user_id=1, pin_id=2, notified=False
    )
    pin_like9 = PinLike(
        user_id=3, pin_id=10, notified=False
    )
    pin_like10 = PinLike(
        user_id=2, pin_id=9, notified=False
    )

    db.session.add(pin_like1)
    db.session.add(pin_like2)
    db.session.add(pin_like3)
    db.session.add(pin_like4)
    db.session.add(pin_like5)
    db.session.add(pin_like6)
    db.session.add(pin_like7)
    db.session.add(pin_like8)
    db.session.add(pin_like9)
    db.session.add(pin_like10)
    db.session.commit()

def undo_pin_likes():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
