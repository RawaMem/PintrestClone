from flask_sqlalchemy import SQLAlchemy
from app.models.board import boards_pins
from app.models.category import pins_categories

db = SQLAlchemy()


class Pin(db.Model):
    __tablename__ = 'pins'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    image_url = db.Column(db.String, nullable=False)
    title = db.Column(db.String)
    description = db.Column(db.String(400), nullable=False)
    created_at = db.Column(db.DateTime, server_default=text('now()'))
    updated_at = db.Column(db.DateTime, server_default=text('now()'))

    comments = db.relationship('Comment',back_populates='pin')
    user = db.realationship('User', back_populates='pins')
    boards = db.relationship("Board", back_populates="pins", secondary=boards_pins)
    categories = db.relatioship('Category', back_populates='pins', secondary=pins_categories)




    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'image_url': self.image_url,
            'title': self.title,
            'description': self.description,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
