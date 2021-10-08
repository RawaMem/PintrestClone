from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Category(db.Model):
    __tablename__='categories'

    id=db.Column(db.Integer, primary_key=True, nullable=False)
    user_id=db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    pin_id=db.Column(db.Integer, db.ForeignKey('pins.id'), nullable=False)
    category=db.Column(db.String(50), nullable=False)

    


    def to_dict(self):
        return {
            'id':self.id,
            'user_id':self.user_id,
            'pin_id':self.pin_id,
            'category':self.category
        }
