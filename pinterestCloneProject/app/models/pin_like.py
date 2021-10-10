from .db import db

class PinLike(db.Model):
    __tablename__='pin_likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    pin_id=db.Column(db.Integer, db.ForeignKey('pins.id'), nullable=False)
    notified=db.Column(db.Boolean, nullable=False)

    user=db.relationship('User', back_populates='pin_likes')
    pin=db.relationship('Pin', back_populates='pin_likes')


    def to_dict(self):
        return {
            'id':self.id,
            'user_id':self.user_id,
            'pin_id':self.pin_id,
            'notified':self.notified
        }
