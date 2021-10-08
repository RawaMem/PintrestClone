from .db import db
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Pin_Likes(db.Model):
    __tablename__="pin_likes"

    user_id = db.Column(db.Integer,nullable=False,db.ForeignKey('users.id'))
    pin_id = db.Column(db.Integer,nullable=False,db.ForeignKey('pins.id'))
    notified = db.Column(db.Boolean,nullable=False)
    
    def to_dict(self):
        return {
            'user_id': self.user_id,
            'pin_id': self.pin_id,
            'notified': self.notified
        }

    user = db.relationship("User", back_populates="pin_likes")