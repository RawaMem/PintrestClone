from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


boards_pins = db.Table(
    'boards_pins',
    db.Column('board_id', db.Integer, db.ForeignKey("boards.id"), primary_key=True),
    db.Column('pin_id', db.Integer, db.ForeignKey("pins.id"), primary_key=True),
    db.Column('notified', db.Boolean, default=False)
)

class Board(db.Model):
    __tablename__ = 'boards'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    user_id= db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    description  = db.Column(db.String(1000), nullable=False)
    private = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, server_default=text('now()'))
    updated_at = db.Column(db.DateTime, server_default=text('now()'))

    user = db.relationship("User", back_populates="boards")
    pins = db.relationship("Pin", back_populates="boards", secondary=boards_pins)




    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'description': self.description,
            'private': self.private,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
