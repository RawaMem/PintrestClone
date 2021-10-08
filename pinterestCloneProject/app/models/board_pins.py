from .db import db
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Board_Pins(db.Model):
    __tablename__ = 'board_pins'

    id = db.Column(db.Integer, primary_key=True)
    board_id = db.Column(db.Integer, db.ForeignKey('boards.id'))
    pin_id = db.Column(db.Integer, db.ForeignKey('pins.id'),nullable=False)
     notified = db.Column(db.Boolean,nullable=False)

     def to_dict(self):
         return {
             'id': self.id,
             'board_id': self. board_id,
             'pin_id': self.pin_id,
             'notified': self.notified
         }
    
    
