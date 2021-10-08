from .db import db
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Liked_Category(db.Model):
    __tablename__="liked_categories"

      id = db.Column(db.Integer,nullable=False, primary_key=True)
      user_id = db.Column(db.Integer, nullable=False,db.ForeignKey('users.id'))
      category = db.Column(db.String, nullable=False)


      def to_dict(self):
          return {
              'id': self.id,
              'user_id': self.user_id,
              'category': self.category
          }
