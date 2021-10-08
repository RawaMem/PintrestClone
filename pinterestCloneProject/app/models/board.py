from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class CommentLike(db.Model):
    __tablename__ = 'comment_likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id= db.Column(db.Integer, db.ForeignKey('users.id'))
    title = db.Column(db.String(100))
    description  = db.Column(db.String(1000))
    private = db.Column(db.Boolean)
    created_at = db.Column(db.DateTime, server_default=text('now()'))
    updated_at = db.Column(db.DateTime, server_default=text('now()'))



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
