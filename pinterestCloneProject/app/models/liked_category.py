from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class LikedCategory(db.Model):
    __tablename__='liked_categories'

    id = db.Column(db.Integer, primary_key=True)
    user_id=db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    category=db.Column(db.String(50), nullable=False)

    user = db.relationship('User', back_populates='liked_categories')


    def to_dict(self):
        return {
            'id':self.id,
            'user_id':self.user_id,
            'category':self.category
        }
