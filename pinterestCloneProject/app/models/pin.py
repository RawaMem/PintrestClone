from .db import db
from app.models.board import boards_pins
from app.models.category import pins_categories



class Pin(db.Model):
    __tablename__ = 'pins'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String, nullable=False)
    media_url = db.Column(db.String, nullable=False)
    description = db.Column(db.String(400), nullable=False)
    # created_at = db.Column(db.DateTime, server_default=text('now()'))
    # updated_at = db.Column(db.DateTime, server_default=text('now()'))

    comments = db.relationship('Comment',back_populates='pin', cascade="all, delete-orphan")
    pin_likes = db.relationship('PinLike', back_populates='pin', cascade="all, delete-orphan")
    user = db.relationship('User', back_populates='pins')
    boards = db.relationship("Board", back_populates="pins", secondary=boards_pins)
    categories = db.relationship('Category', back_populates='pins', secondary=pins_categories, cascade="all, delete-orphan")




    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'media_url': self.media_url,
            'description': self.description,
            # 'created_at': self.created_at,
            # 'updated_at': self.updated_at
        }
