from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class CommentLike(db.Model):
    __tablename__ = 'comment_likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id= db.Column(db.Integer, db.ForeignKey('users.id'))
    comment_id = db.Column(db.Integer, db.ForeignKey('comments.id'))
    notified = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, server_default=text('now()'))
    updated_at = db.Column(db.DateTime, server_default=text('now()'))

    comment_likes = db.relationship('Comment_like', back_populates='comment')


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'comment_id': self.comment_id,
            'notified': self.notified,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
