from .db import db


pins_categories = db.Table(
    'pins_categories',
    db.Column('category_id', db.Integer, db.ForeignKey('categories.id'), primary_key=True),
    db.Column('pin_id', db.Integer, db.ForeignKey('pins.id'), primary_key=True)
)

class Category(db.Model):
    __tablename__='categories'

    id=db.Column(db.Integer, primary_key=True, nullable=False)
    user_id=db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    category=db.Column(db.String(50), nullable=False)

    user = db.relationship('User', back_populates='categories')
    pins = db.relationship('Pin', back_populates='categories', secondary=pins_categories)



    def to_dict(self):
        return {
            'id':self.id,
            'user_id':self.user_id,
            'category':self.category
        }
