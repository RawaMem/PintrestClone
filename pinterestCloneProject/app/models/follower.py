from .db import db

class Follower(db.Model):
    __tablename__='followers'

    id=db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    notified=db.Column(db.Boolean, nullable=False)

    # one to many
    user = db.relationship('User', back_populates='followers')

    def to_dict(self):
        return {
            'id':self.id,
            'user_id':self.user_id,
            'notified':self.notified
        }
