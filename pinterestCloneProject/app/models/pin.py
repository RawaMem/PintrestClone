from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Pin(db.Model):
    __tablename__ = 'pins'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    pin_id = db.Column(db.Integer, db.ForeignKey('pins.id'))
    category = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, server_default=text('now()'))
    updated_at = db.Column(db.DateTime, server_default=text('now()'))

    pin = db.relationship('Pin', back_populates='comments')




    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'pin_id': self.pin_id,
            'category': self.category,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
